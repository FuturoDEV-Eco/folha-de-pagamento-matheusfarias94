function calcularImpostoRenda(salario) {
  let ir = 0;
  const base1 = 0;
  const deducao1 = 0;
  const base2 = 0.075;
  const deducao2 = 158.4;
  const base3 = 0.15;
  const deducao3 = 370.4;
  const base4 = 0.225;
  const deducao4 = 651.73;
  const base5 = 0.275;
  const deducao5 = 884.96;

  if (salario <= 2112) {
    ir = salario * base1 - deducao1;
  } else if (salario >= 2112.01 && salario <= 2826.65) {
    ir = salario * base2 - deducao2;
  } else if (salario >= 2826.66 && salario <= 3751.05) {
    ir = salario * base3 - deducao3;
  } else if (salario >= 3751.06 && salario <= 4664.68) {
    ir = salario * base4 - deducao4;
  } else if (salario >= 4664.68) {
    ir = salario * base5 - deducao5;
  }
  return ir;
}
module.exports = calcularImpostoRenda;
