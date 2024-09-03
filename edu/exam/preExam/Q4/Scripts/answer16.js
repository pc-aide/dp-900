// Function to attach event listeners to solution button for question 16
function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
    // Define the correct answer for the question
    const correctAnswer = 'C';
    
    // Get selected answer from radio buttons
    const selectedAnswer = document.querySelector('input[name="question16"]:checked')?.value;
    
    // Get radio button elements for the question
    const questionRadios = document.getElementsByName('question16');
    
    // Show correct/incorrect styling
    questionRadios.forEach(radio => {
      if (radio.value === correctAnswer) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswer) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    // Determine if the answer is correct
    const isAnswerCorrect = selectedAnswer === correctAnswer;
    
    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question16');
    if (solutionInfoElement) {
      if (isAnswerCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question16');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }
    
    // Show explanation and references
    const explanationElement = document.getElementById('solutionInfo_question16');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('solutionInfo_question16');
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
  document.querySelectorAll('.solutionButton[data-answer-name="question16"]').forEach(button => {
    attachSolutionButtonListeners_question16(button);
  });
});
