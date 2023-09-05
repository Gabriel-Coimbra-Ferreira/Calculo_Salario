function calculo_ferias(){
    var salario = parseFloat(document.getElementById('digitarFerias').value);
    ferias=0
    descontoINSS=0
    impRend=0
    //calcular salario liquido
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
    //calculo de imposto
    if (salario <=1903.98){
        impRend =0
    }
    else if(salario<=2112.01 && salario> 2826.65) {
        impoRend=salario * 0.075
    }
 
    else if(salario<=2826.66 && salario> 3757.05) {
        impoRend=salario * 0.15
    }
    
    else if(salario<=3757.06 && salario> 4664.68) {
        impoRend=salario * 0.225
    }
        
    else if(salario> 4664.69) {
        impoRend=salario * 0.275
    
}
}