// Function to attach event listeners to solution button for question 5
function attachSolutionButtonListeners_question5(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'cognitive';

    // Get the selected answer from the drop-down list
    const selectedAnswer = document.querySelector('select[name="question5_transcribing_audio"]').value;

    // Get elements for solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question5');
    const correctAnswersElement = document.getElementById('correctAnswers_question5');

    // Display correct/incorrect styling
    if (selectedAnswer === correctAnswer) {
      // Correct answer - sections in yellow
      solutionInfoElement.classList.add('highlight');
      solutionInfoElement.classList.remove('incorrect');
      window.score++; // Increment the score if the answer is correct
    } else {
      // Incorrect answer - sections in red
      solutionInfoElement.classList.add('incorrect');
      solutionInfoElement.classList.remove('highlight');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
      }
    }

    // Display solution information
    solutionInfoElement.style.display = 'block';

    // Call the function to display the final score from constants.js
    showFinalScore();
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question5(button);
  });
});
