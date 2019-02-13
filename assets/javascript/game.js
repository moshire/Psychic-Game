
var wins = 0;
var loses = 0;
var left = 9;
var guesses = [];
var computerChoice;
var userGuess;


game();
function game() {
    var alphabet = "abcdefghijklmnopqrstyvwxz";
    var computerGuess = alphabet[Math.floor(Math.random() * 26)];
    var computerChoice = computerGuess;
    console.log(computerChoice);

check();
    function check() {
        document.onkeyup = function (event) {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            if (event.keyCode < 65 || event.keyCode > 90) {
                alert("INVALID ENTRY!");

            }


            else if (userGuess === computerChoice) {
                console.log("you won")
                wins = wins + 1;
                document.getElementById("wins").innerHTML = "wins: " + wins;


                reset();



            }
            else {
                left = left - 1;

                document.getElementById("left").innerHTML = "Guesses Left: " + left;
                guesses.push(userGuess);



                document.getElementById("guesses").innerHTML = "Your Guesses So Far " + guesses;

                noGuesses();

            }
        }
    }



    function reset() {
        left = 9;
        guesses = [];
        document.getElementById("left").innerHTML = "Guesses Left: " + left;
        document.getElementById("guesses").innerHTML = "Your Guesses So Far: " + guesses;
        game();

    }
    function noGuesses() {
        if (left === 0) {


            loses = loses + 1
            document.getElementById("loses").innerHTML = "Loses: " + loses;

            reset();

            check();
        }
    }
}



