const ps = require("prompt-sync");
const prompt = ps();
var menu_choice;
do {
    console.clear();
    menu_choice = menu();
    switch (menu_choice) {
        case '1':
            var choice = "S";
            do {
                console.clear();
                var n1;
                var n2;
                do {
                    n1 = firstNumber();
                } while (!isNumber(n1))
                do {
                    n2 = secondNumber();
                } while (!isNumber(n2))
                console.log("O resultado de " + n1 + " + " + n2 + " é igual a " + (n1 + n2));
                console.log("");
                console.log("Deseja realizar outra soma? (S/N)");
                choice = prompt("").toUpperCase();
            } while (choice == "S");
            break;
        case '2':
            var choice = "S";
            do {
                console.clear();
                var n1;
                var n2;
                do {
                    n1 = firstNumber();
                } while (!isNumber(n1))
                do {
                    n2 = secondNumber();
                } while (!isNumber(n2))
                console.log("O resultado de " + n1 + " - " + n2 + " é igual a " + (n1 - n2));
                console.log("");
                console.log("Deseja realizar outra subtração? (S/N)");
                choice = prompt("").toUpperCase();
            } while (choice == "S");
            break;
        case '3':
            var choice = "S";
            do {
                console.clear();
                var n1;
                var n2;
                do {
                    n1 = firstNumber();
                } while (!isNumber(n1))
                do {
                    n2 = secondNumber();
                } while (!isNumber(n2))
                console.log("O resultado de " + n1 + " / " + n2 + " é igual a " + (n1 / n2).toPrecision(3));
                console.log("");
                console.log("Deseja realizar outra divisão? (S/N)");
                choice = prompt("").toUpperCase();
            } while (choice == "S");
            break;
        case '4':
            var choice = "S";
            do {
                console.clear();
                var n1;
                var n2;
                do {
                    n1 = firstNumber();
                } while (!isNumber(n1))
                do {
                    n2 = secondNumber();
                } while (!isNumber(n2))
                console.log("O resultado de " + n1 + " x " + n2 + " é igual a " + (n1 * n2));
                console.log("");
                console.log("Deseja realizar outra multiplicação? (S/N)");
                choice = prompt("").toUpperCase();
            } while (choice == "S");
            break;
        case '0':
            console.log("Volte sempre!");
            break;
        default:
            console.log(`Opção inválida.`);
    }
} while (menu_choice != '0');

function menu() {
    console.log("************ Calculadora Simples Javascript ************");
    console.log("Qual operação deseja realizar?");
    console.log("1- Soma");
    console.log("2- Subtração");
    console.log("3- Divisão");
    console.log("4- Multiplicação");
    console.log("0- Sair");
    var choice = prompt("");
    return choice;
}

function isNumber(n) {
    if (!isNaN(parseFloat(n)) && isFinite(n)) {
        return true;
    } else {
        console.log("Valor não é númerico, tente novamente");
        return false;
    }
}

function firstNumber() {
    return parseFloat(prompt("Digite o primeiro número: "));

}

function secondNumber() {
    return parseFloat(prompt("Digite o segundo número: "));
}