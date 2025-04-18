// Function to attach event listeners to the solution button for question 15
function attachSolutionButtonListeners_question15(button) {
    button.addEventListener('click', function() {
      // Reset styles for radio buttons
      document.querySelectorAll('input[name^="question15"]').forEach(input => {
        const label = input.parentElement;
        label.classList.remove('incorrect', 'highlight');
      });
  
      // Correct answers
      const correctAnswers = {
        question15_1_radio: 'Yes',
        question15_2_radio: 'No',
        question15_3_radio: 'No'
      };
  
      let allCorrect = true;
  
      // Check answers
      Object.keys(correctAnswers).forEach((questionKey) => {
        const selectedAnswer = document.querySelector(`input[name="${questionKey}"]:checked`);
        const correctAnswer = correctAnswers[questionKey];
  
        if (selectedAnswer) {
          if (selectedAnswer.value === correctAnswer) {
            selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
          } else {
            selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
            allCorrect = false; // At least one answer is incorrect
          }
        } else {
          allCorrect = false; // No answer selected for this question
        }
      });
  
      // Increment score if all answers are correct
      if (allCorrect) {
        window.score++; // Increment the score if all answers are correct
      }
  
      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question15');
      if (solutionInfoElement) {
        solutionInfoElement.style.display = 'block';
        const correctAnswersElement = document.getElementById('correctAnswers_question15');
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
      attachSolutionButtonListeners_question15(button);
    });
  });
  