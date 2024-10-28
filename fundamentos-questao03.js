// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Exemplo de uso
const temperaturaCelsius = 25; // Substitua pelo valor desejado
const temperaturaFahrenheit = 77; // Substitua pelo valor desejado

console.log(`${temperaturaCelsius}°C é igual a ${celsiusParaFahrenheit(temperaturaCelsius)}°F`);
console.log(`${temperaturaFahrenheit}°F é igual a ${fahrenheitParaCelsius(temperaturaFahrenheit)}°C`);
