// Função para ordenar os elementos numéricos de uma lista
function ordenarLista(numeros) {
    return numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
}

// Exemplo de uso
const listaNumeros = [34, 12, 5, 67, 23, 89, 1]; // Substitua pela lista desejada
const listaOrdenada = ordenarLista(listaNumeros);
console.log(`Lista ordenada: ${listaOrdenada}`);
