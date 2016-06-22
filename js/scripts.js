// FILL THIS OUT
// name of exercise
// name of student
var project = "Leap Year";
var myName = "John Franti";


$(document).ready(function() {
  // page setup logic
  $("#this_exercise span").text(project);
  $("#this_field span").text(project);
  $("#this_output span").text(project);
  $("#footer span").text(myName);

  // page business logic
  $("#input").submit(function(event) {
    event.preventDefault();
    $(".my_result").show();

    // alert("Submission Successful");
  });

  $("#reset").click(function() {
    $("#input_text").val("");
    $(".my_result").hide();
  })

})
