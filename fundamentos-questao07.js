// Função para modificar a frase
function modificaFrase(frase) {
    // Divide a frase em palavras
    const palavras = frase.split(' ');

    // Mapeia as palavras de acordo com os critérios
    const novaFrase = palavras.map(palavra => {
        if (palavra.length < 5) {
            return palavra.toUpperCase(); // Maiúsculo para palavras menores que 5 caracteres
        } else {
            return palavra.toLowerCase(); // Minúsculo para palavras maiores que 5 caracteres
        }
    });

    // Junta as palavras de volta em uma frase
    return novaFrase.join(' ');
}

// Exemplo de uso
const fraseOriginal = "Este é um exemplo de frase para modificar"; // Substitua pela frase desejada
const fraseModificada = modificaFrase(fraseOriginal);
console.log(`Frase modificada: ${fraseModificada}`);
