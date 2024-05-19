function calcularInss(salario) {
  let inss = 0;
  const aliquota1 = 0.075;
  const aliquota2 = 0.09;
  const aliquota3 = 0.12;
  const aliquota4 = 0.14;

  if (Number(salario) <= 1412) {
    inss = salario * Number(aliquota1);
  } else if (Number(salario) >= 1412.01 && Number(salario) <= 2666.68) {
    inss = salario * Number(aliquota2);
  } else if (Number(salario) && Number(salario) <= 4000.03) {
    inss = salario * Number(aliquota3);
  } else if (Number(salario) >= 4000.04 && Number(salario) <= 7786.02) {
    inss = salario * Number(aliquota4);
  }
  if(inss > 908.85)
    
    inss = 908.85;
  
  return inss.toFixed(2);
}
module.exports = calcularInss;
