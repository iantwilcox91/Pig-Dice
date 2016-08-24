// buisness logic
var X = 0
function diceRoll(){
  var rollResult = Math.floor((Math.random() * 6) + 1);
  return rollResult ;
}
function dicePicture(index) {
  var string = "dice/dice" + index + ".png";
  $("img").attr("src", string);
}
function postCurrentRoll(index){
  $("ul").append("<li>" + index + "</li>");
}
function totalCurrentPoints(i) {
  X = X+i;
  $(".CurPts").text(X);
}
function rolledOne(i) {
  if (i === 1){
    X = 0;
    $(".CurPts").text(X);
    $("ul").empty();
    // switch player display
  }
}



// front end logic
$(document).ready(function() {
  $("form#player1name").submit(function(event) {
    event.preventDefault();
  });
  $("form#player2name").submit(function(event) {
    event.preventDefault();
  });
  $("#ROLLbtn").click(function() {
    var numRolled = diceRoll();
    dicePicture(numRolled);
    postCurrentRoll(numRolled);
    totalCurrentPoints(numRolled);
    rolledOne(numRolled)
  });







});
