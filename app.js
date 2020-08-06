// Function to split string into array of words
var wordArray, index = 0, speed = 1000;
var toggleFlash = false, startClicked = false, screenSwapped = false;

function splitWords(){
    var text = $("textarea").val();
    wordArray = text.split(" ");
    console.log(wordArray.length);
    $("#wordCount2").text(wordArray.length + " words");
    document.getElementById("slider").max = wordArray.length - 1;
}

function showWords(){
    speed = 60000 / $("#WPMinput").val();
    var interval = setInterval(function(){
        if(index > wordArray.length - 2 || !toggleFlash || !startClicked){
            clearInterval(interval);
            $("#startbutton").html("START");
            startClicked = false;
            
        }
        document.getElementById("slider").value = index;
        console.log("index before incrementing: " + index);
        document.getElementById("wordDisplay2").innerHTML = wordArray[index];
        console.log(wordArray[index]);
        index++;
        console.log("index: " + index + " toggleflash: " + toggleFlash);
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
    var slider = document.getElementById("slider");
    slider.oninput = function(){
        index = this.value;
        document.getElementById("wordDisplay2").innerHTML = wordArray[index];
        $("#startbutton").html("START");
        toggleFlash = false;
    }
    
    $("#textarea").on('change keyup paste', function(){
        splitWords();
    });
    

    $("#startbutton").click(function(){
        startClicked = !startClicked; //toggle
        if(startClicked){

            toggleFlash = true;
            if(!screenSwapped){
                index = 0;
                document.getElementById("slider").value = index;
                changeScreens(true);
                screenSwapped = true;
                splitWords();    
                console.log(wordArray);
            }
            
            if(index > wordArray.length - 2){
                index = 0;
                document.getElementById("slider").value = index;
            }

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
        $("#startbutton").html("START");
        startClicked = false;
        screenSwapped = false;
    })

    $("#startoverbutton").click(function(){
        
        if(index < wordArray.length - 2){
            index = 0;
        }
        else{
            index = 0;
            showWords();
        }
        document.getElementById("slider").value = index;
        if(!startClicked){
            document.getElementById("wordDisplay2").innerHTML = wordArray[0];
        }
    })

});