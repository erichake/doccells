import ReactDOM from "react-dom/client";
// Avant App : le moteur de formules doit être en place à la création du Workbook.
import "./features/recalc/installFormulaEngine.js";
import App from "./App.jsx";
import "@fortune-sheet/react/dist/index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
