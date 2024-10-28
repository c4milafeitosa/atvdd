// Função para unir elementos da lista em uma única string
function unirElementos(lista) {
    return lista.join('#'); // Usa join para unir os elementos com o sinal de #
}

// Exemplo de uso
const lista = ["maçã", "banana", "laranja", "uva"]; // Substitua pela lista desejada
const resultado = unirElementos(lista);
console.log(`Resultado: ${resultado}`);

