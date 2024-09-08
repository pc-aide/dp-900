// Function to attach event listeners to the solution button for question 7
function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question7_radio"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answer
    const correctAnswer = 'C';

    // Check selected answer
    const selectedAnswer = document.querySelector('input[name="question7_radio"]:checked');
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
        window.score++; // Increment score
      } else {
        selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question7');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswerElement = document.getElementById('correctAnswer_question7');
      if (correctAnswerElement) {
        correctAnswerElement.style.display = 'block';
      }
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question7(button);
  });
});
