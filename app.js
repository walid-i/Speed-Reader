// Function to split string into array of words
var wordArray, index = 0, speed = 1000;
var toggleFlash = false, startClicked = false;

function splitWords(){
    var text = $("textarea").val();
    wordArray = text.split(" ");
    console.log(wordArray.length);
    $("#wordCount2").text(wordArray.length + " words");
}

function showWords(){
    speed = 60000 / $("#WPMinput").val();
    var interval = setInterval(function(){
        if(index > wordArray.length - 2 || !toggleFlash){
            clearInterval(interval);
        }
        document.getElementById("wordDisplay2").innerHTML = wordArray[index];
        console.log(wordArray[index]);
        index++;
        speed = 60000 / $("#WPMinput").val(); // in case user changes speed
    }, speed);
}

function changeScreens(x){

    if(x == true){
        $(".initialScreen").fadeOut("3000");
        $("#WPMinput").show();
        $(".secondScreen").fadeIn("3000");
        $("#wordDisplay").show();
    }
    else if(x == false){
        $(".initialScreen").fadeIn("3000");
        $("#WPMinput").show();
        $(".secondScreen").fadeOut("3000");
        $("#wordDisplay").hide();
    }

    toggleFlash = x;
    document.getElementById("wordDisplay2").innerHTML = " ";



}

$(document).ready(function(){

    splitWords();
    
    $("#textarea").on('change keyup paste', function(){
        splitWords();
    });
    

    $("#startbutton").click(function(){
        startClicked = !startClicked; //toggle
        if(startClicked){
            changeScreens(true);
            splitWords();    
            console.log(wordArray);
            showWords();
            $("#startbutton").html("PAUSE");
        }
        else if(!startClicked){ //if pause clicked
            $("#startbutton").html("START");
            toggleFlash = false;
        }
        

    });

    $("#backbutton").click(function(){
        changeScreens(false);
        index = 0;
        $("#startbutton").html("START");
        startClicked = false;
    })

    $("#startoverbutton").click(function(){
        
        if(index < wordArray.length - 2){
            index = 0;
        }
        else{
            index = 0;
            showWords();
        }
    })

});