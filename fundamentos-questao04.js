// Função que verifica as condições
function verificaNumeros(num1, num2) {
    return (num1 === 30 || num2 === 30 || (num1 + num2 === 30) || (num1 === 12 && num2 === 12));
}

// Exemplos de uso
const numero1 = 30; // Substitua pelo valor desejado
const numero2 = 12; // Substitua pelo valor desejado

const resultado = verificaNumeros(numero1, numero2);
console.log(`O resultado da verificação é: ${resultado}`);
