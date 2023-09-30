import React, { useState } from "react";
import './formStyles.css'

/**
 * Componente `SerieForm`.
 * 
 * Este componente muestra un formulario para ingresar el valor de n y calcular
 * el término n de una serie numérica.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onCalculate - Función de devolución de llamada para realizar el cálculo.
 * @returns {JSX.Element} - El formulario de entrada de datos.
 */
function SerieForm(props) {
    const [n, setN] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onCalculate(Number(n));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="formNum">
                <label>
                    Ingrese el valor de n:
                    <input
                        type="number"
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                        className="inputN"
                    />
                </label>
                <button type="submit" className="butonCalculate">Calcular</button>
            </form>
        </div>
    );
}

export default SerieForm;
