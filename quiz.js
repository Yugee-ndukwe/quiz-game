
const quiz = [
    {
        question_no: 1,
        question: 'What is the correct syntax to create a function in JavaScript?',
        option1: 'function myFunction() {}',
        option2: 'func myFunction() {}',
        option3: 'create function myFunction() {}',
        answer: 'function myFunction() {}',
    },
    {
        question_no: 2,
        question: 'Which of the following is a primitive data type in JavaScript?',
        option1: 'Object',
        option2: 'Array',
        option3: 'String',
        answer: 'String',
    },
    {
        question_no: 3,
        question: 'How do you declare a variable in JavaScript?',
        option1: 'var myVar;',
        option2: 'variable myVar;',
        option3: 'let myVar;',
        answer: 'var myVar; and let myVar;',
    },
    {
        question_no: 4,
        question: 'What is the output of console.log(2 + \'2\')?',
        option1: '22',
        option2: '4',
        option3: 'undefined',
        answer: '22',
    },
    {
        question_no: 5,
        question: 'How do you add a comment in JavaScript?',
        option1: '<!-- This is a comment -->',
        option2: '/* This is a comment */',
        option3: '// This is a comment',
        answer: '/* This is a comment */ and // This is a comment',
    },
    {
        question_no: 6,
        question: 'Which method is used to change the content of an HTML element?',
        option1: 'document.getElementById().innerHTML',
        option2: 'document.getElementById().textContent',
        option3: 'document.getElementById().value',
        answer: 'document.getElementById().innerHTML and document.getElementById().textContent',
    },
    {
        question_no: 7,
        question: 'How do you write an array in JavaScript?',
        option1: 'var myArray = (1, 2, 3);',
        option2: 'var myArray = [1, 2, 3];',
        option3: 'var myArray = {1, 2, 3};',
        answer: 'var myArray = [1, 2, 3];',
    },
    {
        question_no: 8,
        question: 'Which keyword is used to define a constant in JavaScript?',
        option1: 'const',
        option2: 'constant',
        option3: 'var',
        answer: 'const',
    },
    {
        question_no: 9,
        question: 'What does the typeof operator do?',
        option1: 'It returns the type of a variable.',
        option2: 'It changes the type of a variable.',
        option3: 'It creates a new variable of a specific type.',
        answer: 'It returns the type of a variable.',
    },
    {
        question_no: 10,
        question: 'How do you check if a variable is an array in JavaScript?',
        option1: 'Array.isArray(myArray)',
        option2: 'myArray instanceof Array',
        option3: 'typeof myArray === \'array\'',
        answer: 'Array.isArray(myArray) and myArray instanceof Array',
    },
    {
        question_no: 11,
        question: 'Which function is used to parse a string into an integer?',
        option1: 'parseInt()',
        option2: 'parseFloat()',
        option3: 'toInteger()',
        answer: 'parseInt()',
    },
    {
        question_no: 12,
        question: 'How do you declare a JavaScript object?',
        option1: 'var myObject = {};',
        option2: 'var myObject = []',
        option3: 'var myObject = ()',
        answer: 'var myObject = {};',
    },
    {
        question_no: 13,
        question: 'What is the result of 3 == \'3\' in JavaScript?',
        option1: 'true',
        option2: 'false',
        option3: 'undefined',
        answer: 'true',
    },
    {
        question_no: 14,
        question: 'Which method is used to remove the last element from an array?',
        option1: 'pop()',
        option2: 'shift()',
        option3: 'slice()',
        answer: 'pop()',
    },
    {
        question_no: 15,
        question: 'What does the alert() function do?',
        option1: 'Shows a dialog box with a message.',
        option2: 'Logs a message to the console.',
        option3: 'Changes the text of an HTML element.',
        answer: 'Shows a dialog box with a message.',
    },
    {
        question_no: 16,
        question: 'Which event occurs when the user clicks on an HTML element?',
        option1: 'onclick',
        option2: 'onmouseover',
        option3: 'onchange',
        answer: 'onclick',
    },
    {
        question_no: 17,
        question: 'How do you convert a string to lowercase in JavaScript?',
        option1: 'str.toLowerCase()',
        option2: 'str.toLower()',
        option3: 'str.lower()',
        answer: 'str.toLowerCase()',
    },
    {
        question_no: 18,
        question: 'What is the purpose of the return statement in a function?',
        option1: 'It exits the function and optionally returns a value.',
        option2: 'It calls the function again.',
        option3: 'It defines the function\'s name.',
        answer: 'It exits the function and optionally returns a value.',
    },
    {
        question_no: 19,
        question: 'Which method is used to add an element to the end of an array?',
        option1: 'push()',
        option2: 'pop()',
        option3: 'unshift()',
        answer: 'push()',
    },
    {
        question_no: 20,
        question: 'How do you find the length of an array in JavaScript?',
        option1: 'array.length',
        option2: 'array.size',
        option3: 'array.count',
        answer: 'array.length',
    },
    {
        question_no: 21,
        question: 'What is the output of console.log(\'Hello\'.charAt(1))?',
        option1: 'e',
        option2: 'H',
        option3: 'o',
        answer: 'e',
    },
    {
        question_no: 22,
        question: 'How do you create a new object in JavaScript?',
        option1: 'var obj = new Object();',
        option2: 'var obj = {};',
        option3: 'var obj = Object.create();',
        answer: 'var obj = new Object(); and var obj = {};',
    },
    {
        question_no: 23,
        question: 'What does JSON.parse() do?',
        option1: 'Converts a JSON string into a JavaScript object.',
        option2: 'Converts a JavaScript object into a JSON string.',
        option3: 'Formats a JSON string.',
        answer: 'Converts a JSON string into a JavaScript object.',
    },
    {
        question_no: 24,
        question: 'Which operator is used to compare two values for equality in JavaScript?',
        option1: '==',
        option2: '===',
        option3: '!=',
        answer: '== and ===',
    },
    {
        question_no: 25,
        question: 'What is the output of console.log(1 + \'1\')?',
        option1: '11',
        option2: '2',
        option3: 'NaN',
        answer: '11',
    },
    {
        question_no: 26,
        question: 'How do you create a new React component?',
        option1: 'function MyComponent() {}',
        option2: 'const MyComponent = () => {};',
        option3: 'class MyComponent {}',
        answer: 'function MyComponent() {} and const MyComponent = () => {};',
    },
    {
        question_no: 27,
        question: 'Which method is used to render a React component to the DOM?',
        option1: 'ReactDOM.render()',
        option2: 'React.render()',
        option3: 'ReactDOM.create()',
        answer: 'ReactDOM.render()',
    },
    {
        question_no: 28,
        question: 'How do you pass props to a React component?',
        option1: '<Component propName={value} />',
        option2: 'Component.propName = value;',
        option3: 'Component({ propName: value })',
        answer: '<Component propName={value} />',
    },
    {
        question_no: 29,
        question: 'What is the purpose of the useState hook in React?',
        option1: 'To manage state within functional components.',
        option2: 'To create class components.',
        option3: 'To handle side effects in components.',
        answer: 'To manage state within functional components.',
    },
    {
        question_no: 30,
        question: 'How do you handle events in React?',
        option1: 'Using the onEvent attribute, e.g., onClick',
        option2: 'Using the addEventListener method',
        option3: 'Using the event handler function',
        answer: 'Using the onEvent attribute, e.g., onClick',
    },
    {
        question_no: 31,
        question: 'What is a React Hook?',
        option1: 'A special function that lets you use state and other React features without writing a class.',
        option2: 'A method to handle events in React.',
        option3: 'A tool for optimizing performance.',
        answer: 'A special function that lets you use state and other React features without writing a class.',
    },
    {
        question_no: 32,
        question: 'How do you conditionally render components in React?',
        option1: 'Using if statements or conditional (ternary) operators.',
        option2: 'Using switch statements.',
        option3: 'Using loops.',
        answer: 'Using if statements or conditional (ternary) operators.',
    },
    {
        question_no: 33,
        question: 'What does the useEffect hook do in React?',
        option1: 'It manages side effects in functional components.',
        option2: 'It manages state in functional components.',
        option3: 'It creates new components.',
        answer: 'It manages side effects in functional components.',
    },
    {
        question_no: 34,
        question: 'How do you access the context value in a React functional component?',
        option1: 'Using the useContext hook.',
        option2: 'Using this.context.',
        option3: 'Using context.Consumer.',
        answer: 'Using the useContext hook.',
    },
    {
        question_no: 35,
        question: 'Which of the following is NOT a valid lifecycle method in React?',
        option1: 'componentWillUpdate()',
        option2: 'componentDidMount()',
        option3: 'componentWillRender()',
        answer: 'componentWillRender()',
    },
    {
        question_no: 36,
        question: 'How do you update state in a React class component?',
        option1: 'Using this.setState()',
        option2: 'Using this.updateState()',
        option3: 'Directly assigning to this.state',
        answer: 'Using this.setState()',
    },
    {
        question_no: 37,
        question: 'How do you pass data between components in React?',
        option1: 'Using props',
        option2: 'Using context',
        option3: 'Using local storage',
        answer: 'Using props and context',
    },
    {
        question_no: 38,
        question: 'Which lifecycle method is called after the component has been rendered to the DOM in class components?',
        option1: 'componentDidMount()',
        option2: 'componentWillMount()',
        option3: 'render()',
        answer: 'componentDidMount()',
    },
    {
        question_no: 39,
        question: 'What is a controlled component in React?',
        option1: 'A component that takes its value from props and manages it with state.',
        option2: 'A component that manages its own state.',
        option3: 'A component that doesn’t use state.',
        answer: 'A component that takes its value from props and manages it with state.',
    },
    {
        question_no: 40,
        question: 'How do you create a ref in React?',
        option1: 'React.createRef()',
        option2: 'useRef()',
        option3: 'createRef()',
        answer: 'React.createRef() and useRef()',
    },
    {
        question_no: 41,
        question: 'What is React.StrictMode used for?',
        option1: 'To highlight potential problems in an application during development.',
        option2: 'To enhance the performance of React components.',
        option3: 'To apply global styles.',
        answer: 'To highlight potential problems in an application during development.',
    },
    {
        question_no: 42,
        question: 'How do you specify the key prop in a list of React elements?',
        option1: '<Component key={value} />',
        option2: 'Component.key = value;',
        option3: 'Component.setKey(value);',
        answer: '<Component key={value} />',
    },
    {
        question_no: 43,
        question: 'What does ReactDOM.unmountComponentAtNode() do?',
        option1: 'Removes a component from the DOM.',
        option2: 'Mounts a component to the DOM.',
        option3: 'Updates the component in the DOM.',
        answer: 'Removes a component from the DOM.',
    },
    {
        question_no: 44,
        question: 'How do you define a functional component in React?',
        option1: 'const MyComponent = () => {};',
        option2: 'function MyComponent() {};',
        option3: 'class MyComponent {};',
        answer: 'const MyComponent = () => {}; and function MyComponent() {};',
    },
    {
        question_no: 45,
        question: 'Which hook is used to manage local state in functional components?',
        option1: 'useState()',
        option2: 'useReducer()',
        option3: 'useContext()',
        answer: 'useState()',
    },
    {
        question_no: 46,
        question: 'How do you handle user input in React forms?',
        option1: 'Using onChange event handlers.',
        option2: 'Using onInput event handlers.',
        option3: 'Using onClick event handlers.',
        answer: 'Using onChange event handlers.',
    },
    {
        question_no: 47,
        question: 'What is the purpose of the useMemo hook in React?',
        option1: 'To optimize performance by memoizing expensive calculations.',
        option2: 'To handle side effects.',
        option3: 'To manage component state.',
        answer: 'To optimize performance by memoizing expensive calculations.',
    },
    {
        question_no: 48,
        question: 'How do you manage component side effects in functional components?',
        option1: 'By using useEffect.',
        option2: 'By using componentDidMount in class components.',
        option3: 'By using useState.',
        answer: 'By using useEffect.',
    },
    {
        question_no: 49,
        question: 'What does the dangerouslySetInnerHTML attribute do in React?',
        option1: 'It allows you to set HTML content directly.',
        option2: 'It sanitizes HTML content.',
        option3: 'It sets the inner HTML in a safe way.',
        answer: 'It allows you to set HTML content directly.',
    },
    {
        question_no: 50,
        question: 'What is the purpose of React.memo?',
        option1: 'To optimize performance by memoizing component rendering.',
        option2: 'To create new components.',
        option3: 'To manage state in functional components.',
        answer: 'To optimize performance by memoizing component rendering.',
    }
];
;


