
calculo_ferias.addEventListener("click", calculo_ferias);

function calculo_ferias() {
    var salario = parseFloat(document.getElementById('digitarFerias').value);
    var ferias = 0;
    var descontoINSS = 0;
    var impoRend = 0; // Corrigido o nome da variável

    // Calcular desconto INSS
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

    // Calcular imposto de renda
    if (salario <= 1903.98) {
        impoRend = 0;
    } else if (salario <= 2112.01 && salario > 2826.65) {
        impoRend = salario * 0.075;
    } else if (salario <= 2826.66 && salario > 3757.05) {
        impoRend = salario * 0.15;
    } else if (salario <= 3757.06 && salario > 4664.68) {
        impoRend = salario * 0.225;
    } else if (salario > 4664.69) {
        impoRend = salario * 0.275;
    }

    // Calcular terço, férias brutas e férias
    var terco = salario * 1/3;
    var feriasBrut = salario + terco;
    var ferias = feriasBrut - impoRend - descontoINSS;
    
    console.log(ferias);
    
    var texto = document.getElementById("Suas-ferias");
    texto.textContent = "Valor das suas férias: R$" + ferias;
}