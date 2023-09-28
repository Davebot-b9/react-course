import React, { useState } from "react";
import './formStyles.css'

function SerieForm(props) {
    const [n, setN] = useState(""); // Estado para almacenar el valor de n

    const handleSubmit = (e) => {
        e.preventDefault();
        // Llama a la función de cálculo con el valor de n ingresado
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
