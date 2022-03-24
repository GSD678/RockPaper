let btn = document.getElementsByClassName("gameBTN")

function startGame() {
   for (let i = 0; i < btn.length; i++) {
       btn[i].style.display = "none";
    }
}   