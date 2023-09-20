
// ===============================================================JAVA SCRIPT FOR AGES PROBLEM=======================================

const AgesBtn = document.querySelector("#Ages");
const next3 = document.querySelector("#next3");

// ================================================FUNCTION WHEN AGES IS CHOOSEN FROM CATEGORY=========================

AgesBtn.onclick= () => {
    userBox.classList.add("none");
    userBox.classList.remove("activeuser"); 
    quizBox.classList.add("activeQuiz"); 
    topic.innerHTML = "PROBLEM ON AGES";
    showQuestionages(0);
    queCounter(1);
    
};

// ============================================================FUNCTION WHEN NEXT BUTTON IS CLICKED AGES QUIZ===========================

next3.onclick = () => {

    if (que_count < AGES.length - 1) {
        que_count++;
        que_numb++;
        showQuestionages(que_count);
        queCounter(que_numb);
        countdown();
        next_button.display = "none";
        next2.style.display = "none";
        next3.style.display = "none";
    }
    else {
        console.log("question completed");
        showResultbox();
    }

}

// =====================================================FUNCTION USED TO ACCESS AGES QUESTION FROM ARRAY===================================

function showQuestionages(index) {
    const que_text = document.querySelector(".question");

    let que_tag = '<span>' + AGES[index].numb + ". " + AGES[index].question + '</span>';
    let option_tag = '<span class="option">' + AGES[index].options[0] + '</span>'
        + '<span class="option">' + AGES[index].options[1] + '</span>'
        + '<span class="option">' + AGES[index].options[2] + '</span>'
        + '<span class="option">' + AGES[index].options[3] + '</span>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelectedages(this)");
    }
    initialTime = 30;
}


// =================================================FUNCTION TO SELECT OPTION========================================

function optionSelectedages(answer) {
    let userAns = answer.textContent;
    let correctAns = AGES[que_count].answer;
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
    next3.style.display = "block";

}