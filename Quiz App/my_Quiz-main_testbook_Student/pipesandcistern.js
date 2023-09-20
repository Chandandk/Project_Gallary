




//  =========================================================== JAVA SCRIPT FOR PIPE ======================================================

const pipesBtn = document.querySelector("#Pipes");
const next2 = document.querySelector("#next2");
const topic = document.querySelector(".cat_title");


//=================================== WHEN PIPE CATEGORY IS CHOOSEN IN CATEGORIES ===================================

pipesBtn.onclick =() => {
    userBox.classList.remove("activeUser"); 
    quizBox.classList.add("activeQuiz"); 
    topic.innerHTML = "PIPES AND CISTERN";
     
    showQuestion(0);
    queCounter(1);
  
   
    
};

// ===============================================WHEN NEXT BUTTON IS CLICKED IN PIPE QUIZ==========================================

next2.onclick = () => {
    
    if( que_count < PIPES.length - 1 ){
       que_count++;
       que_numb++;
       showQuestion(que_count);
       queCounter(que_numb);
       countdown();
       

    }
    else{
       console.log("question completed");
       showResultbox();
     
    }
  
}

// ==========================================FUNCTION TO TAKE PIPE QUESTION FROM ARRAY==================================================

function showQuestion(index){
    const que_text = document.querySelector(".question");
    
    let que_tag = '<span>' + PIPES[index].numb +". " + PIPES[index].question +'</span>';
    let option_tag = '<span class="option">' + PIPES[index].options[0] + '</span>'
                     +'<span class="option">' + PIPES[index].options[1] +'</span>'
                     +'<span class="option">' + PIPES[index].options[2] + '</span>'
                     +'<span class="option">' + PIPES[index].options[3] + '</span>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option =  option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
     option[i].setAttribute("onclick", "optionSelected(this)");
    }
    initialTime = 30;
}




// ===============================================FUNCTION TO SELECT CORRECT OPTION===============================================

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = PIPES[que_count].answer;
    let allOptions = option_list.children.length;
    let scorebox= document.querySelector("#score");
    scorebox.innerText = "score";


    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log(" Correct Answer");
        score++;
        scorebox.innerHTML = "Score :" + score;
        TIMER();
    }else{
        answer.classList.add("incorrect");
        console.log("Wrong Answer");
        scorebox.innerHTML = "Score :" + score;

        //-------------------------------------------SHOWS CORRECT ANSWER WHEN INCORRECT ANSWER IS CLICKED-------------------------

        for(let i = 0 ; i < allOptions; i++){

            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct");
            }  
        }
    };
    attempt++;
  
       // ----------------------------------DISABLE OPTION WHEN ANSWERED------------------------------------------------------------ ------
    
    for(let i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    } 
    next2.style.display ="block";

}









