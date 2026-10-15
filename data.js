/* =========================================================
   TODD CENTER KIOSK DATA
   Edit this file to update the kiosk. The board picks up
   changes automatically within about 15 minutes, the next
   time nobody is using it.

   Tips:
   - Each entry sits between { and }, followed by a comma.
   - Keep the quotation marks around every value.
   - room: "" means no office is listed.
   ========================================================= */

/* ---------- Today's events ----------
   Events come from the LMC calendar automatically (Todd Center rooms only).
   Leave this empty. Only paste a Google Sheet CSV link here to use a sheet instead. */
const EVENTS_CSV_URL = "";
const EVENTS_REFRESH_MINUTES = 5;

const IDLE_SECONDS = 90;
const HELP_DESK = "TC-1215";

const PEOPLE = [
  {name:"Lisa Augustyniak", title:"Faculty, Business Administration", room:"TC-2208", phone:"269-927-8171", email:"augustyn@lakemichigancollege.edu", programs:["Business"]},
  {name:"William Baker", title:"Assistant Director, Police Academy", room:"", phone:"269-927-8743", email:"webaker@lakemichigancollege.edu", programs:["Criminal Justice"]},
  {name:"Jay Bauer", title:"Director, Berrien Talent Collaborative", room:"TC-2206", phone:"269-927-8198", email:"jbauer@lakemichigancollege.edu", programs:[]},
  {name:"James Benak", title:"Faculty, Computer Information Systems", room:"TC-2214", phone:"269-927-8772", email:"jbenak@lakemichigancollege.edu", programs:["CIS"]},
  {name:"Mary Britenfeld", title:"Faculty, Business", room:"", phone:"", email:"mbritenfeld@lakemichigancollege.edu", programs:["Business"]},
  {name:"Kristina Broughton", title:"Faculty, Business", room:"", phone:"", email:"kbroughton@lakemichigancollege.edu", programs:["Business"]},
  {name:"Tamesha Brown", title:"Adjunct Faculty, Criminology", room:"", phone:"", email:"tbrown@lakemichigancollege.edu", programs:["Criminal Justice"]},
  {name:"Brad Byerle", title:"Department Chair, Business, CIS & Criminal Justice", room:"TC-2202", phone:"269-927-8154", email:"bbyerle@lakemichigancollege.edu", programs:["Business","CIS","Criminal Justice"]},
  {name:"Jennifer Clark", title:"Administrative Coordinator, Career & Workforce Education", room:"TC-1201", phone:"269-927-8967", email:"jlclark@lakemichigancollege.edu", programs:[]},
  {name:"Randall James", title:"Faculty, Computer Information Systems", room:"", phone:"", email:"rjames@lakemichigancollege.edu", programs:["CIS"]},
  {name:"Jeffrey Johnson", title:"Adjunct, Criminal Justice", room:"", phone:"", email:"jljohnson@lakemichigancollege.edu", programs:["Criminal Justice"]},
  {name:"Kyle Kelly", title:"Faculty, CIS and Esports Director", room:"TC-2214", phone:"269-927-4568", email:"kkelly@lakemichigancollege.edu", programs:["CIS","Esports"]},
  {name:"David Krueger", title:"Dean, Career & Workforce Education", room:"TC-1212", phone:"269-927-8157", email:"dkrueger@lakemichigancollege.edu", programs:[]},
  {name:"Kristi Lafrenz", title:"Faculty, Marketing & Business Communications", room:"TC-2204", phone:"269-927-8766", email:"klafrenz@lakemichigancollege.edu", programs:["Business"]},
  {name:"Danny Langston", title:"Faculty, Business & Accounting", room:"TC-2210", phone:"269-927-8968", email:"dlangston@lakemichigancollege.edu", programs:["Business"]},
  {name:"Lynn Lehman", title:"Adjunct Faculty, Business", room:"", phone:"", email:"llehman@lakemichigancollege.edu", programs:["Business"]},
  {name:"Anthony Pastrick", title:"Faculty, Business", room:"", phone:"", email:"apastrick@lakemichigancollege.edu", programs:["Business"]},
  {name:"John Phillips", title:"Adjunct Faculty, Esports", room:"", phone:"", email:"jphillips@lakemichigancollege.edu", programs:["Esports"]},
  {name:"Robert Quigley", title:"Faculty, Computer Information Systems", room:"TC-2211", phone:"269-927-6902", email:"rquigley@lakemichigancollege.edu", programs:["CIS"]},
  {name:"Kristopher Rich", title:"Faculty, Business", room:"", phone:"", email:"krich@lakemichigancollege.edu", programs:["Business"]},
  {name:"Mark Ridgeway", title:"Faculty, Computer Information Systems", room:"TC-2216", phone:"269-927-6586", email:"mridgeway@lakemichigancollege.edu", programs:["CIS"]},
  {name:"Ryan Soper", title:"Adjunct, Police Academy", room:"", phone:"", email:"rsoper@lakemichigancollege.edu", programs:["Criminal Justice"]},
  {name:"Lynn Tuori", title:"Adjunct Faculty, Business", room:"", phone:"", email:"ltuori@lakemichigancollege.edu", programs:["Business"]},
  {name:"Joe Zwiller", title:"Faculty, Business", room:"TC-2212", phone:"269-927-1000 ext. 5003", email:"jzwiller@lakemichigancollege.edu", programs:["Business"]}
];

