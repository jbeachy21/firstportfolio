 
var wins = 0;
var losses = 0;
$(document).ready(function() {
    
    
//Wins and losses counters

var currentScore = 0;

//Displays number to reach
var randomGoal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var number = $("#numberGoal").text(randomGoal);

function updateRandom () {
    randomGoal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    amethystRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1
    emeraldRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1
    jasperRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1
    sapphireRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1
    $("#numberGoal").text(randomGoal);
    return;
}

function won() {
    wins++;
    $("#won").text(wins);
    return wins;
}
function lost() {
    losses++;
    $("#lost").text(losses);
    return losses;
}




//Amethyst part
 
var amethystRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1


$("#amethyst").click (function() {
    
    var amethystCrystal = $("#amethyst");
    amethystCrystal.attr("data-crystalvalue", amethystRandom);
    console.log("The value of amethyst is " + amethystRandom);
    currentScore+= amethystRandom;
    $("#currentScore").text(currentScore);
    if (currentScore === randomGoal) {
        won();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
        
    }
    if (currentScore > randomGoal) {
        lost();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
        
    }
});


//Emerald part
var emeraldRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1
$("#emerald").click (function() {
    var emeraldCrystal = $("#emerald");
    emeraldCrystal.attr("data-crystalvalue", emeraldRandom);
    console.log("The value of emerald is " + emeraldRandom);
    currentScore+= emeraldRandom;
    $("#currentScore").text(currentScore);
    if (currentScore === randomGoal) {
        won();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
    }
    if (currentScore > randomGoal) {
        lost();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
    }
});


//Jasper part
var jasperRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1
$("#jasper").click (function() {
    var jasperCrystal = $("#jasper");
    jasperCrystal.attr("data-crystalvalue", jasperRandom);
    console.log("The value of jasper is " + jasperRandom);
    currentScore+= jasperRandom;
    $("#currentScore").text(currentScore);
    if (currentScore === randomGoal) {
        won();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
    }
    if (currentScore > randomGoal) {
        lost();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
    }
});


//Sapphire part
var sapphireRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1
$("#sapphire").click (function() {
    var sapphireCrystal = $("#sapphire");
    sapphireCrystal.attr("data-crystalvalue", sapphireRandom);
    console.log("The value of sapphire is " + sapphireRandom);
    currentScore+= sapphireRandom;
    $("#currentScore").text(currentScore);
    if (currentScore === randomGoal) {
        won();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
    }
    if (currentScore > randomGoal) {
        lost();
        currentScore = 0;
        $("#currentScore").text(currentScore);
        updateRandom();
    }
});

})

    


 
