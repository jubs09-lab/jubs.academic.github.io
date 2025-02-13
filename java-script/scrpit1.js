function submitForm() {
    alert('Dados enviados com sucesso!');
    // Aqui você pode adicionar qualquer lógica adicional de envio
}


document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("Calculo").addEventListener("click", calcular);

});
function calcular() {
    // Pegar os valores digitados
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = 0;

    switch (operacao) {
        case "soma":
            resultado = numero1 + numero2;
            break;
        case "subtracao":
            resultado = numero1 - numero2;
            break;
        case "multiplicacao":
            resultado = numero1 * numero2;
            break;
        case "divisao":
            resultado = numero2 !== 0 ? numero1 / numero2 : "Erro! Divisão por zero.";
            break;
        default:
            resultado = "Operação inválida!";
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Converter").addEventListener("click", converter);
});
function converter() {
    let tipo = document.getElementById("Conversao").value;
    let valor = parseFloat(document.getElementById("valor").value);
    let resultado = "";
    if (isNaN(valor)) {
        resultado = "Digite um número válido!";
    } else {
        switch (tipo) {
            case "celsiusFahrenheit":
                resultado = `${valor}°C = ${(valor * 9/5 + 32).toFixed(2)}°F`;
                break;
            case "metrosCentimetros":
                resultado = `${valor} metros = ${(valor * 100).toFixed(2)} cm`;
                break;
            case "quilosLibras":
                resultado = `${valor} kg = ${(valor * 2.20462).toFixed(2)} lbs`;
                break;
            default:
                resultado = "Escolha uma opção válida!";
        }
    }

    document.getElementById("resultado").innerText = resultado;
}





document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", calcularIMC);
});

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerText = "Por favor, insira corretamente os valores!";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade Grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3 (Mórbida)";
    }

    resultado.innerText = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}



document.addEventListener("DOMContentLoaded", function () {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
    let tentativa = 0;

    document.getElementById("verificar").addEventListener("click", function () {
        let palpite = parseInt(document.getElementById("palpite").value);
        let mensagem = document.getElementById("mensagem");

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            mensagem.innerText = "Digite um número válido entre 1 e 100!";
            return;
        }

        tentativa++;

        if (palpite === numeroSecreto) {
            mensagem.innerText = `🎉 ✨🤩Parabéns! Você acertou em ${tentativa} tentativas!`;
        } else if (palpite < numeroSecreto) {
            mensagem.innerText = "Tente um número maior!";
        } else {
            mensagem.innerText = "Tente um número menor!";
        }
    });
});


function submitQuiz() {
    let score = 0;

    const answers = {
        q1: '3',
        q2: 'não',
        q3: 'Frozen e Boneca',
        q4: 'praticar algum esporte',
        q5: 'cozinhar (sobremesa)'
    };

    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    Object.keys(answers).forEach((key) => {
        const selectedOption = form.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption && selectedOption.value === answers[key]) {
            score++;
        }
    });

    resultDiv.innerHTML = `Você acertou ${score} de ${Object.keys(answers).length} questões!`;
}