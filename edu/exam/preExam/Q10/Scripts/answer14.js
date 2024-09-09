// Function to attach event listeners to the solution button for question 14
function attachSolutionButtonListeners_question14(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question14_radio"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answer
    const correctAnswer = 'B';

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question14_radio"]:checked');
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
        window.score++; // Increment the score if the answer is correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question14');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question14');
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
    attachSolutionButtonListeners_question14(button);
  });
});
