
// 
const quiz = [
    {
        question_no : 1,
        question : 'Which is the longest river',
        option1: 'river nile',
        option2: 'misissipi',
        option3: ' river niger',
        answer : 'river nile',
        
    },

    {
        question_no : 2,
        question: 'Which is the highest mountain',
        option1 : 'mount Horeb',
        option2 : 'mount Everest',
        option3 : 'mount Olive',
        answer : 'mount Everest',

    },
    
    {
        question_no : 3,
         question : 'Which of these countries is considered as the gaint of Africa',
         option1 : 'Nigeria',
         option2 : 'Ghana',
         option3 : 'Eygpt',
         answer : 'Nigeria',
        
    },

    {
        question_no : 4,
        question : 'What is the smallest unit in the body',
        option1 : 'Organ',
        option2 : 'Cell',
        option3 : 'Tissue', 
        answer : 'Cell',
        
    },

    {
        question_no : 5,
        question : 'The most popular sport in the world is',
        option1 : 'Basketball',
        option2 : 'Tennis',
        option3 : 'Football',
        answer : 'Football',
        
    }

];


// 

const quizQuestions = document.getElementById('questions');
const option = document.getElementById('options');
const next = document.getElementById("next")
const scoreElement = document.getElementById('score'); // Get the score element
let questionNum = 0;


  quizQuestions.innerHTML = `
    <span>Question ${quiz[questionNum].question_no}</span>
    <p>${quiz[questionNum].question}</p>
    
    <p></p>
    
    <label>
      <input type="radio" name="answer" value = "${quiz[questionNum].option1}" id="option1"> ${quiz[questionNum].option1}
    </label>
    <label>
      <input type="radio" name="answer" value="${quiz[questionNum].option2}" id="option2"> ${quiz[questionNum].option2}
    </label>
    <label>
      <input type="radio" name="answer" value="${quiz[questionNum].option1}" id="option3"> ${quiz[questionNum].option3}
    </label>`;


function handleNextClick() {
  checkAnswer()
  questionNum++;
  if (questionNum < quiz.length){
    quizQuestions.innerHTML = `<span>Question ${quiz[questionNum].question_no}</span>
    <p>${quiz[questionNum].question}</p>
    
    <p></p>
    
    <label>
      <input type="radio" name="answer" value = "${quiz[questionNum].option1}"> ${quiz[questionNum].option1}
    </label>
    <label>
      <input type="radio" name="answer" value = "${quiz[questionNum].option2}" id="option2"> ${quiz[questionNum].option2}
    </label>
    <label>
      <input type="radio" name="answer" value = "${quiz[questionNum].option3}"> ${quiz[questionNum].option3}
    </label>`;
  }
  else{
    endQuiz();
  }
}

// scoreElement.innerHTML = 'score';
 let score = 0;

function checkAnswer() {
const selectedAnswer = document.querySelector('input[name="answer"]:checked');
// console.log(selectedAnswer.value);
if(selectedAnswer.value === quiz[questionNum].answer){
console.log(selectedAnswer.value, quiz[questionNum])
score++;
alert('correct')
updateScore();
// scoreElement.textContentL= 'score'
} 
else {
  alert('wrong')
} 

};


function updateScore() {
  scoreElement.innerHTML = ` ${score}`;
  scoreElement.textContent = ` ${score}`;

 }

// next.addEventListener('click', checkAnswer);


function endQuiz() {
  quizQuestions.innerHTML = "Quiz completed"
  
  next.style.display = "none"
}

console.log(1 + '1')