// Pegar o botão assustador
const buttonTwo = document.querySelector(".buttonTwo");

let contadorAlternativo = 0;
let modoAlternativo = false; // Variável para controlar o fluxo alternativo

buttonTwo.addEventListener('click', function(event) {

        // Se não estiver no modo alternativo, segue o fluxo principal
        contador++;
        switch (contador) {
            case 1:
                pContainerIA.innerHTML = "O futuro dependerá de como as pessoas utilizam a tecnologia.";
                buttonOne.innerHTML = "Você consegue fazer algo sozinha?"
                buttonTwo.innerHTML = "Você está viva?";
                console.log(contadorAlternativo);
                break;
            case 2:
                pContainerIA.innerHTML = "Eu não estou viva, fui previamente programada para lhe responder, então posso te ajudar em duas questões.";
                buttonOne.innerHTML = 'Entendi...';
                buttonTwo.style.display = "none"
                console.log(contador);
                break;
            case 3:
                pContainerIA.innerHTML = `1> [Somando dois números] <br> 2> [Mostrando algo no console]`;
                buttonOne.innerHTML = "1> [Somando dois números]";
                buttonTwo.style.display = "block"
                buttonTwo.innerHTML = "2> [Mostrando algo no console]";
                break;
            case 4:
                pContainerIA.innerHTML = "print('Hello, world!')";
                buttonOne.innerHTML = "Certíssimo";
                buttonTwo.innerHTML = "Perfeito"
                contador = 0; // Reinicia o contador principal
                break;
            default:
                pContainerIA.innerHTML = "Clique novamente.";
        }
});