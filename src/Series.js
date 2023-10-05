/**
 * Clase SerieNumerica.
 * 
 * Esta clase proporciona métodos para calcular términos de una serie numérica
 * basada en fórmulas matemáticas.
 */
export default class SerieNumerica {
    constructor() {
        this.fibonacci = [0, 1];
    }

    /**
     * Método para calcular el número triangular.
     * 
     * @param {number} n - El número para el que se calcula el número triangular.
     * @returns {number} - El número triangular correspondiente a n.
     */
    triangular(n) {
        return (n * (n + 1)) / 2;
    }

    /**
 * Método para verificar si un número es primo.
 * 
 * @param {number} num - El número que se verifica como primo.
 * @returns {boolean} - `true` si el número es primo, `false` de lo contrario.
 */
    esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }


    /**
     * Método para calcular el término n de la serie Fibonacci.
     * 
     * @param {number} n - El índice del término de la serie Fibonacci que se calcula.
     * @returns {number} - El término n de la serie Fibonacci.
     */
    calcularFibonacci(n) {
        if (n < this.fibonacci.length) {
            return this.fibonacci[n];
        }

        while (this.fibonacci.length <= n) {
            const len = this.fibonacci.length;
            const nextFib = this.fibonacci[len - 1] + this.fibonacci[len - 2];
            this.fibonacci.push(nextFib);
        }

        return this.fibonacci[n];
    }

    /**
     * Método para calcular el término n de la serie numérica.
     * 
     * @param {number} n - El término de la serie numérica que se calcula.
     * @returns {number|string} - El término n de la serie numérica o "N/A" si n es negativo.
     */
    serie(n) {
        if (n < 0) {
            return "N/A";
        }

        const termTriangular = this.triangular(n + 2);
        const termPrimo = this.esPrimo(n - 1) * 3 * (n - 1);
        const termFibonacci = this.calcularFibonacci(n);


        const resultado = 2 * termTriangular - termPrimo - 7 * termFibonacci;

        return resultado;
    }
}

const serieNum = new SerieNumerica();
for (let i = 0; i <= 10; i++) {
    console.log(`Serie(${i}) = ${serieNum.serie(i)}`);
}