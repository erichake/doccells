# Third-party licenses

DocCells is built on top of open-source software. This file lists the
third-party code embedded directly in this repository, plus a summary of
the licenses of the packages it depends on via npm.

## Embedded / vendored code

- **`src/lib/FortuneSheetExcel/`** — vendored from
  [`@zenmrp/fortune-sheet-excel`](https://github.com/zenmrp/FortuneSheetExcel),
  MIT License, Copyright (c) 2020-present Mengshukeji. The original license
  text is kept alongside the vendored code at
  `src/lib/FortuneSheetExcel/LICENSE`.
- **`src/lib/ToFortuneSheet/`**, **`src/lib/HandleZip.ts`** — derived from the
  same `@zenmrp/fortune-sheet-excel` sources above, under the same MIT
  license.
- **`scripts/formula-function-names.json`** — localized (Excel/Google
  Sheets-compatible) formula function names, derived from the
  [LibreOffice Calc translation files](https://github.com/LibreOffice/translations)
  (`source/<lang>/formula/messages.po` and `source/<lang>/scaddins/messages.po`),
  MPL-2.0 / LGPLv3+ dual-licensed by The Document Foundation. Used by
  `scripts/patch-fortune-formula-names.cjs` to let formulas be typed using a
  locale's own function names and argument separator (e.g. French
  `=SOMME(A1;A2)`), translated to the canonical English/comma form before
  evaluation and storage.

## npm dependencies

All direct runtime dependencies (`react`, `react-dom`, `@fortune-sheet/core`,
`@fortune-sheet/react`, `@fortune-sheet/formula-parser`,
`@zenmrp/fortune-sheet-excel`, `exceljs`, `file-saver`) and build tooling
(`vite`, `@vitejs/plugin-react`, `eslint` and its plugins) are licensed under
the **MIT License**.

The full transitive dependency tree (`node_modules`) is otherwise made up of
permissive licenses compatible with distributing DocCells under GNU-GPL v3:
MIT, ISC, BSD-2-Clause, BSD-3-Clause, and Apache-2.0. A couple of notable
cases:

- `jszip` (used by `exceljs`) is dual-licensed **MIT OR GPL-3.0-or-later**.
- `big-integer` is under the **Unlicense** (public domain).
- `caniuse-lite` (**CC-BY-4.0**) and `argparse` (**Python-2.0**) are
  build-tooling-only dependencies (via Vite/ESLint) and are never shipped in
  the built application.

No dependency imposes copyleft obligations on DocCells itself.
