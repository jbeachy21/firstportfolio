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

  database.ref().on("value", function(childSnapshot) {
     //Get content back from Firebase in the form of the childSnapshot
    var TrainName = childSnapshot.val().Tname;
    var TrainDestination = childSnapshot.val().Tdestination;
    var TrainTime = childSnapshot.val().Ttime; //Next arrival
    var TrainFrequency = childSnapshot.val().Tfreq;
   
   });

  $("#submit").on("click", function(event) {

    event.preventDefault();
    var name = $("#train-name").val();
    var destination = $("#destination-text").val();
    var Traintime = $("#train-time").val();
    var frequency = $("#frequency").val();


    var whenTheTrainFirstArrives = moment(Traintime, "HH:mm");
    console.log("whenTheTrainFirstArrives: " + whenTheTrainFirstArrives);

    var Frequency = frequency;
    console.log("TrainFrequency: " + Frequency);

    var rightNow = moment().format("HH:mm:s");
    console.log("rightNow: " + rightNow);

    var timeDiff = moment().diff(moment(whenTheTrainFirstArrives), "minutes");
    if (timeDiff < 0) { 
      timeDiff = timeDiff * -1;
    }
    console.log("timeDiff: " + timeDiff);

    var offset = timeDiff % Frequency;
    console.log("offset: " + offset);
    var timeTillTrain = Frequency - offset;
    console.log("timetillTrain: " + timeTillTrain);
    console.log("\n");


    
    //form values gathered
    var newTrain = {
      Tname: name,
      Tdestination: destination,
      Ttime: Traintime,
      Tfreq: frequency,
      Taway: timeTillTrain
    };


    //All new train information is pushed to firebase
    database.ref().push(newTrain);

    console.log(newTrain.Tname);
    console.log(newTrain.Tdestination);
    console.log(newTrain.Ttime);
    console.log(newTrain.Tfreq);
    console.log(newTrain.Taway);

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
    var TrainAway = childSnapshot.val().Taway;
    
    console.log(TrainAway);

    



    //Add contents to the new rows of the table
    var newRow = $("<tr>").append(
      $("<td>").text(TrainName),
      $("<td>").text(TrainDestination),
      $("<td>").text(TrainFrequency),
      $("<td>").text(TrainTime),
      $("<td>").text(TrainAway)
    );
    
    $("#train-table > tbody").append(newRow);
  });
});
