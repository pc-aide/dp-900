// Function to attach event listeners to solution button for question 16
function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
      // Define the correct answer
      const correctAnswer = 'graph';
      
      // Get the selected answer from the radio buttons
      const selectedAnswer = document.querySelector('input[name="question16"]:checked');
      
      // Show correct/incorrect styling based on the selected answer
      const solutionInfoElement = document.getElementById('solutionInfo_question16');
      if (solutionInfoElement) {
          if (selectedAnswer && selectedAnswer.value === correctAnswer) {
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

      // Display final score using the function from constants.js
      if (typeof showFinalScore === 'function') {
          showFinalScore();
      }
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton[data-answer-name="question16"]').forEach(button => {
      attachSolutionButtonListeners_question16(button);
  });
});
