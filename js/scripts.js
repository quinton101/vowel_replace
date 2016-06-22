// FILL THIS OUT
// name of exercise
// name of student
var project = "Vowel Replace";
var myName = "Quinton and John";
// business logic
var vowels = ["a","e","i","o","u"];

var replaceVowels = function(input) {
    var inputArray = input.split("");
    for(var i = 0; i < inputArray.length; i++) {
        var result = vowels.indexOf(inputArray[i]);
        if (result !== -1) {
            inputArray[i] = "-";
        }
    }
    var finalResult = inputArray.join("");
    return finalResult;
}


$(document).ready(function() {
  // page setup logic
  $("#this_exercise span").text(project);
  $("#this_field span").text(project);
  $("#this_output span").text(project);
  $("#footer span").text(myName);

  // page business logic
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input_text").val();
    var answer = replaceVowels(userInput);
    $("#function_output span").text(answer);
    $(".my_result").show();

    // alert(userInput);
  });

  $("#reset").click(function() {
    $("#input_text").val("");
    $(".my_result").hide();
  })

})
