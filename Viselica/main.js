//Вступление
var name = prompt("Как вас зовут?");
alert("Привет, " + name + " !");
var likeCats = confirm("Тебе нравятся кошки?");
 if(likeCats){
 	alert("Хорошо, что нравятся, я тоже их люблю!");
 } else{
 	alert("Что ж, не проблема. Все равно ты молодец!");	
 }
 alert("Ну что, начнем играть?");

//Игра
var words = [
	"программа",
	"макака",
	"прекрасный",
	"оладушек",
	"валера",
	"президент",
	"компьютер",
	"магазин"
];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++){
	answerArray[i] = "_";
}
var remainingLetters = word.length;
while (remainingLetters > 0) {
	alert(answerArray.join(" "));
	var guess = prompt("Угадай букву или нажми отмена для выхода из игры.");
	if (guess === null) {
		break;
	} else if (guess.length !==1) {
		alert("Пожалуйста введите только одну букву.");
	} else {
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}

}
alert(answerArray.join(" "));
alert("Отлично, было загадано слово " + word);