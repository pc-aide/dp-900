// Function to attach event listeners to solution button for question 17
function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Define the correct answers for the question
    const correctAnswers = ['A', 'D'];
    
    // Get selected answers from checkboxes
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="question17"]:checked')).map(input => input.value);
    
    // Get checkbox elements for the question
    const questionCheckboxes = document.getElementsByName('question17');
    
    // Show correct/incorrect styling
    questionCheckboxes.forEach(checkbox => {
      if (correctAnswers.includes(checkbox.value)) {
        checkbox.parentElement.classList.add('highlight');
      } else if (checkbox.checked && !correctAnswers.includes(checkbox.value)) {
        checkbox.parentElement.classList.add('incorrect');
      }
    });
    
    // Determine if the answer is correct
    const allCorrectSelected = correctAnswers.every(answer => selectedAnswers.includes(answer));
    const noIncorrectSelected = selectedAnswers.every(answer => correctAnswers.includes(answer));
    const isAnswerCorrect = allCorrectSelected && noIncorrectSelected;
    
    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      if (isAnswerCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question17');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }
    
    // Show explanation and references
    const explanationElement = document.getElementById('solutionInfo_question17');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('solutionInfo_question17');
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
  document.querySelectorAll('.solutionButton[data-answer-name="question17"]').forEach(button => {
    attachSolutionButtonListeners_question17(button);
  });
});
