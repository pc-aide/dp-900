// Function to attach event listeners to the solution button for question 3
function attachSolutionButtonListeners_question3(button) {
    button.addEventListener('click', function() {
      // Reset styles for the drop-down
      const dropdown = document.getElementById('question3_dropdown');
      dropdown.classList.remove('incorrect', 'highlight');
  
      // Correct answer
      const correctAnswer = 'An elastic pool';
  
      let allCorrect = true;
  
      // Check the selected answer
      const selectedAnswer = dropdown.value;
      if (selectedAnswer) {
        if (selectedAnswer === correctAnswer) {
          dropdown.classList.add('highlight'); // Highlight correct answer
        } else {
          dropdown.classList.add('incorrect'); // Mark incorrect answer
          allCorrect = false; // Answer is incorrect
        }
      } else {
        allCorrect = false; // No option selected
      }
  
      // Increment score if the answer is correct
      if (allCorrect) {
        window.score++; // Increment the score if the answer is correct
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
  