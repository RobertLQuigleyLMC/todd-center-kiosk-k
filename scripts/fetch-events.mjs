// Pulls Todd Center events from the LMC Coursedog calendar into events.json.
// Runs in GitHub Actions on a schedule. Node 20+, no dependencies.
import vm from "node:vm";
import fs from "node:fs";

const SITE = "https://lakemichigancollege.events.prod.coursedog.com";
const TZ = "America/Detroit";
const DAYS_AHEAD = Number(process.env.DAYS_AHEAD || 1);   // today + tomorrow
const OUT = process.env.OUT || "events.json";
const isTodd = s => /^TC-|Todd Center/i.test(s || "");

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function get(url){
  for (let i = 0; i < 3; i++){
    try {
      const r = await fetch(url, {headers:{"User-Agent":"LMC Todd Center kiosk (github.com/kyleleroykelly/todd-center-kiosk)"}});
      if (r.ok) return await r.text();
      throw new Error(r.status + " " + url);
    } catch (e){ if (i === 2) throw e; await sleep(2000 * (i + 1)); }
  }
}
function nuxt(html){
  const m = html.match(/<script>window\.__NUXT__=([\s\S]*?)<\/script>/);
  if (!m) throw new Error("Calendar page format changed: no __NUXT__ data found");
  const ctx = vm.createContext(Object.create(null));
  return vm.runInContext("(" + m[1].replace(/;\s*$/, "") + ")", ctx, {timeout: 2000});
}
function walk(o, fn, seen = new Set()){
  if (!o || typeof o !== "object" || seen.has(o)) return;
  seen.add(o); fn(o);
  for (const v of Object.values(o)) walk(v, fn, seen);
}
const ymd = d => new Intl.DateTimeFormat("en-CA", {timeZone: TZ, year:"numeric", month:"2-digit", day:"2-digit"}).format(d);
const hhmm = t => t == null || t === "" ? null : `${String(Math.floor(t/100)).padStart(2,"0")}:${String(t%100).padStart(2,"0")}`;

async function day(dateStr){
  const [y, mo, d] = dateStr.split("-");
  const data = nuxt(await get(`${SITE}/${y}/${Number(mo)}/${Number(d)}`));
  const meetings = new Map();
  walk(data, o => { if (o.id && o.eventData && o.eventData.id && "startTime" in o) meetings.set(o.id, o); });
  if (!meetings.size) console.log(`${dateStr}: no events listed`);
  const out = [];
  for (const m of meetings.values()){
    await sleep(400);
    let room = null;
    try {
      const det = nuxt(await get(`${SITE}/events/${m.eventData.id}/${m.id}`));
      let roomId = null; const rooms = {};
      walk(det, o => {
        if (o.id === m.id && "roomId" in o && o.roomId) roomId = o.roomId;
        if (o.displayName && (o.buildingId !== undefined || o.roomNumber !== undefined) && (o._id || o.id)) rooms[o._id || o.id] = o;
      });
      if (roomId) room = rooms[roomId] ? rooms[roomId].displayName : roomId;
    } catch (e){ console.log(`  could not read location for "${m.eventData.name}": ${e.message}`); }
    console.log(`${dateStr} ${hhmm(m.startTime) || "all day"}  ${m.eventData.name}  @ ${room || "no location"}`);
    if (!isTodd(room)) continue;
    const num = (room.match(/\b([12]\d{3})\b/) || [])[1] || "";
    const pretty = room.replace(/^TC-TC-/, "TC-").replace(/\(TC /, "(");
    out.push({
      date: dateStr, start: hhmm(m.startTime), end: hhmm(m.endTime),
      title: m.eventData.name, location: pretty, room: num ? "TC-" + num : "",
      details: (m.eventData.description || "").replace(/\s+/g, " ").trim().slice(0, 220),
      url: `${SITE}/events/${m.eventData.id}/${m.id}`
    });
  }
  return out;
}

const dates = [...Array(DAYS_AHEAD + 1)].map((_, i) => ymd(new Date(Date.now() + i * 864e5)));
const events = [];
for (const d of dates) events.push(...await day(d));
events.sort((a, b) => (a.date + (a.start || "")).localeCompare(b.date + (b.start || "")));
const body = {source: SITE, building: "Todd Center", dates, events};
let prev = null;
try { prev = JSON.parse(fs.readFileSync(OUT, "utf8")); } catch {}
if (prev && JSON.stringify({...prev, updated: undefined}) === JSON.stringify({...body, updated: undefined})){
  console.log(`No changes: ${events.length} Todd Center event(s) for ${dates.join(", ")}`);
} else {
  fs.writeFileSync(OUT, JSON.stringify({...body, updated: new Date().toISOString()}, null, 2) + "\n");
  console.log(`Wrote ${events.length} Todd Center event(s) for ${dates.join(", ")} to ${OUT}`);
}