const OFFICES = [
  {name:"Career & Workforce Education", title:"Business, CIS, Criminal Justice, Culinary, Welding, Wine & Viticulture, and continuing education programs", room:"TC-1215", phone:"269-927-8967", email:"", keywords:"cwe workforce programs help desk front desk"},
  {name:"Dean, Career & Workforce Education", title:"Dr. David Krueger", room:"TC-1212", phone:"269-927-8157", email:"dkrueger@lakemichigancollege.edu", keywords:"dean"},
  {name:"Department Chair, Business, CIS & Criminal Justice", title:"Brad Byerle", room:"TC-2202", phone:"269-927-8154", email:"bbyerle@lakemichigancollege.edu", keywords:"chair"},
  {name:"Lake Michigan College Foundation", title:"Scholarships, donations, alumni, endowments, planned giving", room:"TC-1204", phone:"269-927-6590", email:"", keywords:"foundation alumni scholarships donate giving"},
  {name:"Berrien Talent Collaborative", title:"Director: Jay Bauer", room:"TC-2206", phone:"269-925-7655", email:"btc@lakemichigancollege.edu", keywords:"btc talent"},
  {name:"Financial Services", title:"Accounts payable and receivable, payroll, procurement cards, notary, travel and expense forms", room:"TC-2301", phone:"", email:"procards@lakemichigancollege.edu", keywords:"finance payroll notary procurement"},
  {name:"Siena Heights University", title:"Bachelor's degree completion at LMC", room:"TC-2202", phone:"269-927-6711", email:"", keywords:"siena transfer bachelor"}
];

const CAMPUS = [
  {name:"Admissions & Recruitment", where:"Hanson Technology Center, Collaboration Area", room:"", phone:"269-927-8626"},
  {name:"Financial Aid", where:"Main Building", room:"A-202", phone:"269-927-8112"},
  {name:"Records & Registration", where:"Main Building", room:"A-221", phone:"269-927-8107"},
  {name:"Bursar's Office (payments)", where:"Main Building", room:"", phone:"269-927-8610"},
  {name:"Advising", where:"Available at all campuses", room:"", phone:"", email:"advisor@lakemichigancollege.edu"},
  {name:"Career Center", where:"Main Building", room:"A-222", phone:"269-927-8147"},
  {name:"Campus Life", where:"Main Building", room:"A-200a", phone:"269-927-6172"},
  {name:"Student Well-Being & Accessibility", where:"Main Building", room:"C-201", phone:"269-927-8866"},
  {name:"Library", where:"Main Building", room:"L-170", phone:"269-927-8605"},
  {name:"Testing & Tutoring Services", where:"Main Building", room:"L-193", phone:"269-927-6173"},
  {name:"Writing Lab", where:"Main Building", room:"L-280", phone:"269-927-8167"},
  {name:"IT Service Desk", where:"Main Building", room:"C-229", phone:"269-927-8189"},
  {name:"Bookstore", where:"Main Building", room:"S-121", phone:"800-252-1562"},
  {name:"Hawks Nest Cafe", where:"Main Building", room:"", phone:"269-926-1956"},
  {name:"Campus Security", where:"Main Building", room:"S-109a", phone:"269-927-6715"},
  {name:"Fab Lab", where:"Hanson Technology Center", room:"HT-102", phone:"269-927-4851"}
];

const PROGRAMS = ["Business","CIS","Criminal Justice","Esports"];
const PROGRAM_LABEL = {"Business":"Business","CIS":"Computer Information Systems","Criminal Justice":"Criminal Justice & Police Academy","Esports":"Esports"};

/* ---------------------------------------------------------
   BUILDING MAP DATA
   Positions are percentages of the floor plan page, taken
   from the Todd Center emergency plan. YOU_ARE_HERE marks the
   kiosk; move it if the board is not in the main lobby.
   --------------------------------------------------------- */
const YOU_ARE_HERE = {floor:1, x:77.3, y:44.0, label:"You are here"};
const PLAN_CROP = {x0:2, x1:99, y0:2.5, y1:84};
const FLOOR_NAME = {1:"Ground floor", 2:"Second floor"};

const AREA = {
  geSE:"Southeast of the lobby. Walk past the Clerical desk (1201) and continue down Hall 1200.",
  geW:"West wing. Walk through the Student Commons (1101) to Corridor 1300.",
  geN:"North wing. Take the hallway north of the lobby, past the elevator.",
  s2SE:"Southeast office suite. Enter at the Waiting area (2205) and continue down Hall 2200.",
  s2S:"South end of the office suite, past the Workroom (2213).",
  s2W:"West wing, along Corridor 2300.",
  s2C:"South of the lobby, off Corridor 2100.",
  s2N:"North wing. Take the hallway north of the second-floor lobby.",
  s2L:"In the second-floor lobby, around the open stairwell."
};

