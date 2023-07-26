

function getRandomDice(){
    var randomDice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    var numberA = Math.floor(Math.random()*randomDice.length);
    var numberB = Math.floor(Math.random()*randomDice.length);
    document.getElementById("a").src = randomDice[numberA];
    document.getElementById("b").src = randomDice[numberB];

    if(randomDice[numberA] > randomDice[numberB]){
        document.querySelector("h1").textContent=("🚩Player 1 Wins");
    } else if (randomDice[numberA] < randomDice[numberB]){
        document.querySelector("h1").textContent=("Player 2 Wins🚩");
    } else {
        document.querySelector("h1").textContent=("Draw")
    }
}


