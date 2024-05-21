function calcularSalarioLiquido(salario, inss, ir) {
  const salarioLiquido = salario - inss - ir;
  return salarioLiquido;
}

module.exports = calcularSalarioLiquido;
