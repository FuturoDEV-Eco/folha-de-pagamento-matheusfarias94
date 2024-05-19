const calcularInss = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require("readline");
const formatarCpf = require("./formatar_cpf");

const input = readline.createInterface(process.stdin, process.stdout);
input.question("Nome do Funcionario:", (nome) => {
  input.question("CPF do Funcionario:", (cpf) => {
    input.question("Salario Bruto:", (salarioBruto) => {
      console.log("---Folha de pagamento---");
      console.log("Nome:", nome);
      console.log("CPF:", formatarCpf(cpf));
      console.log("Salario Bruto: R$", (salario = salarioBruto));
      console.log("INSS: R$ ", (inss = calcularInss(salario)));
      console.log(
        "Imposto de renda: R$ ",
        (ir = calcularImpostoRenda(salario))
      );
      console.log(
        "Salario Liquido : R$ ",
        (salarioLiquido = calcularSalarioLiquido(salario, inss, ir))
      );
    });
  });
});
