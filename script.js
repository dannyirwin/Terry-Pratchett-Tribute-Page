var qArr = [
  "Stories of imagination tend to upset those without one",
  "A marriage is always made up of two people who are prepared to swear that only the other one snores",
  "Geography is just physics slowed down, with a couple of trees stuck in it",
  "An education was a bit like a communicable sexual disease. It made you unsuitable for a lot of jobs and then you had the urge to pass it on",
  "The truth may be out there, but the lies are inside your head",
  "Give a man a fire and he's warm for the day. But set fire to him and he's warm for the rest of his life",
  "Real stupidity beats artificial intelligence every time",
  "In ancient times cats were worshipped as gods. They have not forgotten this",
  "The space between the young readers eyeballs and the printed page is a holy place and officialdom should trample all over it at their peril",
  " \'Educational\' refers to the process, not the object. Although, come to think of it, some of my teachers could easily have been replaced by a cheeseburger",
  "Dickens, as you know, never got round to starting his home page",
  "I once absent-mindedly ordered Three Mile Island dressing in a restaurant and, with great presence of mind, they brought Thousand Island Dressing and a bottle of chili sauce",
  "I didn't go to university. Didn't even finish A-levels. But I have sympathy for those who did",
  "It is said that your life flashes before your eyes just before you die. That is true, it's called Life",
  "Only in our dreams are we free. The rest of the time we need wages",
  "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it",
  "Five exclamation marks, the sure sign of an insane mind",
  "Taxation is just a sophisticated way of demanding money with menaces",
  "The pen is mightier than the sword if the sword is very short, and the pen is very sharp",
  "Most of the great triumphs and tragedies of history are caused not by people being fundamentally good or fundamentally evil, but by people being fundamentally people",
  "Fantasy is an exercise bicycle for the mind. It might not take you anywhere, but it tones up the muscles that can",
    "So much universe, and so little time",
    "I commend my soul to any God that can find it",
    "They say a little knowledge is a dangerous thing, but it's not one half so bad as a lot of ignorance",
    "Goodness is about what you do. Not what you pray to",
    "The intelligence of that creature known as a crowd is the square root of the number of people in it",
    "Time is a drug. Too much of it kills you",
    "Pets are always a help in times of stress. And in times of starvation, too, of course",
    "Most gods throw dice, but Fate plays chess, and you don't find out til too late that he's been playing with two queens all along",
    "Evil begins when you begin to treat people as things",
    "Here’s some advice boy. Don’t put your trust in revolutions. They always come around again. That's why they’re called revolutions",
    "The entire universe has been neatly divided into things to (a) mate with, (b) eat, (c) run away from, and (d) rocks",
    "It’s still magic even if you know how it’s done",
    "The presence of those seeking the truth is infinitely to be preferred to the presence of those who think they’ve found it",
    "I’d rather be a rising ape than a falling angel",
    "If there was anything that depressed him more than his own cynicism, it was that quite often it still wasn’t as cynical as real life",
    "It’s not worth doing something unless someone, somewhere, would much rather you weren’t doing it",
    "Wisdom comes from experience. Experience is often a result of lack of wisdom",
    " Some humans would do anything to see if it was possible to do it. If you put a large switch in some cave somewhere, with a sign on it saying 'End-of-the-World Switch. PLEASE DO NOT TOUCH', the paint wouldn't even have time to dry",
    "Human beings make life so interesting. Do you know, that in a universe so full of wonders, they have managed to invent boredom"

  ],
    quote;

var card = document.getElementsByClassName("card");

/*$(document).ready(function() {
  
   $("#getQuote").on("click", function() {
     
    quote = qArr[Math.floor(Math.random() * qArr.length)];
     
    $("#quote").html("\"" + quote + ".\"");
     
      $(".fa-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + quote +"&hashtags=TerryPratchett, quote, rip");
    });

 });*/


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "12px";
    } else {
        document.getElementById("header").style.fontSize = "20px";
    }
}

function toggleCard() {
    if ($(this).hasClass("closed")) {
        $(this).removeClass("closed");
    } else {
        $(this).addClass("closed");
    }

}


window.onscroll = function () {
    scrollFunction();
};

$(document).on('click', '.card', toggleCard);
