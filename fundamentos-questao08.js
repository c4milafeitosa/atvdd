// Função para inverter a frase
function inverterFrase(frase) {
    return frase.split('').reverse().join('');
}

// Exemplo de uso
const fraseOriginal = "Exemplo de frase para inverter"; // Substitua pela frase desejada
const fraseInvertida = inverterFrase(fraseOriginal);
console.log(`Frase invertida: ${fraseInvertida}`);
