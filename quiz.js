const mytest = document.getElementById("submit-answer"); //variables

mytest.addEventListener("click",checkAnswer); //event listeners

function checkAnswer() {  //functions
        let correctAnswer = "4";
    const myFeedback = document.getElementById("feedback");
    let checkedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = checkedRadio.value;
    if (userAnswer === correctAnswer) {
        myFeedback.innerHTML = "Correct! Well done.";
    } else {
        myFeedback.textContent = "That's incorrect. Try again!";
    }
}