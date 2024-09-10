// Function to attach event listeners to the solution button for question 3
function attachSolutionButtonListeners_question3(button) {
    button.addEventListener('click', function() {
      // Reset styles for radio buttons
      document.querySelectorAll('input[name="question3"]').forEach(input => {
        const label = input.parentElement;
        label.classList.remove('incorrect', 'highlight');
      });
  
      // Correct answer
      const correctAnswer = 'C';
  
      // Check the selected answer
      const selectedAnswer = document.querySelector('input[name="question3"]:checked')?.value;
  
      // Highlight correct or incorrect answer
      if (selectedAnswer === correctAnswer) {
        document.querySelector(`input[name="question3"][value="${correctAnswer}"]`).parentElement.classList.add('highlight');
        window.score++; // Increment score if the correct answer is selected
      } else {
        document.querySelector(`input[name="question3"][value="${selectedAnswer}"]`).parentElement.classList.add('incorrect');
      }
  
      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question3');
      if (solutionInfoElement) {
        solutionInfoElement.style.display = 'block';
        const correctAnswersElement = document.getElementById('correctAnswers_question3');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
  
      showFinalScore(); // Display final score
    });
  }
  
  // Initialize functionality on page load
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question3(button);
    });
  });
