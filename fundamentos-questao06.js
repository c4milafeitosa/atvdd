// Função para encontrar o número com mais ocorrências
function numeroMaisFrequente(array) {
    const contagem = {};

    // Contar as ocorrências de cada número
    array.forEach(num => {
        contagem[num] = (contagem[num] || 0) + 1;
    });

    let maxNumero = null;
    let maxContagem = 0;

    // Encontrar o número com maior contagem
    for (const num in contagem) {
        if (contagem[num] > maxContagem) {
            maxContagem = contagem[num];
            maxNumero = num;
        }
    }

    return maxNumero;
}

// Exemplo de uso
const numeros = [1, 3, 2, 3, 4, 1, 3, 5, 1]; // Substitua pelo array desejado
const resultado = numeroMaisFrequente(numeros);
console.log(`O número com mais ocorrências é: ${resultado}`);
