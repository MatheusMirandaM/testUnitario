const calculadora = require('../../src/calculadora');

test('Somar', () => {

    const somarDoisNumeros = calculadora.somarDoisNumeros;
    const num1 = 5;
    const num2 = 7;
    const resultadoEsperado = 12;
    
    const resultadoObtido = somarDoisNumeros(num1, num2);
    expect(resultadoObtido).toBe(resultadoEsperado);
    console.log('Resultado: ', resultadoObtido);
    
});