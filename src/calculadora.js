const somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

const subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    const resultado = num1 - num2;
    return resultado;
}

const multipliocarDoisNumeros = (num1, num2) => {
    return num1 * num2;
}

const dividirDoisNumeros = (num1, num2) => num1 / num2;

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multipliocarDoisNumeros,
    dividirDoisNumeros
};