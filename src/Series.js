class SerieNumerica {
    constructor() {
        // Inicializamos algunos valores iniciales para la serie Fibonacci.
        this.fibonacci = [0, 1];
    }

    // Método para calcular el número triangular
    triangular(n) {
        return (n * (n + 1)) / 2;
    }

    // Método para verificar si un número es primo
    esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Método para calcular el término n de la serie Fibonacci
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

    // Método para calcular el término n de la serie
    serie(n) {
        if (n < 0) {
            return "N/A"; // Manejamos el caso de n negativo
        }

        // Calculamos los valores necesarios para la fórmula
        const termTriangular = this.triangular(n + 2);
        const termPrimo = this.esPrimo(n - 1) ? 3 * (n - 1) : 0;
        const termFibonacci = this.calcularFibonacci(n);

        // Calculamos el término de la serie
        const resultado = 2 * termTriangular - termPrimo - 7 * termFibonacci;

        return resultado;
    }
}

// Pruebas unitarias
const serieNumerica = new SerieNumerica();
for (let i = 0; i <= 10; i++) {
    console.log(`Serie(${i}) = ${serieNumerica.serie(i)}`);
}

export default SerieNumerica