// function for displaying quix questions

const quizQuestions = document.getElementById('questions');
const option = document.getElementById('options');
const next = document.getElementById("next")
const scoreElement = document.getElementById('score'); // Get the score element
const timerElement = document.getElementById('timer');
let questionNum = 0;
let timer;
let timeLeft = 10;

function moveToNextQuestion(){
    if(questionNum === timer){
        handleNextClick()
    }else{
        moveToNextQuestion()
    }
}

function startTimer(duration, display){
    let timer = duration,minutes,seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  "Time Remaing " + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "Time Expired!";
            scoreQuestion(0); 
            handleNextClick()
        }
    }, 1000);
}
window.onload = function () {
    const oneMinute = 60; // 1 minute in seconds
    const display = document.querySelector('#timer');
    startTimer(oneMinute, display);
};
    



quizQuestions.innerHTML = `
<span>Question ${quiz[questionNum].question_no}</span>
<p>${quiz[questionNum].question}</p>


<label>
  <input type="radio" name="answer" value = "${quiz[questionNum].option1}" id="option1"> ${quiz[questionNum].option1}
</label>
<br/>
<label>
  <input type="radio" name="answer" value="${quiz[questionNum].option2}" id="option2"> ${quiz[questionNum].option2}
</label>
<br/>
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

// console.log(1 + '1')


