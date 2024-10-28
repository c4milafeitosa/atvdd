// Função para verificar os números
function verificaNumeros(num1, num2, num3) {
    if (num1 >= 50 && num1 <= 99 && num2 >= 50 && num2 <= 99 && num3 >= 50 && num3 <= 99) {
        console.log("Todos os números estão entre 50 e 99. Sucesso!");
    } else {
        console.log("Erro: Um ou mais números não estão dentro do intervalo de 50 a 99.");
    }
}

// Exemplos de uso
const numero1 = 60; // Substitua pelo valor desejado
const numero2 = 75; // Substitua pelo valor desejado
const numero3 = 85; // Substitua pelo valor desejado

verificaNumeros(numero1, numero2, numero3);
