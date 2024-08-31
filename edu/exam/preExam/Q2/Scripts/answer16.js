// Function to attach event listeners to the solution button for question 16
function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
    // Get the selected answer from the drop-down list
    const selectedAnswer = document.getElementById('relationalDataStorage').value;
    const correctAnswer = 'tabularForm';

    // Show the user's selected answer
    const userAnswerElement = document.getElementById('yourAnswerRelationalDataStorage');
    if (userAnswerElement) {
      userAnswerElement.textContent = document.querySelector(`#relationalDataStorage option[value="${selectedAnswer}"]`).innerText;
      document.getElementById('yourAnswer_question16').style.display = 'block';
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question16');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question16');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    if (button.getAttribute('data-answer-name') === 'question16') {
      attachSolutionButtonListeners_question16(button);
    }
  });
});
