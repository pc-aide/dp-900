// Function to attach event listeners to solution button for question 8
function attachSolutionButtonListeners_question8(button) {
  button.addEventListener('click', function() {
    // Define the correct answer for the question
    const correctAnswer = 'A. sqlcmd';
    
    // Get the selected answer from radio buttons
    const selectedAnswer = document.querySelector('input[name="question8"]:checked')?.value;
    
    // Get radio button elements
    const radios = document.getElementsByName('question8');
    
    // Show correct/incorrect styling
    radios.forEach(radio => {
      if (radio.value === correctAnswer) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswer) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question8');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question8');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }
    
    // Show explanation and references
    const explanationElement = document.getElementById('solutionInfo_question8');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('solutionInfo_question8');
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
  document.querySelectorAll('.solutionButton[data-answer-name="question8"]').forEach(button => {
    attachSolutionButtonListeners_question8(button);
  });
});
