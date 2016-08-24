// buisness logic
var curPtsVar = 0
var plr1PtsTotal = 0
var plr2PtsTotal = 0
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
  curPtsVar = curPtsVar+i;
  $(".CurPts").text(curPtsVar);
}
function rolledOne(i) {
  if (i === 1){
    curPtsVar = 0;
    $(".CurPts").text(curPtsVar);
    $("ul").empty();
    // switch player display
  }
}


function sumPts() {
  // target turn player
  plr1PtsTotal = curPtsVar+plr1PtsTotal;
  $(".plr1").text(plr1PtsTotal);
  curPtsVar = 0;
  $(".CurPts").text(curPtsVar);
  $("ul").empty();
  // switch player display

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
  $("#PASSbtn").click(function() {
    sumPts();
    // switch player display
  });





});
