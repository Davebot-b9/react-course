import React, { useState } from "react";
import SerieForm from "./Form";
import ResultadoCalculo from "./Result";
import SerieNumerica from './Series';
import './formStyles.css'

/**
 * Componente principal `App`.
 * 
 * Este componente representa la aplicación principal que calcula el término n de una serie numérica.
 * 
 * @returns {JSX.Element} - La interfaz de usuario de la aplicación.
 */
function App() {
    const [resultado, setResultado] = useState(null);

    /**
     * Función de devolución de llamada para realizar el cálculo de la serie.
     * 
     * @param {number} n - El valor de n para calcular el término de la serie.
     */
    const onCalculate = (n) => {
        const serieNumerica = new SerieNumerica();
        const resultadoCalculado = serieNumerica.serie(n);
        setResultado(resultadoCalculado);
    };

    return (
        <div>
            <h1 className="title">Calculadora de Serie Numérica</h1>
            <SerieForm onCalculate={onCalculate} />
            <ResultadoCalculo resultado={resultado} />
        </div>
    );
}

export default App;