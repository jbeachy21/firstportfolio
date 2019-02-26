$(document).ready(function () {

  
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

    //var current_time = new moment().format("HH:mm");
  //console.log(current_time);

  // var whenTheTrainFirstArrives = moment("13:00", "HH:mm");
  // var frequency = 25;
  // var rightNow = moment("16:19", "HH:mm");
  // //1:00 -> 1:25 -> 1:50 -> 2:15 -> 2:40 -> 3:05 -> 3:30 -> 3:55 -> 4:20
  // //minutesAway = 20
  // var timeDiff = whenTheTrainFirstArrives.diff(rightNow, 'minutes');
  // if(timeDiff < 0) {
  //   timeDiff = timeDiff * -1;
  // }
  // console.log("timediff: " + timeDiff);
  // var offSet = timeDiff % frequency;
  // console.log("offSet: " + offSet);

  // var timeTillTrain = frequency - offSet;
  // console.log("timeTillTrain: " + timeTillTrain);

  var whenTheTrainFirstArrives = TrainTime;
  console.log("whenTheTrainFirstArrives: " + whenTheTrainFirstArrives);

  var frequency = TrainFrequency;
  console.log("TrainFrequency: " + frequency);

  var rightNow = moment().format('HH:mm:s');
  console.log("rightNow: " + rightNow);


  var timeDiff = moment().diff(moment(whenTheTrainFirstArrives), 'minutes');
  console.log("timeDiff: " + timeDiff);
  if (timeDiff < 0) timeDiff = timeDiff * -1;
  console.log("\n");
     

     
    //Add contents to the new rows of the table
    var newRow = $("<tr>").append(
      $("<td>").text(TrainName),
      $("<td>").text(TrainDestination),
      $("<td>").text(TrainFrequency),
      $("<td>").text(TrainTime));
      // $("<td>").text(rn);
    $("#train-table > tbody").append(newRow);
    
  })
  
  

  $("#submit").on ("click", function(event) {
     
    event.preventDefault();
    var name = $("#train-name").val();
    var destination = $("#destination-text").val();
    var Traintime = $("#train-time").val();
    var frequency = $("#frequency").val();
    var MinutesAway = "8:31";

    //form values gathered
    var newTrain = {
      Tname: name,
      Tdestination: destination,
      Ttime: Traintime,
      Tfreq: frequency,
      Tminutes: MinutesAway
    };
    //All new train information is pushed to firebase
    database.ref().push(newTrain);


    console.log(newTrain.Tname);
    console.log(newTrain.Tdestination);
    console.log(newTrain.Ttime);
    console.log(newTrain.Tfreq);

    //resets text fields 
    $("#train-name").val("");
    $("#destination-text").val("");
    $("#train-time").val("");
    $("#frequency").val("");


  })

  database.ref().on("child_added", function(childSnapshot) {

  





    //Get content back from Firebase in the form of the childSnapshot
    var TrainName = childSnapshot.val().Tname;
    var TrainDestination = childSnapshot.val().Tdestination;
    var TrainTime = childSnapshot.val().Ttime; //Next arrival
    var TrainFrequency = childSnapshot.val().Tfreq;


     
    //Add contents to the new rows of the table
    var newRow = $("<tr>").append(
      $("<td>").text(TrainName),
      $("<td>").text(TrainDestination),
      $("<td>").text(TrainFrequency),
      $("<td>").text(TrainTime))
      // $("<td>").text(Tminutes);
    $("#train-table > tbody").append(newRow);


 
  })
});

  