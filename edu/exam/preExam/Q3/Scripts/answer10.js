// Function to attach event listeners to solution button for question 10
function attachSolutionButtonListeners_question10(button) {
  button.addEventListener('click', function() {
      // Define the correct answer
      const correctAnswer = 'simple lookups';
      
      // Get the selected answer from the drop-down list
      const selectedAnswer = document.getElementById('dropdown_question10').value;
      
      // Show correct/incorrect styling based on the selected answer
      const solutionInfoElement = document.getElementById('solutionInfo_question10');
      if (solutionInfoElement) {
          if (selectedAnswer === correctAnswer) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answer is correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question10');
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
  document.querySelectorAll('.solutionButton[data-answer-name="question10"]').forEach(button => {
      attachSolutionButtonListeners_question10(button);
  });
});
