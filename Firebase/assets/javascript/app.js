$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyAj8p-PKorkRHiRsSVFd_mEzOTgdWlqEys",
    authDomain: "trainscheduler-36c34.firebaseapp.com",
    databaseURL: "https://trainscheduler-36c34.firebaseio.com",
    projectId: "trainscheduler-36c34",
    storageBucket: "trainscheduler-36c34.appspot.com",
    messagingSenderId: "583997939867"
  };
  firebase.initializeApp(config);
  var database = firebase.database();


  $("#submit").on("click", function(event) {

    event.preventDefault();
    var name = $("#train-name").val();
    var destination = $("#destination-text").val();
    var Traintime = $("#train-time").val();
    var frequency = $("#frequency").val();
    

    //form values gathered
    var newTrain = {
      Tname: name,
      Tdestination: destination,
      Ttime: Traintime,
      Tfreq: frequency,
    };

    //All new train information is pushed to firebase
    database.ref().push(newTrain);

    console.log("Tname: " + newTrain.Tname);
    console.log("Tdestination: " + newTrain.Tdestination);
    console.log("Ttime: " + newTrain.Ttime);
    console.log("Tfreq: " + newTrain.Tfreq);
    

    //resets text fields
    $("#train-name").val("");
    $("#destination-text").val("");
    $("#train-time").val("");
    $("#frequency").val("");
    
  });




  database.ref().on("child_added", function(childSnapshot) {
    
    //Get content back from Firebase in the form of the childSnapshot
    var TrainName = childSnapshot.val().Tname;
    var TrainDestination = childSnapshot.val().Tdestination;
    var TrainTime = childSnapshot.val().Ttime; //Next arrival
    var TrainFrequency = childSnapshot.val().Tfreq;
  

    
    var whenTheTrainFirstArrives = moment(TrainTime, "HH:mm");
    console.log("whenTheTrainFirstArrives: " + whenTheTrainFirstArrives);

    var Frequency = moment(TrainFrequency, "m");
    console.log("TrainFrequency: " + TrainFrequency);

    var rightNow = moment().format("HH:mm:s");
    console.log("rightNow: " + rightNow);

    var timeDiff = moment().diff(moment(whenTheTrainFirstArrives), "minutes");
    if (timeDiff < 0) { 
      timeDiff = timeDiff * -1;
    }
    console.log("timeDiff: " + timeDiff);

    var offset = timeDiff % TrainFrequency;
    console.log("offset: " + offset);
    var timeTillTrain = TrainFrequency - offset;

    moment(timeTillTrain, "m");
    var nextArrival = moment().add(timeTillTrain, "minutes").format("HH:mm");
    //var nextTrain = moment().add(timeTillTrain, 'minutes');
    console.log("\n");




    //Was going to attempt to add a close button to remove a child from firebase but Ill do it later
    // var close = $("<button></button>");
    // close.addClass("btn btn-circle btn-default");
    // close.attr("type","button");
    // close.text("X");
    // close.attr("id", "close");

    //Add contents to the new rows of the table
    var newRow = $("<tr>").append(
      $("<td>").text(TrainName),
      $("<td>").text(TrainDestination),
      $("<td>").text(TrainFrequency),
      $("<td>").text(nextArrival),
      $("<td>").text(timeTillTrain),
      //$("<td>").html(close)
    );
    
    $("#train-table > tbody").append(newRow);
  });
});
