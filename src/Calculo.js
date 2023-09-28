import React from "react";
import SerieNumerica from "./SerieNumerica";

function SerieCalculadora(props) {
    React.useEffect(() => {
        const serieNumerica = new SerieNumerica();
        const resultado = serieNumerica.serie(props.n);
        props.onResultadoCalculado(resultado);
    }, [props, props.n]);

    return null; // El componente no necesita representación visual
}

export default SerieCalculadora;