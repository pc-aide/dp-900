// Function to attach event listeners to solution button for question 8
function attachSolutionButtonListeners_question8(button) {
  button.addEventListener('click', function() {
      // Define the correct answers
      const correctAnswers = ['Yes', 'No', 'Yes'];
      
      // Get the selected answers from the radio buttons
      const selectedAnswers = [
          document.querySelector('input[name="statement1"]:checked')?.value,
          document.querySelector('input[name="statement2"]:checked')?.value,
          document.querySelector('input[name="statement3"]:checked')?.value
      ];
      
      // Show correct/incorrect styling based on the selected answers
      const solutionInfoElement = document.getElementById('solutionInfo_question8');
      if (solutionInfoElement) {
          let allCorrect = true;
          for (let i = 0; i < correctAnswers.length; i++) {
              if (selectedAnswers[i] !== correctAnswers[i]) {
                  allCorrect = false;
                  break;
              }
          }

          if (allCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if all answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question8');
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
  document.querySelectorAll('.solutionButton[data-answer-name="question8"]').forEach(button => {
      attachSolutionButtonListeners_question8(button);
  });
});
