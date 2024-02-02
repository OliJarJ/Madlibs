//function createParagraph(){
   // return ;
//}

function createParagraph() {
    console.log(createParagraph)
    var wordOne = document.getElementById("textOne").value;
    var wordTwo = document.getElementById("textTwo").value;
    var wordThree = document.getElementById("textThree").value;
    var wordFour = document.getElementById("textFour").value;
    var wordFive = document.getElementById("textFive").value;
    var wordSix = document.getElementById("textSix").value;
    var wordSeven = document.getElementById("textSeven").value;
    var wordEight = document.getElementById("textEight").value;
    var wordNine = document.getElementById("textNine").value;
    var wordTen = document.getElementById("textTen").value;
    var wordEleven = document.getElementById("textEleven").value;
    var wordTwelve= document.getElementById("textTwelve").value;
    var wordThirteen = document.getElementById("textThirteen").value;
    var wordFourteen = document.getElementById("textFourteen").value;
    var wordFifteen = document.getElementById("textFifteen").value;
    var wordSixteen = document.getElementById("textSixteen").value;
    var wordSeventeen = document.getElementById("textSeventeen").value;
    var wordEighteen = document.getElementById("textEighteen").value;
    

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight, wordNine, wordTen, wordEleven, wordTwelve, wordThirteen, wordFourteen, wordFifteen, wordSixteen, wordSeventeen, wordEighteen)

    var paragraph = "<p> I scoured my closet for the perfect " + wordOne + " to wear." + " Dressing for the " + wordTwo + " place around isn't easy." + " Sweating " + wordThree + " during the interview is a sign of weakness." + " I remember to play up my strengths: " + wordFour + ", menacing stares, and " + wordFive + " collecting.</p>" 
    + "<p> It has always been my dream to work with the Angel of Death, or "+ wordSix + " the Devil. " + "The power and prestige are " + wordSeven + " desirable." + "The gates of " + wordEight +" tower above me as I ring the doorbell." + "I can\'t believe " + wordNine + " is the doorbell chime." + wordTen + ", his black " + wordEleven + " looks better in person!</p>" + '<p> The Devil: “Welcome to Hell. Your interview will ' + wordTwelve + ' now."</p>' 
     + '<p> Me: “It\'s a pleasure to meet you. My name is ' + wordThirteen + '."</p>'  + '<p> The Devil: “Who cares? I have only one question. Do you hate ' + wordFourteen + '?"</p>' 
     + '<p> Me:</strong> “Yes, yes I do. I hate them more than ' + wordFifteen + '."</p>' + '<p> The Devil:</strong> “You\re hired. Wait, is that a ' + wordSixteen ' you\'re wearing?"</p>' 
     + '<p> Me: “No, it\s actually a ' + wordSeventeen + 'suit.”</p>'
     + '<p> The Devil:</strong> “You\re fired. Maybe you should pursue a career in ' + wordEighteen + '."</p>'

    console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
}

//onclick attribute to button

object.onclick = createParagraph{
};