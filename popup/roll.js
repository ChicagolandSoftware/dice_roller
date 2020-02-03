function getRandomRoll(max) {
    //getRandomRoll(6) means return 1-6
    return Math.floor((Math.random() * Math.floor(max)) + 1);
  }

//I used to have a single roll_dice(num) function but it didn't work?
//the random numbers didn't behave as expected for some weird reason
//so that's why I have all these dumb repetitive functons
//it actually works
function d4() {
    document.getElementById("roll_result").innerHTML = getRandomRoll(4);
}
function d6(){
    document.getElementById("roll_result").innerHTML = getRandomRoll(6);
}
function d8(){
    document.getElementById("roll_result").innerHTML = getRandomRoll(8);
}
function d10(){
    document.getElementById("roll_result").innerHTML = getRandomRoll(10);
}
function d12(){
    document.getElementById("roll_result").innerHTML = getRandomRoll(12);
}
function d20(){
    document.getElementById("roll_result").innerHTML = getRandomRoll(20);
}

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("d4").addEventListener("click", d4);
document.getElementById("d6").addEventListener("click", d6);
document.getElementById("d8").addEventListener("click", d8);
document.getElementById("d10").addEventListener("click", d10);
document.getElementById("d12").addEventListener("click", d12);
document.getElementById("d20").addEventListener("click", d20);

function clear() {
    document.getElementById("roll_result").innerHTML = "?";
}


function copy() {
    var copyText = document.getElementById("roll_result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

}