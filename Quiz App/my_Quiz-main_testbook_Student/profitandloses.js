

// =========================================================JAVA SCRIPT FOR PROFIT AND LOSSES======================================


const ProfitBtn = document.querySelector("#Profit");
const next4 = document.querySelector("#next4");

// =================================================FUNCTION WHEN PROFIT IS CHOOSEN FROM CATEGORY=============================

ProfitBtn.onclick = () => {
    userBox.classList.add("none");
    userBox.classList.remove("activeuser"); 
    quizBox.classList.add("activeQuiz"); 
    topic.innerHTML = "PROFIT AND LOSS";
    showQuestionprofit(0);
    queCounter(1);
    
};

// ============================================================FUNCTION WHEN NEXT BUTTON IS CLICKED IN PROFIT QUIZ===========================

next4.onclick = () => {
    if (que_count <PROFIT.length - 1) {
        que_count++;
        que_numb++;
        showQuestionprofit(que_count);
        queCounter(que_numb);
        countdown();
        next_button.display = "none";
        next2.style.display = "none";
        next3.style.display = "none";
        next4.style.display = "none";
    }
    else {
        console.log("question completed");
        showResultbox();
    }
};

// =====================================================FUNCTION USED TO ACCESS PROFIT QUESTION FROM ARRAY====================

function showQuestionprofit(index) {
    const que_text = document.querySelector(".question");

    let que_tag = '<span>' +PROFIT[index].numb + ". " +PROFIT[index].question + '</span>';
    let option_tag = '<span class="option">' +PROFIT[index].options[0] + '</span>'
        + '<span class="option">' +PROFIT[index].options[1] + '</span>'
        + '<span class="option">' +PROFIT[index].options[2] + '</span>'
        + '<span class="option">' +PROFIT[index].options[3] + '</span>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelectedprofit(this)");
    }
    initialTime = 30;
}

// =================================================FUNCTION TO SELECT OPTION========================================

function optionSelectedprofit(answer) {
    let userAns = answer.textContent;
    let correctAns =PROFIT[que_count].answer;
    let allOptions = option_list.children.length;
    let scorebox = document.querySelector("#score");
    scorebox.innerText = "score";
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is Correct");
        score++;
        scorebox.innerHTML = "Score :" + score;
        TIMER();
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        scorebox.innerHTML = "Score :" + score;
     
//-------------------------------------------SHOWS CORRECT ANSWER WHEN INCORRECT ANSWER IS CLICKED-------------------------

        for (let i = 0; i < allOptions; i++) {

            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }
    attempt++;
   
  // ----------------------------------DISABLE OPTION WHEN ANSWERED------------------------------------------------------------ ------

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next4.style.display = "block";

}