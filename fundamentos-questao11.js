// Função para retornar os últimos n elementos de uma lista
function ultimosElementos(numeros, n) {
    return numeros.slice(-n); // Usa slice para obter os últimos n elementos
}

// Exemplo de uso
const numeros = [10, 58, 68, 88, 25, 45]; // Substitua pela lista desejada
const n = 3; // Substitua pelo valor desejado
const resultado = ultimosElementos(numeros, n);
console.log(`Resultado: ${resultado}`);
