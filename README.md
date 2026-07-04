# DocCells

DocCells is a spreadsheet app built with React and [FortuneSheet](https://github.com/ruilisi/fortune-sheet).

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
- `npm run build:doctools` — production build for the DocTools embed target
- `npm run preview` — locally preview a production build
- `npm run lint` — run ESLint

## License

DocCells is licensed under the [GNU-GPL v3](LICENSE).
See [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md) for the licenses of
embedded/vendored third-party code and dependencies.
