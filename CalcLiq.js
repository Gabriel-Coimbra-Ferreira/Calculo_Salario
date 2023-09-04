const botaoCalc = document.getElementById ("CalcularLiq")

botaoCalc.addEventListener("click",calcularSalarioLiquido)

function calcularSalarioLiquido() {
    var salarioBruto = parseFloat(document.getElementById('Digitar-bruto').value);
    let descontoINSS = 0;
    var salario = salarioBruto

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
    
    var salarioLiquido = salarioBruto - descontoINSS;
    console.log(salarioLiquido)
    var texto = document.getElementById ("Seu-salario")
    texto.textContent = "Salário líquido: R$", salarioLiquido
}