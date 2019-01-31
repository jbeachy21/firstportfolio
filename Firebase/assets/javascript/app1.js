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



  $("#submit").click(function() {
     
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


    var newRow = $("<tr>").append(
      $("<td>").text(newTrain.Tname),
      $("<td>").text(newTrain.Tdestination),
      $("<td>").text(newTrain.Tfreq),
      $("<td>").text(newTrain.Ttime));
      
      

    $("#train-table > tbody").append(newRow);
    /*
    //new row is set up locally
    var newRow = $("<tr>");
    var tableHeading = $("<th>");
    $(".table").append(newRow);
    $(newRow).append(tableHeading);
    $(tableHeading).append(name);
   
    
    //destination added to table locally
    var destinationTd = $("<td>");
    $(destinationTd).append(destination);
    $(newRow).append(destinationTd);

    //frequency added to table locally
    var frequencyTd = $("<td>");
    $(frequencyTd).append(frequency);
    $(newRow).append(frequencyTd);

    //Next arrival added locally
    var timeTd = $("<td>");
    $(timeTd).append(Traintime);
    $(newRow).append(timeTd);
    */
   

  })


});

  