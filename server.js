$(document).ready(function() {

function getQuote() {
    var quotes = ["Courage is resistance of fear, mastery of fear, not absense of fear.",
                  "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
                  "You're only given a little spark of madness. You mustn't lose it.",
                  "Nothing will work unless you do.",]
    var author = [" - Mark Twain",
                  " - Barack Obama",
                  " - Robin Williams",
                  " - Maya Angelou"]
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    }
    
    $(".btn").on("click", function(){
        getQuote()
        
    });
    
});