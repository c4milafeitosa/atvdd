// Função para calcular a soma dos tamanhos das palavras
function somaTamanhosPalavras(frase) {
    // Divide a frase em palavras
    const palavras = frase.split(' ');
    
    // Calcula a soma dos tamanhos
    const soma = palavras.reduce((total, palavra) => total + palavra.length, 0);
    
    return soma;
}

// Exemplo de uso
const fraseOriginal = "Este é um exemplo de frase para calcular"; // Substitua pela frase desejada
const totalTamanhos = somaTamanhosPalavras(fraseOriginal);
console.log(`A soma dos tamanhos das palavras é: ${totalTamanhos}`);
