var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
var score1 = 0;
var score2 = 0;
console.log(player1+player2);
document.getElementById("head-1").innerHTML="hi";
document.getElementById("p1_name").innerHTML = player1 + " : ";
document.getElementById("p2_name").innerHTML = player2 + " : ";
document.getElementById("player1_score").innerHTML = score1 ;
document.getElementById("player2_score").innerHTML = score2 ;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1 ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2 ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	answer = parseInt(number1) * parseInt(number2);
	console.log(answer);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
	document.getElementById("output").innerHTML=questionword+inputbox+checkbutton;
}
