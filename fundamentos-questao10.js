// Função para converter o nome e sobrenome
function converterNomeCompleto(nomeCompleto) {
    // Divide o nome completo em partes
    const partes = nomeCompleto.split(' ');

    // Extrai o primeiro nome e sobrenomes
    const primeiroNome = partes[0];
    const sobrenomes = partes.slice(1);

    // Cria iniciais dos sobrenomes
    const iniciais = sobrenomes.map(sobrenome => `${sobrenome.charAt(0)}.`).join(' ');

    // Formata o resultado
    return `${iniciais} ${primeiroNome}`;
}

// Exemplo de uso
const nome = "Alan Mathison Turing"; // Substitua pelo nome desejado
const resultado = converterNomeCompleto(nome);
console.log(`Resultado: ${resultado}`);
