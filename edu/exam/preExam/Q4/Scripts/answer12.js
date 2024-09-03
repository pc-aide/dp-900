// Function to attach event listeners to solution button for question 12
function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
    // Define correct answers for each statement
    const correctAnswers = {
      'question12_1': 'A table',
      'question12_2': 'A column'
    };
    
    // Get selected answers from drop-down lists
    const selectedStatement1 = document.querySelector('#question12_1')?.value;
    const selectedStatement2 = document.querySelector('#question12_2')?.value;
    
    // Check if answers are correct and show feedback
    const allAnswersCorrect = (
      selectedStatement1 === correctAnswers['question12_1'] &&
      selectedStatement2 === correctAnswers['question12_2']
    );
    
    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question12');
    if (solutionInfoElement) {
      if (allAnswersCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question12');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }
    
    // Show explanation and references
    const explanationElement = document.getElementById('solutionInfo_question12');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('solutionInfo_question12');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }
    
    // Display final score using the function from constants.js
    if (typeof showFinalScore === 'function') {
      showFinalScore();
    }
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton[data-answer-name="question12"]').forEach(button => {
    attachSolutionButtonListeners_question12(button);
  });
});
