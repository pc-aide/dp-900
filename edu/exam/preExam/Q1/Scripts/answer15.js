// Function to attach event listeners to the solution button for question 15
function attachSolutionButtonListeners_question15(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'C';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="dmlQuestion"]:checked')?.value;

    // Show correct/incorrect styling
    const labelA = document.getElementById('optionA_15').parentElement;
    const labelB = document.getElementById('optionB_15').parentElement;
    const labelC = document.getElementById('optionC_15').parentElement;
    const labelD = document.getElementById('optionD_15').parentElement;

    if (selectedAnswer === correctAnswer) {
      labelC.classList.add('highlight');
      window.score++; // Increment the score if the answer is correct
    } else {
      if (selectedAnswer === 'A') labelA.classList.add('incorrect');
      if (selectedAnswer === 'B') labelB.classList.add('incorrect');
      if (selectedAnswer === 'D') labelD.classList.add('incorrect');
      labelC.classList.add('highlight');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question15');
    if (solutionInfoElement) {
      const correctAnswersElement = document.getElementById('correctAnswers_question15');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
      }

      // Show user's answer if incorrect
      const yourAnswerElement = document.getElementById('yourAnswer_question15');
      if (yourAnswerElement) {
        document.getElementById('yourAnswerOption_15').textContent = `Your answer: ${selectedAnswer}`;
        yourAnswerElement.style.display = 'block';
      }

      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question15(button);
  });
});
