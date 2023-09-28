import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Crea una raíz de ReactDOM en el elemento con el ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza la aplicación principal en la raíz de ReactDOM
root.render(
    <>
        <App />
    </>
);
