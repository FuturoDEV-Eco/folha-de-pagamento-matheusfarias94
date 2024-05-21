const readline = require("readline");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const calcularInss = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const formatarCpf = require("./formatar_cpf");

const input = readline.createInterface(process.stdin, process.stdout);
input.question ("Nome Completo do Funcionario: ", (nome) => {
  input.question("CPF do Funcionario: ", (cpf) => {
    input.question("Salario Bruto: ", (salarioBruto) => {
      console.log("---Folha de pagamento---");
      console.log("Nome: ", nome);
      console.log("CPF: ", formatarCpf(cpf));
      console.log("Salario Bruto: R$", (salario = Number(salarioBruto)));
      console.log("INSS: R$ ", (inss = calcularInss(salario).toFixed(2)));
      console.log(
        "Imposto de renda: R$ ",
        (ir = calcularImpostoRenda(salario).toFixed(2))
      );
      console.log(
        "Salario Liquido : R$ ",
        (salarioLiquido = calcularSalarioLiquido(salario, inss, ir).toFixed(2))
      );
      input.question("Deseja gerar um PDF? (s/n)", (resposta) => {
        if (resposta.toLowerCase() === "s") {
          const doc = new PDFDocument();
          doc.pipe(fs.createWriteStream(`Folha de pagamento ${nome}.pdf`));
          doc.fontSize(16);
          doc.text("---Folha de pagamento---");
          doc.text(`Data de Geração: ${new Date().toLocaleDateString()}`);
          doc.text(`Funcionario: ${nome}`);
          doc.text(`CPF: ${cpf}`);
          doc.text(`------`);
          doc.text(`Salario Bruto: R$ ${salarioBruto}`);
          doc.text(`INSS: R$ ${inss}`);
          doc.text(`Imposto de renda: R$ ${ir}`);
          doc.text(`Salario Liquido: R$ ${salarioLiquido}`);
          doc.end();
          console.log("Folha de pagamento salva");
        }else{
          console.log("Geração de PDF recusada")
        }
      });
    });
  });
});
