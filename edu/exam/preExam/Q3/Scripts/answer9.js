// Function to attach event listeners to solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
      // Define the correct answer
      const correctAnswer = 'Graph databases';
      
      // Get the selected answer from the drop-down list
      const selectedAnswer = document.getElementById('dropdown_question9').value;
      
      // Show correct/incorrect styling based on the selected answer
      const solutionInfoElement = document.getElementById('solutionInfo_question9');
      if (solutionInfoElement) {
          if (selectedAnswer === correctAnswer) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answer is correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question9');
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
  document.querySelectorAll('.solutionButton[data-answer-name="question9"]').forEach(button => {
      attachSolutionButtonListeners_question9(button);
  });
});
