import React, { useState } from "react";
import SerieForm from "./Form";
import ResultadoCalculo from "./Result";
import SerieNumerica from './Series';
import './formStyles.css'

function App() {
    const [resultado, setResultado] = useState(null);

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

