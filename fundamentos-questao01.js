// Obtém a data e hora atuais
const agora = new Date();

// Obtém o dia da semana
const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira",
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
];
const diaDaSemana = diasDaSemana[agora.getDay()];

// Obtém a hora atual
const horas = String(agora.getHours()).padStart(2, '0');
const minutos = String(agora.getMinutes()).padStart(2, '0');
const segundos = String(agora.getSeconds()).padStart(2, '0');

// Exibe as propriedades de data e hora
console.log(`Hoje é: ${diaDaSemana}.`);
console.log(`A hora atual é: ${horas}:${minutos}:${segundos}.`);