const ROOMS = {
  "1201":{floor:1,x:82.0,y:50.8,area:"Just southeast of the lobby."},
  "1204":{floor:1,x:90.8,y:58.8,area:AREA.geSE},
  "1212":{floor:1,x:83.3,y:75.8,area:AREA.geSE},
  "1215":{floor:1,x:81.5,y:70.0,area:AREA.geSE},
  "1101":{floor:1,x:62.3,y:59.2,area:"Southwest of the lobby."},
  "1301":{floor:1,x:69.5,y:75.4,area:"South of the Student Commons (1101)."},
  "1303":{floor:1,x:52.9,y:76.1,area:AREA.geW},
  "1304":{floor:1,x:42.0,y:60.8,area:AREA.geW},
  "1306":{floor:1,x:29.4,y:62.6,area:AREA.geW},
  "1308":{floor:1,x:16.0,y:61.0,area:AREA.geW},
  "1309":{floor:1,x:20.1,y:77.8,area:AREA.geW},
  "1405":{floor:1,x:65.4,y:28.7,area:AREA.geN},
  "1413":{floor:1,x:65.7,y:14.3,area:AREA.geN},
  "REST1":{floor:1,x:85.0,y:24.3,area:AREA.geN},
  "ELEV1":{floor:1,x:81.5,y:37.9,area:"Northeast side of the lobby."},
  "2002":{floor:2,x:86.7,y:43.6,area:AREA.s2L},
  "2003":{floor:2,x:63.9,y:43.6,area:AREA.s2L},
  "2107":{floor:2,x:59.3,y:64.7,area:AREA.s2C},
  "2202":{floor:2,x:80.8,y:50.2,area:"Just southeast of the second-floor lobby."},
  "2204":{floor:2,x:85.7,y:52.1,area:AREA.s2SE},
  "2206":{floor:2,x:90.9,y:54.7,area:AREA.s2SE},
  "2208":{floor:2,x:90.4,y:56.9,area:AREA.s2SE},
  "2210":{floor:2,x:90.3,y:60.4,area:AREA.s2SE},
  "2211":{floor:2,x:80.2,y:64.7,area:AREA.s2SE},
  "2212":{floor:2,x:90.2,y:64.0,area:AREA.s2SE},
  "2214":{floor:2,x:90.2,y:67.0,area:AREA.s2SE},
  "2216":{floor:2,x:90.7,y:71.0,area:AREA.s2SE},
  "2301":{floor:2,x:76.8,y:74.8,area:AREA.s2S},
  "2303":{floor:2,x:64.8,y:72.8,area:AREA.s2W},
  "2304":{floor:2,x:40.4,y:64.7,area:AREA.s2W},
  "2305":{floor:2,x:50.3,y:73.2,area:AREA.s2W},
  "2306":{floor:2,x:25.9,y:66.2,area:AREA.s2W},
  "2308":{floor:2,x:12.3,y:65.1,area:AREA.s2W},
  "2309":{floor:2,x:25.6,y:73.9,area:AREA.s2W},
  "2311":{floor:2,x:9.3,y:73.9,area:AREA.s2W},
  "2405":{floor:2,x:64.0,y:30.5,area:AREA.s2N},
  "2413":{floor:2,x:64.5,y:17.1,area:AREA.s2N},
  "REST2":{floor:2,x:85.3,y:24.8,area:AREA.s2N},
  "ELEV2":{floor:2,x:81.5,y:38.2,area:"Northeast side of the second-floor lobby."}
};

const PLACES = [
  {id:"restrooms", name:"Restrooms", title:"Men 1408, Women 1410. Also on the second floor: Men 2408, Women 2410.", room:"", loc:"REST1", multi:"REST", show:"Restrooms", keywords:"restroom bathroom washroom toilet mens womens 1408 1410 2408 2410"},
  {id:"elevator", name:"Elevator", title:"Serves the ground and second floors.", room:"", loc:"ELEV1", multi:"ELEV", show:"Elevator", keywords:"elevator lift accessible"},
  {name:"Student Commons", title:"Seating and study space", room:"TC-1101", keywords:"commons lounge study"},
  {name:"Board of Trustees Conference Room", title:"Meeting room", room:"TC-1301", keywords:"board trustees conference"},
  {name:"Study / TLC Lab", title:"Study space and computer lab", room:"TC-2002", keywords:"tlc lab computer study"},
  {name:"Open Study Area", title:"Study space", room:"TC-2003", keywords:"study open"},
  ...["1303","1309","1405","1413","2107","2303","2304","2305","2306","2308","2309","2311","2405","2413"].map(r => ({name:"Classroom "+r, title:"Classroom", room:"TC-"+r, keywords:"classroom class"})),
  ...["1304","1306","1308"].map(r => ({name:"Classroom "+r, title:"Classroom and meeting room", room:"TC-"+r, keywords:"classroom class meeting"}))
];

