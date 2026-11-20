// Branche dans FortuneSheet l'analyseur qui garde l'arbre des formules
// (src/lib/formula-parser) et le recalcul par index inverse
// (execFunctionGroup.js). À importer avant la création du premier Workbook :
// l'analyseur est choisi à la création de son contexte.
import { __doccellsConfigureFormulaEngine as configureFormulaEngine } from "@fortune-sheet/core";
import { Parser } from "../../lib/formula-parser/index.js";
import { execFunctionGroup } from "./execFunctionGroup.js";

export const installFormulaEngine = () => configureFormulaEngine({ Parser, execFunctionGroup });

// Revenir au moteur d'origine (tests de comparaison).
export const uninstallFormulaEngine = () => configureFormulaEngine(null);

installFormulaEngine();
