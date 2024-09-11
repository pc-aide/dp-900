// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
    button.addEventListener('click', function() {
      // Reset styles for the drop-down list
      document.querySelector('select[name="question13"]').classList.remove('incorrect', 'highlight');
  
      // Correct answer
      const correctAnswer = 'a_powerful_data_store';
  
      // Check the selected answer
      const selectedAnswer = document.querySelector('select[name="question13"]').value;
  
      // Highlight correct or incorrect answer
      if (selectedAnswer === correctAnswer) {
        document.querySelector('select[name="question13"]').classList.add('highlight');
        window.score++; // Increment score if the correct answer is selected
      } else {
        document.querySelector('select[name="question13"]').classList.add('incorrect');
      }
  
      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question13');
      if (solutionInfoElement) {
        solutionInfoElement.style.display = 'block';
        const correctAnswersElement = document.getElementById('correctAnswers_question13');
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
      attachSolutionButtonListeners_question13(button);
    });
  });
