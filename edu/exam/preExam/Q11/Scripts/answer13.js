// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
    button.addEventListener('click', function() {
      // Get the selected answer
      const selectedAnswer = document.querySelector('input[name="question13_radio"]:checked')?.value;
      const correctAnswer = 'A';
  
      // Reset styles for radio buttons
      document.querySelectorAll('input[name="question13_radio"]').forEach(input => {
        const label = input.parentElement;
        label.classList.remove('incorrect', 'highlight');
      });
  
      // Mark the selected answer
      if (selectedAnswer === correctAnswer) {
        document.querySelector(`input[name="question13_radio"][value="${selectedAnswer}"]`).parentElement.classList.add('highlight');
      } else {
        document.querySelector(`input[name="question13_radio"][value="${selectedAnswer}"]`).parentElement.classList.add('incorrect');
      }
  
      // Increment the score only if the answer is correct
      if (selectedAnswer === correctAnswer) {
        window.score++; // Increment the score if the answer is correct
      }
  
      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question13');
      if (solutionInfoElement) {
        if (selectedAnswer === correctAnswer) {
          solutionInfoElement.classList.add('highlight');
          solutionInfoElement.classList.remove('incorrect');
        } else {
          solutionInfoElement.classList.add('incorrect');
          solutionInfoElement.classList.remove('highlight');
        }
        solutionInfoElement.style.display = 'block';
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
  