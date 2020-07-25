// Function to split string into array of words
var wordArray;
function splitWords(text){
    wordArray = text.split(" ");
}

$(document).ready(function(){
    $("#startbutton").click(function(){
        text = $("textarea").val();
        $("#startbutton, #textarea, #paste").fadeOut("3000")
        $("#wordDisplay").show();
        splitWords(text);
        console.log(wordArray);
        for(var i = 0; i < wordArray.length; i++){
            console.log(wordArray[i]);
            document.getElementById("wordDisplay2").innerHTML = wordArray[i];
        }
    });

});