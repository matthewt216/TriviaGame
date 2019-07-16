$("#ans1").hide();
$("#ans2").hide();
$("#ans3").hide();
$("#ans4").hide();
$("#question").hide();
$("#timer").hide();
$("#message").hide();

var questions = ["Who was the first astronomer that proposed that the solar system is heliocentric?", 
"Who came up with the three laws of planetary motion?", 
"Who discovered the phases of Venus?", 
"What type of star did Hubble use to measure the distance from the Milky Way to the Andromeda Galaxy?",
"What was the name of the last Space Shuttle mission?"];
var answers1 = ["Aristarchus", "Copernicus", "Galileo", "Newton"];
var answers2 = ["Newton", "Kepler", "Aristotle", "Einstein"];
var answers3 = ["Ptolemy", "Abu Bakr", "Galileo", "Euclid"];
var answers4 = ["Black Holes", "Cepheid Variables", "Proxima Centauri", "Sun"];
var answers5 = ["STS-34", "STS-832", "STS-135", "STS-294"];
var answers = [answers1, answers2, answers3, answers4, answers5];
var time = 5;
var time1 = 3;
var intervalId;
var intervalId1;
var correct1 = false;
var correct2 = false;
var correct3 = false;
var correct4 = false;
$("#start").on("click", function(){
    $("#start").hide();
    $("#ans1").show();
    $("#ans2").show();
    $("#ans3").show();
    $("#ans4").show();
    $("#question").show();
    $("#timer").show();
    for (i = 0; i < questions.length; i++){
        $("#question").text(questions[i]);
        $("#ans1").text(answers[i][0]);
        $("#ans2").text(answers[i][1]);
        $("#ans3").text(answers[i][2]);
        $("#ans4").text(answers[i][3]);
    }
    $("#ans1").on("click", function(){
        if (correct1 === true){
            $("#message").text("Correct");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);
            time = 30;
        }
        else{
            $("#message").text("Wrong");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);
            time = 30;
        }
    })
    $("#ans2").on("click", function(){
        if (correct2 === true){
            $("#message").text("Correct");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);
            time = 30;
        }
        else{
            $("#message").text("Wrong");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);
            time = 30;
        }
    })
    $("#ans3").on("click", function(){
        if (correct3 === true){
            $("#message").text("Correct");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);
            time = 30;
        }
        else{
            $("#message").text("Wrong");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);   
            time = 30;
        }
    })
    $("#ans4").on("click", function(){
        if (correct4 === true){
            $("#message").text("Correct");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);
            time = 30;
        }
        else{
            $("#message").text("Wrong");
            $("#message").show();
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").hide();
            intervalId1 = setInterval(count1, 1000);
            time = 30;
        }
    })
    function count(){
        if (time > 0){
            time--;
        }
        if (time === 0){
            $("#ans1").hide();
            $("#ans2").hide();
            $("#ans3").hide();
            $("#ans4").hide();
            $("#question").hide();
            $("#timer").show();
            time = 0;
            $("#message").text("Time out");
            $("#message").show();
            intervalId1 = setInterval(count1, 1000);
            time1 = 3;
            
        }
        $("#timer").text("Time Remaining: " + time + " seconds");
    }
    function count1(){
        if (time1 > 0){
            time1--;
        }
        else if (time1 === 0){
            $("#question").show();
            $("#ans1").show();
            $("#ans2").show();
            $("#ans3").show();
            $("#ans4").show();
            $("#timer").show();
            time1--;
            $("#message").hide();
            time = 30;
            intervalId = setInterval(count, 1000);
        }
    }
})