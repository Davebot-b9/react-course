import React from "react";

function ResultadoCalculo(props) {
    return (
        <div>
            <h2 className="titleResult">Resultado del Cálculo</h2>
            <p className="termResult">El término n de la serie es: {props.resultado !== null ? props.resultado : "Esperando cálculo..."}</p>
        </div>
    );
}

export default ResultadoCalculo;
