// Função para calcular a soma dos cubos dos números
function somaCubos(numeros) {
    return numeros.reduce((total, num) => total + Math.pow(num, 3), 0);
}

// Exemplo de uso
const listaNumeros = [1, 2, 3, 4]; // Substitua pela lista desejada
const resultado = somaCubos(listaNumeros);
console.log(`A soma dos cubos dos números é: ${resultado}`);
