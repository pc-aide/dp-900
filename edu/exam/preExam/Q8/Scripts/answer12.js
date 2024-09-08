// Function to attach event listeners to the solution button for question 12
function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question12_radio"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answer
    const correctAnswer = 'C';

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question12_radio"]:checked');
    
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight');
        window.score++; // Increment the score if the correct answer is selected
      } else {
        selectedAnswer.parentElement.classList.add('incorrect');
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question12');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question12');
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
    attachSolutionButtonListeners_question12(button);
  });
});
