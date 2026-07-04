# DocCells

DocCells is a spreadsheet app built with React and [FortuneSheet](https://github.com/ruilisi/fortune-sheet).

## Features

- Spreadsheet editing powered by FortuneSheet (formulas, formatting, freeze
  panes, sort & filter)
- Charts, plus conditional formatting and sheet protection that go well
  beyond what FortuneSheet provides out of the box, built on top of it by
  DocCells
- Import/export to Excel (`.xlsx`)
- Standalone menu bar (File / Edit / View / Insert / Format / Data / Tools)
- UI localized in 11 languages

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
