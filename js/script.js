// 1. Comparação de Números
function compararNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = document.getElementById("resultado1");

    if (num1 === num2) {
        resultado.innerHTML = "Números iguais.";
    } else if (num1 > num2) {
        resultado.innerHTML = "Primeiro é maior.";
    } else {
        resultado.innerHTML = "Segundo é maior.";
    }
}

// 2. Verificação de Valor
function verificarValor() {
    let valor = parseFloat(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado2");

    if (valor > 0) {
        resultado.innerHTML = "O valor informado é positivo.";
    } else if (valor < 0) {
        resultado.innerHTML = "O valor informado é negativo.";
    } else {
        resultado.innerHTML = "O valor informado é zero.";
    }
}

// 3. Maior de Três Valores
function maiorDeTres() {
    let val1 = parseFloat(document.getElementById("val1").value);
    let val2 = parseFloat(document.getElementById("val2").value);
    let val3 = parseFloat(document.getElementById("val3").value);
    let resultado = document.getElementById("resultado3");

    if (val1 > val2 && val1 > val3) {
        resultado.innerHTML = "O maior valor é: " + val1;
    } else if (val2 > val1 && val2 > val3) {
        resultado.innerHTML = "O maior valor é: " + val2;
    } else {
        resultado.innerHTML = "O maior valor é: " + val3;
    }
}

// 4. Comparação de Dois Valores
function compararDois() {
    let valorA = parseFloat(document.getElementById("valorA").value);
    let valorB = parseFloat(document.getElementById("valorB").value);
    let resultado = document.getElementById("resultado4");

    if (valorA === valorB) {
        resultado.innerHTML = "Números iguais.";
    } else if (valorA > valorB) {
        resultado.innerHTML = "Primeiro é maior.";
    } else {
        resultado.innerHTML = "Segundo é maior.";
    }
}

// 5. Média de 10 Valores
function calcularMedia() {
    let valores = [];
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let valor = parseFloat(prompt("Digite o " + i + "º valor:"));
        valores.push(valor);
        soma += valor;
    }

    let media = soma / 10;
    let resultado = document.getElementById("resultado5");
    resultado.innerHTML = "Valores informados: " + valores.join(", ") + "<br>Média: " + media.toFixed(2);
}

// 6. Soma de 10 Números
function calcularSoma() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt("Digite o " + i + "º número:"));
        soma += numero;
    }

    let resultado = document.getElementById("resultado6");
    resultado.innerHTML = "A soma dos 10 números é: " + soma;
}

// 7. Soma de Números Inferiores a 72
function somaInferiores() {
    let soma = 0;
    let numerosInferiores = [];

    for (let i = 1; i <= 6; i++) {
        let numero = parseFloat(prompt("Digite o " + i + "º número:"));
        if (numero < 72) {
            soma += numero;
            numerosInferiores.push(numero);
        }
    }

    let resultado = document.getElementById("resultado7");
    resultado.innerHTML = "Os números informados foram: " + numerosInferiores.join(", ") + "<br>A soma dos números inferiores a 72 é: " + soma;
}

// 8. Média de Quatro Números (0 a 10)
function calcularMediaQuatro() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let resultado = document.getElementById("resultado8");

    if (num1 >= 0 && num1 <= 10 && num2 >= 0 && num2 <= 10 && num3 >= 0 && num3 <= 10 && num4 >= 0 && num4 <= 10) {
        let media = (num1 + num2 + num3 + num4) / 4;
        resultado.innerHTML = "Média: " + media.toFixed(2);
        if (media > 5) {
            resultado.innerHTML += "<br>Você passou no teste.";
        } else {
            resultado.innerHTML += "<br>Tente novamente.";
        }
    } else {
        resultado.innerHTML = "Os números devem estar entre 0 e 10.";
    }
}

// 9. Verificação de Idade para Votação
function verificarVotacao() {
    let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    let resultado = document.getElementById("resultado9");

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    if (idade >= 16) {
        resultado.innerHTML = "Você pode votar este ano.";
    } else {
        resultado.innerHTML = "Você não pode votar este ano.";
    }
}

// 10. Verificação de Senha
function verificarSenha() {
    let senha = document.getElementById("senha").value;
    let resultado = document.getElementById("resultado10");

    if (senha === "1234") {
        resultado.innerHTML = "ACESSO PERMITIDO";
    } else {
        resultado.innerHTML = "ACESSO NEGADO";
    }
}
