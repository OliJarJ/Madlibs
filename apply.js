//function createParagraph(){
   // return ;
//}
// const storySection = document.getElementById('completed-story');
// const madLibsForm = document.getElementById('madlibs-form');

// const submitMadLibs = (event) => {
//     alert('Super!');
//    event.preventDefault();
//    madLibsForm.classList.add('hide');

// const form = new FormData(event.target);
// const userSubmission = Object.fromEntries(form);


// const story = `<h2>Results</h2>
// <p>I scoured my closet for the perfect <span class="inserted-text">${userSubmission.clothing-1}</span> to wear. Dressing for the <span class="inserted-text">${userSubmission.superlative-1}</span> place
    
//     around isn’t easy. Sweating <span class="inserted-text">${userSubmission.plural-noun-1}</span> during the interview is a sure sign of weakness. I must
   
//     remember to play up my strengths: <span class="inserted-text">${userSubmission.sport-1}</span>, menacing stares, and <span class="inserted-text">${userSubmission.noun-1}</span> collecting.
// </p>

// <p>It has always been my dream to work with the Angel of Death, or <span class="inserted-text">${userSubmission.personal-title-1}</span> Devil. The power
  
//     and prestige are <span class="inserted-text">${userSubmission.adverb-1}</span>desirable.
// </p>

// <p>The Gates of <span class="inserted-text">${userSubmission.proper-noun-1}</span> tower above me as I ring the doorbell. I can’t believe <span class="inserted-text">${userSubmission.song-title-1}</span> is
   
//     the doorbell chime. <span class="inserted-text">${userSubmission.interjection-1}</span>, his black <span class="inserted-text">${userSubmission.clothing-2}</span> looks better in person!
// </p>

// <p><strong>The Devil:</strong> “Welcome to Hell. Your interview will <span class="inserted-text">${userSubmission.verb-1}</span> now.”</p>

// <p><strong>Me:</strong> “It’s a pleasure to meet you. My name is <span class="inserted-text">${userSubmission.famous-person-1}</span>.”</p>

// <p><strong>The Devil:</strong> “Who cares? I have only one question. Do you hate <span class="inserted-text">${userSubmission.plural-noun-2}</span>?”</p>

// <p><strong>Me:</strong> “Yes, yes I do. I hate them more than <span class="inserted-text">${userSubmission.plural-noun-3}</span>.”</p>

// <p><strong>The Devil:</strong> “You’re hired. Wait, is that a <span class="inserted-text">${userSubmission.clothing-3}</span> you’re wearing?”</p>

// <p><strong>Me:</strong> “No, it’s actually a <span class="inserted-text">${userSubmission.adjective-1}</span> suit.”</p>

// <p><strong>The Devil:</strong> “You’re fired. Maybe you should pursue a career in <span class="inserted-text">${userSubmission.job}</span>.”</p>`;

// storySection.innerHTML += story;
// }


function createParagraph() {
   
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
     + '<p> Me:</strong> “Yes, yes I do. I hate them more than ' + wordFifteen + '."</p>' + '<p> The Devil:</strong> “You\re hired. Wait, is that a ' + wordSixteen + ' you\'re wearing?"</p>' 
     + '<p> Me: “No, it\s actually a ' + wordSeventeen + 'suit.”</p>'
     + '<p> The Devil:</strong> “You\re fired. Maybe you should pursue a career in ' + wordEighteen + '."</p>'

    console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
}

//onclick attribute to button

