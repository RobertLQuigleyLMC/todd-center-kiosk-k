# Todd Center Kiosk

Touch-screen directory and wayfinding kiosk for the Todd Center at Lake Michigan College, built for a Clevertouch display. Live at https://jmbenak-lmc.github.io/todd-center-kiosk/

Current version: see `CHANGELOG.md` (also shown in the kiosk footer).

## Files

| File | What it is | Edit it? |
|---|---|---|
| `data.js` | Corrections to the directory, program tags, Todd Center rooms and directions, kiosk settings | Yes, this is the file you update |
| `index.html` | The kiosk app (holds `KIOSK_VERSION`) | Only for design or feature changes |
| `CHANGELOG.md` | Version history | Add an entry with every release |
| `directory.json` | People and offices from the LMC website | No, updated nightly by the `Update directory` Action |
| `events.json` | Today's Todd Center events from the LMC calendar | No, updated every 30 minutes by the `Update Todd Center events` Action |
| `maps/` | Floor plans and room positions for the Main Building, Hanson, Welch, and South Haven | Only if building plans change |
| `floor-ground.jpg`, `floor-second.jpg` | Todd Center floor plans | Only if building plans change |
| `scripts/` | The scripts the Actions run | Only if the LMC website changes |

## Fixing the directory

The kiosk shows what the LMC website directory says. To correct something without waiting for the website, edit `data.js`:

- `DIRECTORY_REMOVE`: names to hide
- `DIRECTORY_FIX`: change a room, building, title, phone, or email for one name
- `DIRECTORY_ADD`: people or offices missing from the directory
- `PROGRAM_TAGS`: who appears under each program on the Programs screen

Click the pencil icon on `data.js`, make the change, and commit. The kiosk picks it up within about 15 minutes, the next time nobody is using it. If an edit has a typo, the kiosk shows a message instead of the directory: open `data.js`, click **History**, and revert the last change.

## Versions

Versions use MAJOR.MINOR.PATCH. For each release, update `KIOSK_VERSION` in `index.html`, add an entry to `CHANGELOG.md`, and start the commit message with the version, for example `v2.0.1: fix room for Financial Aid`. File names on the site stay the same so the kiosk address never changes.
