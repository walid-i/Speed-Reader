// Function to split string into array of words
var wordArray, speed = 1000;
function splitWords(){
    var text = $("textarea").val();
    wordArray = text.split(" ");
    console.log(wordArray.length);
    $("#wordCount2").text(wordArray.length + " words");
}

function showWords(){
    var i = 0;
    speed = 60000 / $("#WPMinput").val();
    var interval = setInterval(function(){
        if(i > wordArray.length - 2){
            clearInterval(interval);
        }
        document.getElementById("wordDisplay2").innerHTML = wordArray[i];
        console.log(wordArray[i]);
        i++;
        speed = 60000 / $("#WPMinput").val(); // in case user changes speed
    }, speed);
}

$(document).ready(function(){

    splitWords();
    $("#textarea").on('change keyup paste', function(){
        splitWords();
    });
    

    $("#startbutton").click(function(){
        $(".initialScreen, #startbutton").fadeOut("3000");
        $("#WPMinput").show();
        $(".secondScreen").fadeIn("3000");
        $("#wordDisplay").show();
        splitWords();    
        console.log(wordArray);
        showWords();
    });

});