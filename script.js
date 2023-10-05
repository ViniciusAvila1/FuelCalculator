
function calcular(event) {
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value
    let gasolinaInput = document.getElementById("gasolina").value

    let contentResult = document.getElementById("content-result")
    let textResult = document.getElementById("text-result")

    let alcoolSpan = document.getElementById("alcool-result")
    let gasolinaSpan = document.getElementById("gasolina-result")

    let calculo = (alcoolInput / gasolinaInput)

    if(calculo < 0.7) {
        textResult.innerHTML = "Compensa usar álcool!"
    } else {
        textResult.innerHTML = "Compensa usar gasolina!"
    }

    alcoolSpan.innerHTML = "Alcool: R$" + alcoolInput
    gasolinaSpan.innerHTML = "Gasolina: R$" + gasolinaInput

    contentResult.classList.remove("hide") // Remover a classe hide e exibir a mensagem
}