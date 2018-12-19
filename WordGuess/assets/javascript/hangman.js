
var Teams = ["FC Schale 04", "Club Atletico de Madrid", "Manchester United FC", "Tottenham Hotspur FC",
"Olympique Lyonnais", "AS Roma", "Liverpool FC", "AFC Ajax", "Manchester City FC", "Borussia Dortmund",
"Juventus", "Paris Saint Germain", "FC Barcelona", "FC Porto", "Real Madrid CF", "FC Bayern Munich"];

var Coaches = ["Domenico Tedesco", "Diego Simeone", "Zinedine Zidane", "Mauricio Pochettino", 
"Bruno Genesio", "Eusebio Di Francesco", "Jurgen Klopp", "Erik ten Hag", "Pep Guardiola", "Lucien Favre",
"Massimiliano Allegri", "Thomas Tuchel", "Ernesto Valverde", "Sergio Conceicao", "Santiago Solari", 
"Niko Kovac"];

var Players = ["Ralf Fahrmann", "Jan Oblak", "Paul Pogba", "Harry Kane", "Nabil Fekir", "Robin Olsen", 
"Sadio Mane", "Matthijs de Ligt", "Kevin De Bruyne", "Marco Reus", "Mario Mandzukic", "Gianluigi Buffon",
"Lionel Messi", "Iker Casillas", "Gareth Bale", "Robert Lewandowski"];

/*
Legends = ["Ronaldinho", "Zlatan Ibrahimovic", "Philipp Lahm", ]

*/


function pickWord() {
    var rando = Math.floor(3 * Math.random());

    var Random = Math.ceil(16* Math.random());
    console.log("rando = " + rando + " Random = " + Random);
    if (rando == 0) {
        var word = Teams[Random];
        
        return word;
    }
    if (rando == 1) {
        var word = Coaches[Random];
        
        return word;
    }
    if (rando == 2) {
        var word = Players[Random];
        
        return word;
    }
}

// var word = pickWord();

console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());
console.log("The word is: " + pickWord());

