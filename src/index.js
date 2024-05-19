const calcularInss = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularSalarioLiquido = require("./calculo_salario_liquido");

console.log(calcularInss(7500));
console.log(calcularImpostoRenda(2826));
console.log(calcularSalarioLiquido(2500));
