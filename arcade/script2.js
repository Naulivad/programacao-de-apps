const botaoPublicar = document.getElementById("botaoPublicar")
console.log(botaoPublicar)
botaoPublicar.addEventListener("click", () => {
    var newName = document.querySelector("#name").value;
    var newCat = document.querySelector("#categoria").value;
    var newDes = document.querySelector("#descricao").value;
    var newEmoji = document.querySelector("#emoji").value;
    var newColor = document.querySelector("#cor").value;

    var newGame = {
        nome: newName,
        categoria: newCat,
        descricao: newDes,
        emoji: newEmoji,
        cor: newColor,
    }
    jogos.push(newGame);

})
