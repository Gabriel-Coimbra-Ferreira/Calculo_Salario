const botaoCalc = document.getElementById("CalcularLiq");

botaoCalc.addEventListener("click", calcularSalarioLiquido);

function calcularSalarioLiquido() {
  var salarioBruto = parseFloat(document.getElementById('Digitar-bruto').value);
  let descontoINSS = 0;
  let impoRend = 0;

  var salario = salarioBruto;
//calculo de inss
  if (salario <= 1320) {
    descontoINSS = salario * 0.075;
  } else if (salario <= 2571.29) {
    descontoINSS = salario * 0.09;
  } else if (salario <= 3856.94) {
    descontoINSS = salario * 0.12;
  } else if (salario <= 7507.29) {
    descontoINSS = salario * 0.14;
  } else {
    descontoINSS = 1051.0206;
  }
//calculo de imposto de renda
  if (salario <= 1903.98) {
    impoRend = 0;
  } else if (salario <= 2826.65) {
    impoRend = salario * 0.075;
  } else if (salario <= 3757.05) {
    impoRend = salario * 0.15;
  } else if (salario <= 4664.68) {
    impoRend = salario * 0.225;
  } else if (salario > 4664.69) {
    impoRend = salario * 0.275;
  }

  var salarioLiquido = salarioBruto - descontoINSS - impoRend;
  console.log(salarioLiquido);
  var texto = document.getElementById("Seu-salario");
  texto.textContent = "Salário líquido: R$" + salarioLiquido;
}