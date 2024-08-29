// Function to attach event listeners to solution button for question 4
function attachSolutionButtonListeners_question4(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'latency in delivering data processing results is acceptable';

    // Get the selected answer from the dropdown list
    const selectedAnswer = document.querySelector('select[name="question4_batch_processing"]').value;

    // Get elements for solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question4');
    const correctAnswersElement = document.getElementById('correctAnswers_question4');

    // Check if the selected answer is correct and apply styles
    if (selectedAnswer === correctAnswer) {
      // Correct answer - style sections in yellow
      solutionInfoElement.classList.add('highlight');
      solutionInfoElement.classList.remove('incorrect');
      window.score++; // Increment the score if the answer is correct
    } else {
      // Incorrect answer - style sections in red
      solutionInfoElement.classList.add('incorrect');
      solutionInfoElement.classList.remove('highlight');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
        correctAnswersElement.style.backgroundColor = 'yellow'; // Yellow background
        correctAnswersElement.style.color = 'red'; // Red text
      }
    }

    // Show solution information
    solutionInfoElement.style.display = 'block';

    // Call the function to display the final score from constants.js
    if (typeof showFinalScore === 'function') {
      showFinalScore();
    }
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton[data-answer-name="question4"]').forEach(button => {
    attachSolutionButtonListeners_question4(button);
  });
});
