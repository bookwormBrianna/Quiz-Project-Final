function submitQuiz() {

// can't grab values here in case they weren't answered
// userAnswers
// make a variable to check each question using querySelector
var question1 = document.querySelector("input[name='q1']:checked");
var question2 = document.querySelector("input[name='q2']:checked");
var question3 = document.querySelector("input[name='q3']:checked");
var question4 = document.querySelector("input[name='q4']:checked");
var question5 = document.querySelector("input[name='q5']:checked");
var question6 = document.querySelector("input[name='q6']:checked");
var question7 = document.querySelector("input[name='q7']:checked");
var question8 = document.querySelector("input[name='q8']:checked");
var question9 = document.querySelector("input[name='q9']:checked");
var question10 = document.querySelector("input[name='q10']:checked");
var question11= document.querySelector("input[name='q11']:checked");

// make a variable for the answers, using the variables from above in an array
var answers = [question1, question2, question3, question4, question5,question6, question7, question8, question9, question10,question11];

// correct answers
var correct1 = "a";
var correct2 = "c";
var correct3 = "b";
var correct4 = "a";
var correct5 = "d";
var correct6 = "b";
var correct7 = "a";
var correct8 = "c";
var correct9 = "b";
var correct10 = "d";
var correct11 = "c";

var correctAnswers = [correct1, correct2, correct3, correct4, correct5, correct6, correct7, correct8, correct9, correct10, correct11];


// can't set variables inside of loop
var answerValues = [];
var answerCompare = [];
var correctCount = 0;

// loop through each answer set
for (var i = 0; i < answers.length; i++) {

// make sure questions are answered
if( answers[i] != undefined && answers[i] != null ) {

// pull value of each radio set
// pull value once you know its not null
// this one is for the text so that the spacing is easier to read
// this one is for the doc write
answerValues += answers[i].value + ', ';

// this one keeps just the value for comparison
// this one is for the loop
answerCompare += answers[i].value;


// check values of user answer array vs correct answer array.
// start a counter for each answer that matches
if(answerCompare[i] == correctAnswers[i]) {
	correctCount += 1;
				}


document.querySelector(".quizResponse").innerHTML = "Your Answers: " + answerValues + "</br> Correct Answers: a, c, b, a, d, b, a, c, b, d, c";
document.querySelector(".quizFeedBack").innerHTML = "You got: " + correctCount + " right out of 11";

				

	} else {

		document.querySelector(".quizResponse").innerHTML = "Please answer each question!";
			}
		}	
	}