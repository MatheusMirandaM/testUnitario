const calculadora = require('../../src/calculadora');

test('Somar', () => {

    const num1 = 5;
    const num2 = 7;
    const resultadoEsperado = 12;
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    const resultadoObtido = somarDoisNumeros(num1, num2);
    expect(resultadoObtido).toBe(resultadoEsperado);
    console.log('Soma - Resultado: ', resultadoObtido);
    
});

test('Subtrair', () => {

    const num1 = 15;
    const num2 = 7;
    const resultadoEsperado = 8;
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoObtido = subtrairDoisNumeros(num1, num2);
    expect(resultadoObtido).toBe(resultadoEsperado);
    console.log('Subtrair - Resultado: ', resultadoObtido);

});

test('Multipliocar', () => {

    const num1 = 5;
    const num2 = 10;
    const resultadoEsperado = 50;
    const multipliocarDoisNumeros = calculadora.multipliocarDoisNumeros;
    const resultadoObtido = multipliocarDoisNumeros(num1, num2);
    expect(resultadoObtido).toBe(resultadoEsperado);
    console.log('Multiplicar - Resultado: ', resultadoObtido);
    
});

test('Dividir', () => {

    const num1 = 10;
    const num2 = 2;
    const resultadoEsperado = 5;
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoObitido = dividirDoisNumeros(num1, num2);
    expect(resultadoObitido).toBe(resultadoEsperado);
    console.log('Dividir - Resultado: ', resultadoObitido);
    
});