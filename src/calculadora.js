const somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

const subtrairDoisNUmeros = function subtrairDoisNUmeros(num1, num2) {
    const resultado = num1 - num2;
    return resultado;
}

const multipliocarDoisNUmeros = (num1, num2) => {
    return num1 * num2;
}

const dividirDoisNumeros = (num1, num2) => num1 / num2;

module.exports = {
    somarDoisNumeros,
    subtrairDoisNUmeros,
    multipliocarDoisNUmeros,
    dividirDoisNumeros
};