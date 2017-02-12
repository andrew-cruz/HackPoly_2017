//Array that holds questions
var question = [];
//jquery function that reads text.txt and stores it into question[]
$(document).ready(function() {
    //fetch text file
    $.get('../questions/text.txt', function(data) {
        //split on new lines
        question = data.split('\n');
        buttonText(question);
    });
});

//Holds values for a) b) c)
var buttonValue = [];
/* function that seperates dollar amount from question and stores it into
 * buttonvalue[]
 */
function buttonText(){
  //Index to move through buttonValue[]
  buttonValueIndex = 0;
  //iterates through question[]
  for(var i = 1; i < question.length; i += 2 ){
    /* charArray[] stores indivial char values from question[i]
     * charArrayIndex used to move through charArray[]
     */
    charArrayIndex = 0;
    var charArray = [];
    //Inner loop that iterates through each char at question[i]
    for(var j = 3; j < question[i].length; j++){
      //Store char in CharArray[] if value is a number
      if(question[i].charCodeAt(j) >= "0".charCodeAt(0) && question[i].charCodeAt(j) <= "9".charCodeAt(0)){
        charArray[charArrayIndex] = question[i].charAt(j);
        charArrayIndex++;
      }
      /* Stores entire charArray[] as a string into buttonValue[buttonValueIndex]
       * if current char is a " " or j === question[i].length - 1
       */
      if( ( question[i].charCodeAt(j) === " ".charCodeAt(0) ) || ( j === question[i].length - 1) ) {
        buttonValue[buttonValueIndex] = charArray.join("");
        buttonValueIndex++;
        charArray = [];
        charArrayIndex = 0;
        j += 3;
      }
    }
  }
}




var number = 0;
var amount = 0;

//jquery functions that change on screen question
$(document).ready(function(){
    $("button").click(function(){
      $("p").text(question[number] + question[number + 1]);
      $('#button0').text("$" + buttonValue[amount]);
      $('#button1').text("$" + buttonValue[amount + 1]);
      $('#button2').text("$" + buttonValue[amount + 2]);

      amount += 3;
      number += 2;
    });

    $('#button0').click(function(){

    });

    $('#button1').click(function(){

    });

    $('#button2').click(function(){

    });
});
