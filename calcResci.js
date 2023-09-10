// Função para calcular a rescisão
function calcularRescisao() {
    var salario = parseFloat(document.getElementById('salario').value);
    var diasServico = parseInt(document.getElementById('dias-servico').value);
    var valorHoraExtra = parseFloat(document.getElementById('valor-hora-extra').value);
    var horasExtrasTrabalhadas = parseFloat(document.getElementById('horas-extras').value);

    // Realizar o cálculo da rescisão
    var tempoServicoAnos = Math.floor(diasServico / 365);
    var rescisao = (salario * tempoServicoAnos) + (valorHoraExtra * horasExtrasTrabalhadas);

    // Atualizar o elemento HTML com o resultado
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = 'Sua Rescisão: R$ ' + rescisao.toFixed(2);
}
var botaoCalcular = document.getElementById('calcular');
botaoCalcular.addEventListener('click', calcularRescisao);