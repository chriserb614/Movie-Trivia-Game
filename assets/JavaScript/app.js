var counter = {
    correct: 0,
    wrong: 0,
    unanswered: 0
};

var number = 60;
var intervalId;

$(document).ready(function(){

$("#maintext-container").hide()

$("#gif").append("<img id='moonPic' src='./assets/images/moon.gif'/>")

function startGame(){
    $("#maintext-container").show();

    $("#gif").hide();

    intervalId = setInterval(decrement, 1000);
    
};

function decrement(){
    $("#startTimer").html("<h4>Time Remaining: " + number + " seconds</h4>");
    
    number--;

    if (number === 0){
        endGame();
        clearInterval(intervalId);
    }
};

function endGame(){
    $("#startTimer").hide();
    $("#gif").show();
    $("#gif").html("<img id='charlie' src='./assets/images/charlie.gif'/>")
    
    var question1 = document.questionDiv.question1.value;

    var question2 = document.questionDiv.question2.value;

    var question3 = document.questionDiv.question3.value;

    var question4 = document.questionDiv.question4.value;

    var question5 = document.questionDiv.question5.value;

    var question6 = document.questionDiv.question6.value;

    var question7 = document.questionDiv.question7.value;

    var question8 = document.questionDiv.question8.value;
    
    var question9 = document.questionDiv.question9.value;

    var question10 = document.questionDiv.question10.value;

    // Question 1
        if (question1 === "correct"){
            counter.correct++;
        }
        else if (question1 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 2
        if(question2 === "correct"){
            counter.correct++;
        }
        else if(question2 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 3
        if(question3 === "correct"){
            counter.correct++;
        }
        else if(question3 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 4
        if(question4 === "correct"){
            counter.correct++;
        }
        else if(question4 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 5
        if(question5 === "correct"){
            counter.correct++;
        }
        else if(question5 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 6
        if(question6 === "correct"){
            counter.correct++;
        }
        else if(question6 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 7
        if(question7 === "correct"){
            counter.correct++;
        }
        else if(question7 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 8
        if(question8 === "correct"){
            counter.correct++;
        }
        else if(question8 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 9
        if(question9 === "correct"){
            counter.correct++;
        }
        else if(question9 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        }
        // Question 10
        if(question10 === "correct"){
            counter.correct++;
        }
        else if(question10 === "wrong"){
            counter.wrong++;
        }
        else{
            counter.unanswered++;
        };

            $("#maintext-container").html("");
            $("#maintext-container").addClass("text-center");

            $("#maintext-container").append("<h3>Correct: " + counter.correct + "</h3>");
            $("#maintext-container").append("<h3>Wrong: " + counter.wrong + "</h3>");
            $("#maintext-container").append("<h3>Unanswered: " + counter.unanswered + "</h3>");
    



};

$("#startTimer").on("click", startGame);

$("#submitBtn").on("click", endGame);

});
