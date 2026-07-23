# DocCells

DocCells is a multilingual, browser-based spreadsheet application focused on
simplicity, speed, and Excel interoperability.

## Features

- A complete spreadsheet interface with a standalone menu bar
  (File / Edit / View / Insert / Format / Data / Tools)
- Formulas, formatting, frozen panes, sorting and filtering
- Charts, conditional formatting and sheet protection
- Import/export to Excel (`.xlsx`)
- UI localized in 11 languages

## Built on open source

DocCells uses a customized version of
[FortuneSheet](https://github.com/ruilisi/fortune-sheet) as its spreadsheet
grid and calculation foundation. DocCells extends and adapts it with its own
application interface, features, localization, Excel tooling and compatibility
patches.

## Getting started

```bash
git clone https://github.com/erichake/doccells.git
cd doccells
npm install
npm run dev
```

`npm install` also runs a `postinstall` step that patches the
`@fortune-sheet` packages and injects the custom locales used by the app
(see `scripts/`) — no extra setup needed.

The dev server runs at `http://localhost:5174`.

## Available scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build (output in `dist/`)
- `npm run preview` — locally preview a production build
- `npm run lint` — run ESLint

## License

DocCells is licensed under the [GNU-GPL v3](LICENSE).
See [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md) for the licenses of
embedded/vendored third-party code and dependencies.
