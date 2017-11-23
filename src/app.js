require("./css/styles.css");

window.onload=function(){ 
    //alert('hello webpack'); 
    var cardNumbre = ['1','2','3','4','5','6','7','8','9','J','Q','K'];
    var suit = ['Diamonds', 'Hearts', 'Spades','Cluds'];
    var randomCardNumber = Math.floor(Math.random() * cardNumbre.length);
    var randomSuitNumber = Math.floor(Math.random() * suit.length);
    var finalSuit = suit[randomSuitNumber];
    
}