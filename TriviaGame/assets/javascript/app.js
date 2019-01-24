
var correct = 0;
var incorrect = 0;
var userAnswers = [];

var Questions = [
    {
        question: "What team has lost the most champions league finals?",
        answers: [ 'Juventus', 'AC Milan', 'Bayern Munich', 'FC Barcelona','Nottingham Forest'],
        correctAnswer: 0
    },
    {
        question: "What is the most controversial team in champions league history?",
        answers: ['Real Madrid','Juventus','FC Porto','Inter Milan'],
        correctAnswer: 0
    },
    {
        question: "How many countries were in the FIFA World Cup the first year it took place?",
        answers: ['13','12','24','16',],
        correctAnswer: 0
    },
    {
        question: "Which country has never qualified for the World Cup?",
        answers: ['Finland','Jamaica','UAE','China'],
        correctAnswer: 0
    },
    {
        question: "Which is the smallest population country to ever qualify for the World Cup?",
        answers: ['Finland','Iceland','Jamaica','Uruguay','Kuwait'],
        correctAnswer: 1
    },
    {
        question: "In what year did 3 Scandinavian countries qualify for the FIFA World Cup for the first time ever?",
        answers: ['1958','1966','1990','2018'],
        correctAnswer: 3
    },
    {
        question: "Which of these football clubs has less than 5 champions league titles?",
        answers: ['Bayern Munich','AC Milan','Liverpool','Barcelona','Manchester United'],
        correctAnswer: 4
    },
    {
        question: "What is the name of the Swedish football league?",
        answers: ['Eredivisie','Allsvenskan','Eliteserien','Bundesliga',],
        correctAnswer: 1
    },
    {
        question: "What is the only African nation to ever host the world cup?",
        answers: ['Chad','Egypt','South Africa','Mali',],
        correctAnswer: 2
    },
    {
        question: "Who has the highest red card count in la liga history?",
        answers: ['Sergio Ramos','Pepe','Luis Suarez','Nigel De Jong','Jaap Stam','Felipe Melo','Genaro Gattuso'],
        correctAnswer: 0
    },
    {
        question: "What do John Terry and Mauro Icardi have in common?",
        answers: ['They both eloped with the wife of their fellow teammate for club and country','They are genuinely honorable people',
        'Have both won the world cup','Broke the club transfer fee record',],
        correctAnswer: 0
    },
    {
        question: "Who has the most bicycle kick goals?",
        answers: ['Zlatan Ibrahimovic','Mario Mandzukic','Mario Balotelli','Gareth Bale','Timo Werner'],
        correctAnswer: 0
    },
    {
        question: "What is the nickname for the player, Lev Yashin, the only Russian player to be awarded the Golden ball",
        answers: ['Baby faced assassin','The one man show','The Kaiser','The Black Spider','Tarzan'],
        correctAnswer: 3
    },
    {
        question: "Who currently dives more?",
        answers: ['Cristiano Ronaldo','Neymar','Casemiro','Ashley Young','Sadio Mane'],
        correctAnswer: 1
    },
    {
        question: "Which incident in the world cup was the most controversial?",
        answers: ['The hand of god','Zinedine Zidanes headbutting incident','Suarez biting incident','De Jongs karate kick','Suarezs hand ball'],
        correctAnswer: 0
    },
    {
        question: "Who holds the record for the most goals scored in the world cup?",
        answers: ['Miroslav Klose','Ronaldinho','Andriy Shevchenko','Robert Lewandowski',
        'Zlatan Ibrahimovic','Pele','Thomas Muller','Mario Mandukic'],
        correctAnswer: 0
    },
    {
        question: "What is the nickname for the Australian soccer team?",
        answers: ['The socceroos','The blue gold','Die Mannschaft','The drillos','Golden Tiger'],
        correctAnswer: 0
    },
    {
        question: "Of these which is the biggest international soccer rivalry?",
        answers: ['Argentina vs Brazil','Sweden vs Denmark','Germany vs Italy','The drillos','England vs Scotland'],
        correctAnswer: 0
    },
    {
        question: "Of these which is historically the biggest club soccer rivalry?",
        answers: ['Manchester United vs Liverpool','Read Mardrid vs Barcelona',
        'Boca Juniors vs River Plate','AC Milan vs Inter Milan','Bayern Munich vs Real Madrid','Tottenham Hotspur vs Arsenal'],
        correctAnswer: 3
    },
    {
        question: "Who currently holds the record for the club transfer fee?",
        answers: ['Neymar','Kylian Mbappe','Kevin De Bruyne','Kaka','Gareth Bale','Paul Pogba'],
        correctAnswer: 0
    },
    {
        question: "Which stadium has the highest occupancy?",
        answers: ['Old Trafford, Manchester United','San Siro, AC Milan and Inter Milan','Camp Nou, FC Barcelona',
        'Allianz Arena, Bayern Munich','Ainfield, Liverpool FC','Stamford Bridge, Chelsea FC','White Hart Lane, Tottenham Hotspur FC',
        'Santiago Bernabeu, Real Madrid','Signal Iduna Park, Borussia Dortmund','Friends Arena, Swedish National Team'],
        correctAnswer: 0
    },
    {
        question: "Is it possible to win this game?",
        answers: ['No','Maybe','Not a chance'],
        correctAnswer: 2
    },
     
]


