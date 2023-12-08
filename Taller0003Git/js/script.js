document.addEventListener("DOMContentLoaded", function () {

    var tela = document.getElementById("tela");

    //Array de elementos que receber uma listener
    var listenerBtn = [];

    //teclas adicionais do teclado
    var btnResultado = document.getElementById("resultado");
    var btnLimparTela = document.getElementById("limparTela");
    var btnApagarAnterior = document.getElementById("apagarAnterior");
    var gradosBtn = document.getElementById("grados");

    listenerBtn.push(document.getElementById("ponto"));

    //teclas dos operadores
    listenerBtn.push(document.getElementById("soma"));
    listenerBtn.push(document.getElementById("subtracao"));
    listenerBtn.push(document.getElementById("divisao"));
    listenerBtn.push(document.getElementById("multiplicacao"));
    

    //teclas númericas da calculadora
    listenerBtn.push(document.getElementById("num0"));
    listenerBtn.push(document.getElementById("num1"));
    listenerBtn.push(document.getElementById("num2"));
    listenerBtn.push(document.getElementById("num3"));
    listenerBtn.push(document.getElementById("num4"));
    listenerBtn.push(document.getElementById("num5"));
    listenerBtn.push(document.getElementById("num6"));
    listenerBtn.push(document.getElementById("num7"));
    listenerBtn.push(document.getElementById("num8"));
    listenerBtn.push(document.getElementById("num9"));

    //Adicionando evento de click
    for (var i = 0; i < listenerBtn.length; i++) {
        listenerBtn[i].addEventListener("click", passarValorTela);
    }

    btnResultado.onclick = function () {
        verificarResulatado();
    }

    gradosBtn.onclick = function () {
        convertirAFahrenheit();
    }

    function convertirAFahrenheit() {
        try {
            // Obtener el valor ingresado en grados Celsius
            var celsius = parseFloat(tela.value);

            // Verificar si se ingresó un número válido
            if (isNaN(celsius)) {
                alert("Por favor, ingrese un número válido en grados Celsius.");
                return;
            }

            // Realizar la conversión a Fahrenheit
            var fahrenheit = (celsius * 9/5) + 32;

            // Mostrar el resultado en la pantalla
            tela.value = fahrenheit.toFixed(2) + " °F";
        } catch (e) {
            console.error(e);
        }
    }

    function verificarResulatado() {
        try {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            if (verificarOperador(aux)) {
                apagarAnterior();
            }

            var valorCalculado = eval(tela.value); //calcular o conteúdo da string
            if (valorCalculado || valorCalculado == "0") {
                tela.value = valorCalculado;
            } else {
                throw "erro";
            }
        } catch (e) {
            console.error(e);
        }
    }

    function passarValorTela() {

        if (verificarOperador(this.value)) {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            //subtituir o valor do operador pelo atual
            if (verificarOperador(aux)) {
                apagarAnterior();
            }
        }
        if (this.value) {
            tela.value += this.value;
        }

    }

    btnApagarAnterior.onclick = function () {
        apagarAnterior();
    }

    function apagarAnterior() {
        if (tela.value.length > 0) {
            var aux = tela.value.substring(0, tela.value.length - 1);
            tela.value = aux;
        }
    }

    btnLimparTela.onclick = function () {
        tela.value = "";
    }

    function verificarOperador(valor) {
        switch (valor) {
            case "+":
                return true;
            case "-":
                return true;
            case "*":
                return true;
            case "/":
                return true;

            default:
                return false;
        }
    }

});