// Function to split string into array of words
var wordArray, speed = 1000;
function splitWords(text){
    wordArray = text.split(" ");
}

function showWords(){
    var i = 0;
    var interval = setInterval(function(){
    if(i > wordArray.length - 2){
        clearInterval(interval);
    }
    document.getElementById("wordDisplay2").innerHTML = wordArray[i];
    console.log(wordArray[i]);
    i++;
    }, speed);
}

$(document).ready(function(){
    $("#startbutton").click(function(){
        text = $("textarea").val();
        $("#startbutton, #textarea, #paste").fadeOut("3000")
        $("#wordDisplay").show();
        splitWords(text);
        console.log(wordArray);
        showWords();
    });

});