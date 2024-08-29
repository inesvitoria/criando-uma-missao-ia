// pegar o botao assustador
const buttonOne = document.querySelector(".buttonOne")

// pegar o h1 e p do containerIA
const h1ContainerIA = document.querySelector(".h1ContainerIA")
const pContainerIA = document.querySelector(".pContainerIA")

let contador = 0


buttonOne.addEventListener('click', function(event){
    contador++
    switch(contador){
        case 1:
            pContainerIA.innerHTML = "Eu fui programada para te ajudar, contudo nao possuo alguma forma de inteligência."
            buttonOne.innerHTML = 'Entendi...E com o que você pode ajudar?'
            buttonTwo.innerHTML = "Você realmente não está viva?"
            console.log(contador)
            break
        case 2:
            pContainerIA.innerHTML = "Ainda sou muito nova. Então não possuo muitas funções, por favor escolha um item da lista para que eu possa ajudar."
            buttonOne.innerHTML = 'Entendi...'
            buttonTwo.style.display = "none"
            console.log(contador)
            break
        case 3:
            pContainerIA.innerHTML = `1> [Somando dois numeros] <br> 2> [Mostrando algo no console]`
            buttonTwo.style.display = "block"
            buttonOne.innerHTML = "1> [Somando dois numeros]"
            buttonTwo.innerHTML = "2> [Mostrando algo no console]"
            break
        case 4:
            pContainerIA.innerHTML = "Resposta: 2 + 2 = 22"
            buttonOne.innerHTML = "Certissimo"
            buttonTwo.innerHTML = "Perfeito"
            contador = 0
            break
        default:
            pContainerIA.innerHTML = "Clique novamente.";
    }

})