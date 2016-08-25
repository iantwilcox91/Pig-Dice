// buisness logic
var curPtsVar = 0
var plr1PtsTotal = 0
var plr2PtsTotal = 0
var whosTurn = 1
function diceRoll(){
  var rollResult = Math.floor((Math.random() * 6) + 1);
  return rollResult ;
}
function dicePicture(index) {
  var string = "dice/dice" + index + ".png";
  $(".diceImg").attr("src", string);
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
    changeTurn();
  }
}


function sumPts() {
  if(whosTurn === 1){
    plr1PtsTotal = curPtsVar+plr1PtsTotal;
    $(".plr1").text(plr1PtsTotal);
  }else if (whosTurn === 2) {
    plr2PtsTotal = curPtsVar+plr2PtsTotal;
    $(".plr2").text(plr2PtsTotal);
  }
  curPtsVar = 0;
  $(".CurPts").text(curPtsVar);
  $("ul").empty();
}

function changeTurn(){
  if(whosTurn === 2){
    whosTurn = 1;
  }else{
    whosTurn = 2;
  }
  hideNotTurn()
}

function hideNotTurn() {
  if(whosTurn === 2){
    $(".turnP1").toggle();
    $(".turnP2").toggle();
  }else{
    $(".turnP2").toggle();
    $(".turnP1").toggle();
  }
}

function winner(){
  if(plr1PtsTotal > 99){
    var name = $("input.player1name").val().toUpperCase();

    $(".gameDisplay").hide();
    $(".restart").show();
    $(".restart h1").text(name + " You Are the WINNER!!!!!");
  }
  if(plr2PtsTotal > 99){
    var name = $("input.player2name").val().toUpperCase();

    $(".gameDisplay").hide();
    $(".restart").show();
    $(".restart h1").text(name + " You Are the WINNER!!!!!");
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
    rolledOne(numRolled);
    winner();
  });
  $("#PASSbtn").click(function() {
    sumPts();
    changeTurn();
    winner();
  });
  $("#ReStartbtn").click(function() {
    curPtsVar = 0;
    plr1PtsTotal = 0;
    plr2PtsTotal = 0;
    whosTurn = 1;
    $(".CurPts").text(curPtsVar);
    $(".plr1").text(plr1PtsTotal);
    $(".plr2").text(plr1PtsTotal);
    $(".gameDisplay").show();
    $(".restart").hide();
    $(".turnP1").show();
    $(".turnP2").hide();

  });
});
