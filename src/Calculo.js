import React from "react";
import SerieNumerica from "./SerieNumerica";

/**
 * Componente `SerieCalculadora`.
 * 
 * Este componente realiza el cálculo del término n de la serie numérica y
 * llama a la función `props.onResultadoCalculado` para pasar el resultado.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.n - El valor de n para calcular el término de la serie.
 * @param {Function} props.onResultadoCalculado - Función de devolución de llamada para recibir el resultado.
 * @returns {null} - Este componente no tiene representación visual.
 */
function SerieCalculadora(props) {
    // Se utiliza useEffect para realizar el cálculo cuando props.n cambia
    React.useEffect(() => {
        const serieNumerica = new SerieNumerica();
        const resultado = serieNumerica.serie(props.n);
        props.onResultadoCalculado(resultado);
    }, [props, props.n]);

    return null; // El componente no necesita representación visual
}

export default SerieCalculadora;