/*


function displayQuestions() {
    var RadioQuestion;
    var currentQuestion = 0;
    var radio;
    var Answer;
    
    for (var i = 0; i<=21; i++) {
        currentQuestion++;
        $("#quiz").append("" + currentQuestion + ") " + Questions[i].question + "<br>");
        var question = Questions[i].question;
        for (var j = 0; j<Questions[i].answers.length; j++) {
            Answer = Questions[i].correctAnswer;
            RadioQuestion = Questions[i].answers[j];
            radio = document.createElement("INPUT");
            radio.setAttribute("attr", [j]);
            radio.setAttribute("id", "radioQ");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "Question" + i); //Allows for only one radio button to be selected per question, by giving the same name to each set of answers
            if (j === Answer) {
                radio.setAttribute("value", " " + Questions[i].correctAnswer);
                //console.log("The correct answer for question " + currentQuestion + " is " + j);
            }
            else {
                radio.setAttribute("value", [j]);
            }
            $("#quiz").append(radio);
            $("#quiz").append(" "); 
            $("#quiz").append(RadioQuestion + "<br>");
        }
        $("#quiz").append("<br>" + "<br>");
    }  
}
*/
function correctAnswers() {
    var answers = [];
    for (var i = 0; i<=Questions.length; i++) {
        answers = answers + Questions[i].correctAnswer;
        console.log("The correct answers are: " + answers + " ");
        console.log("\n");

    }
    
    return answers;
}


$(document).ready(function() {
   
   
    displayQuestions();
    function displayQuestions() {
        var RadioQuestion;
        var currentQuestion = 0;
        var radio;
        var Answer;
        for (var i = 0; i<=Questions.length; i++) {
            currentQuestion++;
            $("#quiz").append("" + currentQuestion + ") " + Questions[i].question + "<br>");
            var question = Questions[i].question;
            for (var j = 0; j<Questions[i].answers.length; j++) {
                Answer = Questions[i].correctAnswer;
                RadioQuestion = Questions[i].answers[j];
                radio = document.createElement("INPUT");
                radio.setAttribute("attr", [j]);
                radio.setAttribute("id", [i]);
                radio.setAttribute("type", "radio");
                radio.setAttribute("name", "Question" + i); //Allows for only one radio button to be selected per question, by giving the same name to each set of answers
                if (j === Answer) {
                    radio.setAttribute("value", "correct");
                    //console.log("The correct answer for question " + currentQuestion + " is " + j);
                }
                else {
                    radio.setAttribute("value", "incorrect");
                }
                $("#quiz").append(radio);
                $("#quiz").append(" "); 
                $("#quiz").append(RadioQuestion + "<br>");
            }
            $("#quiz").append("<br>" + "<br>");
        }
    }
    
    var Correct = parseInt(correctAnswers());
    console.log("THE CORRECT ANSWERS ARE: " + Correct);
    var choices = [];
    var finalAnswers = [];
    
    $("input").click(function() {
        var element = $(this);
        var currentQuestion = 0;
        var currentInput = parseInt($("input:checked").val());
        console.log("Click succesful");
        console.log("Current input = " + currentInput);

        
        

        /*
        if (Correct[3] instanceof String || typeof Correct[4] === 'string') {
            console.log("This is a string"); 
        }
        else {
            console.log("this is not a sring");
        }
        */





        /*
        if (currentInput == Correct[currentQuestion]) {
            currentQuestion++;
            choices[currentQuestion] = Correct[currentQuestion];
            correct++;
            console.log("Correct answer selected");
            console.log("Choices contains: " + choices);
        }
        else {
            currentQuestion++;
            choices[currentQuestion] = currentInput;
            incorrect++;
            console.log("INCORRECT");
        }

        */
         
        /*
                for (var i = 0; i<=21; i++) {
                    console.log("In for loop");
                    console.log("currentInput = " + currentInput);
                    console.log("Correct[i] = " + Correct[i]);
                
                
                if (currentInput == Correct[i]) {
                    
                    choices[i] = Correct[i];
                    correct++;
                    console.log("Correct answer selected");
                    console.log("Choices contains: " + choices);
                }
                else {
                    console.log("In else loop");
                    console.log("currentInput = " + currentInput);
                    console.log("Correct[i] = " + Correct[i]);
                    choices[i] = currentInput;
                    incorrect++;
                    console.log("INCORRECT");
                }
                
            }
                
             */
              
            
            

     })
    

    $("#submit").click(function () {
        $("#submit-area").text("You answered " + correct + " correct answers and " + incorrect + " incorrect answers");

    }) 
    
    });


