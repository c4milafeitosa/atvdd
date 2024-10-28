// Função para verificar se a palavra está presente na frase
function verificarPalavra(frase, palavra) {
    console.log('ops'); // Imprime 'ops' antes do resultado
    return frase.includes(palavra); // Verifica se a palavra está na frase
}

// Exemplo de uso
const frase = "Este é um exemplo de frase para teste."; // Substitua pela frase desejada
const palavra = "exemplo"; // Substitua pela palavra desejada

const resultado = verificarPalavra(frase, palavra);
console.log(`A palavra "${palavra}" está presente na frase? ${resultado}`);
