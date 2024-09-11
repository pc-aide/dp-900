// Function to attach event listeners to the solution button for question 14
function attachSolutionButtonListeners_question14(button) {
    button.addEventListener('click', function() {
      // Reset styles for the drop-down list
      document.querySelector('select[name="question14"]').classList.remove('incorrect', 'highlight');
  
      // Correct answer
      const correctAnswer = 'dimensions';
  
      // Check the selected answer
      const selectedAnswer = document.querySelector('select[name="question14"]').value;
  
      // Highlight correct or incorrect answer
      if (selectedAnswer === correctAnswer) {
        document.querySelector('select[name="question14"]').classList.add('highlight');
        window.score++; // Increment score if the correct answer is selected
      } else {
        document.querySelector('select[name="question14"]').classList.add('incorrect');
      }
  
      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question14');
      if (solutionInfoElement) {
        solutionInfoElement.style.display = 'block';
        const correctAnswersElement = document.getElementById('correctAnswers_question14');
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
      attachSolutionButtonListeners_question14(button);
    });
  });
