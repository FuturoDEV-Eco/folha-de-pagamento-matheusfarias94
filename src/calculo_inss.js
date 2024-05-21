function calcularInss(salario) {
  let inss = 0;
  const aliquota1 = 0.075;
  const aliquota2 = 0.09;
  const aliquota3 = 0.12;
  const aliquota4 = 0.14;

  if (salario <= 1412) {
    inss = salario * aliquota1;
  } else if (salario >= 1412.01 && salario <= 2666.68) {
    inss = salario * aliquota2;
  } else if (salario && salario <= 4000.03) {
    inss = salario * aliquota3;
  } else if (salario >= 4000.04 && salario <= 7786.02) {
    inss = salario * aliquota4;
  }
  if (inss > 908.85) inss = 908.85;

  return inss;
}
module.exports = calcularInss;
