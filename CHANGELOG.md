# Todd Center Kiosk changelog

Versions use MAJOR.MINOR.PATCH. The current version shows in the kiosk footer and in `KIOSK_VERSION` in `index.html`.

- **MAJOR**: a new section of the kiosk or a change in where its data comes from
- **MINOR**: a new feature or screen within an existing section
- **PATCH**: fixes and small display changes

When you release a change, update `KIOSK_VERSION`, add an entry here, and start the commit message with the version, for example `v2.0.1: fix room for Financial Aid`.

## v2.0.0 (2026-10-15)
- Find a person lists everyone in the LMC directory, Benton Harbor first, with other campuses labeled and an A to Z bar
- Directory refreshes nightly from the LMC website (`directory.json`, GitHub Action `Update directory`)
- Corrections lists in `data.js`: DIRECTORY_REMOVE, DIRECTORY_FIX, DIRECTORY_ADD, PROGRAM_TAGS
- Siena Heights University removed
- Elsewhere on campus comes from the directory's office listings
- Floor maps added for the Main Building, Hanson Technology Center, Welch Center, and South Haven Campus, with zoom
- Rooms not marked on a floor plan show an orange pin for their wing and floor
- Building picker on the Building map screen
- Version shown in the footer

## v1.2.0 (2026-10-14)
- Today's events come from the LMC calendar, Todd Center rooms only (`events.json`, GitHub Action `Update Todd Center events`)
- Home page tiles resize to the screen so text never overlaps

## v1.1.0 (2026-10-14)
- Today's events panel on the home page
- Directory split into `data.js`; automatic reload when the site changes

## v1.0.0 (2026-10-14)
- First release: Todd Center directory, search with on-screen keyboard, floor maps with You are here, full-screen map, start screen
