// Function to attach event listeners to the solution button for question 12
function attachSolutionButtonListeners_question12(button) {
    button.addEventListener('click', function() {
      // Get the selected answer
      const selectedAnswer = document.querySelector('select[name="question12_dropdown"]').value;
      const correctAnswer = 'A data analyst';
  
      // Reset styles for the dropdown
      document.querySelector('select[name="question12_dropdown"]').classList.remove('incorrect', 'highlight');
  
      // Mark the selected answer
      if (selectedAnswer === correctAnswer) {
        document.querySelector('select[name="question12_dropdown"]').classList.add('highlight');
      } else {
        document.querySelector('select[name="question12_dropdown"]').classList.add('incorrect');
      }
  
      // Increment the score only if the answer is correct
      if (selectedAnswer === correctAnswer) {
        window.score++; // Increment the score if the answer is correct
      }
  
      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question12');
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
      attachSolutionButtonListeners_question12(button);
    });
  });
  