# Todd Center Kiosk

Touch-screen directory and wayfinding kiosk for the Todd Center at Lake Michigan College, built for a Clevertouch display.

## Files

| File | What it is | Edit it? |
|---|---|---|
| `data.js` | People, offices, rooms, directions, and the events sheet link | Yes, this is the file you update |
| `index.html` | The kiosk app | Only for design or feature changes |
| `floor-ground.jpg`, `floor-second.jpg` | Floor plans used for the maps | Only if the building plans change |

## Updating the directory

1. Open `data.js` in GitHub and click the pencil icon.
2. Make your change. Keep the quotation marks and the comma after each `}`.
3. Click **Commit changes**.

GitHub Pages republishes in about a minute. The kiosk checks for changes every 15 minutes and reloads the next time nobody is using it. If an edit has a typo, the kiosk shows a message instead of the directory: open `data.js`, click **History**, and revert the last change.

## Today's events

Events come from a Google Sheet with the columns `Date, Start, End, Event, Location, Details`. Publish the sheet with **File > Share > Publish to web > Comma-separated values (.csv)** and paste the link into `EVENTS_CSV_URL` at the top of `data.js`. Put a Todd Center room number (for example `TC-2304`) in Location to link the event to the map.

## Kiosk settings (in `data.js`)

- `IDLE_SECONDS`: seconds without a touch before the start screen returns (90).
- `HELP_DESK`: where people without a listed office are sent (TC-1215).
- `YOU_ARE_HERE`: position of the "You are here" star on the map (main lobby).
