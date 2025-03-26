let questions = ["What planet is known as the 'Red Planet'?","Who painted the Mona Lisa?"];
let choicesArray = [["Earth", "Mars", "Jupiter","Saturn"],["Picasso","M.angelo","Van Gogh","L.DaVinci"]];
let correctAnswer = ["Mars","L.DaVinci"]
let currentQuestionIndex = 0;
let score = 0;



function displayQuestion(){
  if(currentQuestionIndex < questions.length){
    document.getElementById("question").innerHTML = questions[currentQuestionIndex];
    for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++){
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  }else{
    document.getElementById("result").innerHTML = score;
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
  }
}

displayQuestion();


 function checkAnswer(button){

  if(button.value === correctAnswer[currentQuestionIndex]){
    score++;
    document.getElementById("result").innerHTML = "Correct!"
  }else{
    document.getElementById("result").innerHTML = "Wrong!"
 }
  currentQuestionIndex++;
  displayQuestion()

 }
