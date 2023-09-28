import React from "react";
/**
 * Componente `ResultadoCalculo`.
 * 
 * Este componente muestra el resultado del cálculo del término n de la serie numérica.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {number|null} props.resultado - El resultado del cálculo del término n.
 * @returns {JSX.Element} - La representación visual del resultado.
 */
function ResultadoCalculo(props) {
    return (
        <div>
            <h2 className="titleResult">Resultado del Cálculo</h2>
            <p className="termResult">El término n de la serie es: {props.resultado !== null ? props.resultado : "Esperando cálculo..."}</p>
        </div>
    );
}

export default ResultadoCalculo;
