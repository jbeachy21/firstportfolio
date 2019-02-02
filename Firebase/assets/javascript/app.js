$(document).ready(function () {

  //current time in minutes 
  var current_time_minutes = new moment().format(":mm");
  
  
  
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

  var current_time = new moment().format("HH:mm");
  console.log(current_time);

  $("#submit").on ("click", function(event) {
     
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
      Tfreq: frequency
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


    database.ref().on("child_added", function(childSnapshot) {

      //Get content back from Firebase in the form of the childSnapshot
      var TrainName = childSnapshot.val().Tname;
      var TrainDestination = childSnapshot.val().Tdestination;
      var TrainTime = childSnapshot.val().Ttime; //Next arrival
      var TrainFrequency = childSnapshot.val().Tfreq;


      var deltaTime = moment(TrainFrequency).format(":mm");
      var part1 = (current_time_minutes % deltaTime) + deltaTime; 


      console.log("adding minutes to moment " + moment(current_time_minutes).format(":mm").add(5, 'm')); 
      //Add contents to the new rows of the table
      var newRow = $("<tr>").append(
        $("<td>").text(TrainName),
        $("<td>").text(TrainDestination),
        $("<td>").text(TrainFrequency),
        $("<td>").text(TrainTime));
        $("<td>").text(part1);
      $("#train-table > tbody").append(newRow);
      
    })
    
   
    
  })


});

  