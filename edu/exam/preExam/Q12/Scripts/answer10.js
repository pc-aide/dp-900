// Function to attach event listeners to the solution button for question 10
function attachSolutionButtonListeners_question10(button) {
    button.addEventListener('click', function() {
      // Reset styles for the drop-down list
      const dropdown = document.getElementById('dropdown_question10');
      dropdown.classList.remove('incorrect', 'highlight');
  
      // Correct answer
      const correctAnswer = 'structured data';
  
      // Check the selected answer
      const selectedAnswer = dropdown.value;
  
      // Highlight correct or incorrect answer
      if (selectedAnswer === correctAnswer) {
        dropdown.classList.add('highlight');
        window.score++; // Increment score if the correct answer is selected
      } else {
        dropdown.classList.add('incorrect');
      }
  
      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question10');
      if (solutionInfoElement) {
        solutionInfoElement.style.display = 'block';
        const correctAnswersElement = document.getElementById('correctAnswers_question10');
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
      attachSolutionButtonListeners_question10(button);
    });
  });
