// ========================================ALL THE VARIABLE  USED FOR THE CODE==============================================================

const userBox = document.querySelector(".user_box");
const quizBox = document.querySelector(".quiz_box");
let answer_options=document.querySelector(".option_list")
const option_list =document.querySelector(".option_list");
const infoBox=document.querySelector(".info_box");
const cont_btn =document.querySelector("#continue")
const Reset =document.querySelector("#reset_category")
const result_box = document.querySelector(".result_box");
const restart = document.querySelector(".restart");
const  Quit = document.querySelector(".quit");
const timer =document.querySelector('#timer');
let que_count=0;
let que_numb=1;
let score = 0;
let val ="";
let correctAnswers =0;
let wrongAnswers = 0;
let totalQuestion = 10;
let attempt = 0;
let percent_result= 0;


var timerId = setInterval(countdown, 1000);
var elem = document.querySelector('#timer');
let initialTime = 30;

// =================================================CODE TO PRINT THE NAME IN USER BOX==================================

print_name =()=>{
    const val = document.querySelector('#user_name').value;
     const user_Name = document.querySelector(".name-result").innerHTML = val  + " " +  "your Result is ";
    document.querySelector('#display_name').innerHTML = "Welcome" + " " +val;
  }
 
 

// ===================================================FUNCTION FOR TIMER====================================

function countdown() {
  if (initialTime == 0) {
      clearTimeout(timerId);
      alert("You're out of time!");
     
  } else {
      elem.innerHTML = initialTime;
      initialTime--; // Decrease the timer value for each second
  }
}

  
//   ==================================TIME TAKEN==============================================

let startTime;
function startTimer() {
    startTime = new Date().getTime(); // Get the current timestamp in milliseconds
  }

  function TIMER() {
    const endTime = new Date().getTime(); // Get the current timestamp when the quiz ends
    const timeTakenInSeconds = Math.floor((endTime - startTime) / 1000); // Calculate the time taken in seconds
    result_box.querySelector(".time-taken").innerHTML = "<b>Total Time Taken is </b>:" + timeTakenInSeconds + " seconds";
  }
  


//========================================= WHEN CONTINUE BUTTON IS CLICK ON INFORMATION BOX===========================

cont_btn.onclick= () => {
    infoBox.classList.remove("activeinfo");
    userBox.classList.add("activeUser"); 
    showQuestionprobab[0];
    queCounter(0);
    startTimer();
};


// ==============================================================WHEN RESTART IS CLICKED IN IN RESULT BOX===========================

restart.addEventListener("click", () => {
    window.location.reload(true); // Window reload at result page
});


// ============================================WHEN BACK BUTTON IS CLICK IN USER BOX ================================

Reset.onclick = () =>{
    userBox.classList.remove("activeUser");
 
    
};



    // =================================================================== JAVA SCRIPT FOR PROBABILITY==========================================

const ProbBtn = document.querySelector("#Prob");
const next_button = document.querySelector("#next");

// -------------------------------------------------FUNCTION WHEN PROBABILTIY IS CLICKED IN FOUR CATEGORY-----------------------------

ProbBtn.onclick =() => {
    userBox.classList.add("none")
    infoBox.classList.remove("activeinfo"); 
    quizBox.classList.add("activeQuiz"); 
    topic.innerHTML = "PROBABILITY";
    showQuestionprobab(0);
    queCounter(1);
};

// --------------------------------------------------FUNCTION WHEN NEXT BUTTON IS CLICKED IN QUIZ---------------------------------------------------

next_button.onclick = () => {

    if (que_count < PROBABILITY.length - 1) {
        que_count++;
        que_numb++;
        showQuestionprobab(que_count);
        queCounter(que_numb);
        countdown();
       next_button.style.display = "none";
      
    }
    else {
        console.log("question completed");
        showResultbox();

      
    }

}

// ==========================================FUNCTION TO USED QUESTION FROM ARRAYS=========================================================

function showQuestionprobab(index) {
    const que_text = document.querySelector(".question");

    let que_tag = '<span>' + PROBABILITY[index].numb + ". " + PROBABILITY[index].question + '</span>';
    let option_tag = '<span class="option">' + PROBABILITY[index].options[0] + '</span>'
        + '<span class="option">' + PROBABILITY[index].options[1] + '</span>'
        + '<span class="option">' + PROBABILITY[index].options[2] + '</span>'
        + '<span class="option">' + PROBABILITY[index].options[3] + '</span>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;


    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelectedprobab(this)");
    }
    initialTime = 30;
}

// ===============================================FUNCTION TO CHANGE PROBABILITY QUESTION=========================================

function optionSelectedprobab(answer) {
    let userAns = answer.textContent;
    let correctAns = PROBABILITY[que_count].answer;
    let allOptions = option_list.children.length;
    let scorebox = document.querySelector("#score");
    scorebox.innerText = "score";


    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is Correct");
        score++;
        scorebox.innerHTML = "Score :" + score;
        run();
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        scorebox.innerHTML = "Score :" + score;

        //----------------------------SHOWS CORRECT ANSWER WHEN INCORRECT ANSWER IS CLICKED---------------------------------------

        for (let i = 0; i < allOptions; i++) {

            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }
    attempt++;
    
    // ----------------------------------DISABLE OPTION WHEN ANSWERED------------------------------------------------------------

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_button.style.display = "block";

}

// ================================================================FUNCTION TO COUNT QUESTION NUMBER=========================================

function queCounter(index) {
    const top_question_count = quizBox.querySelector(".qcount");
    let totalQuestioncount = "<span>" + index + "/" + PIPES.length + "</span>";
    top_question_count.innerHTML = totalQuestioncount;
  }
 

  
// ===============================================================JAVA SRIPT FOR RESULT BOX===========================================

function showResultbox(){
  infoBox.style.display = "none";
  userBox.classList.remove("activeuser");
  quizBox.classList.remove("activeQuiz");
  result_box.classList.add("activeresult");
 

function wrong_Ans(){
  wrongAnswers = totalQuestion - score;
  result_box.querySelector(".wrong").innerHTML = "<b> Wrong Answers</b> :" + wrongAnswers;
}
function  correct_Ans(){
  correctAnswers = totalQuestion - wrongAnswers;
  result_box.querySelector(".correct").innerHTML = "<b> Correct Answers:</b> " + correctAnswers;
}
function percentage(){
  percent_result = (correctAnswers / totalQuestion) * 100;
  result_box.querySelector(".Percentage").innerHTML = "<b> Percentage :</b> " + percent_result +"%";
}
function time(){
  time_taken =  totaltime - timeLeft;
  result_box.querySelector(".time-taken").innerHTML = "<b> Total Time Taken :</b> " +time_taken +" seconds";

}

wrong_Ans();
correct_Ans();
percentage();
TIMER();
};
