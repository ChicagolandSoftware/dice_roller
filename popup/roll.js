function getRandomRoll(max) {
    //getRandomRoll(6) means return 1-6
    return Math.floor((Math.random() * Math.floor(max)) + 1);
  }

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("d4").addEventListener("click", d4);

function clear() {
    document.getElementById("roll_result").innerHTML = "?";
}

function d4() {
    document.getElementById("roll_result").innerHTML = getRandomRoll(4);
}

