// Function to attach event listeners to the solution button for question 3
function attachSolutionButtonListeners_question3(button) {
  button.addEventListener('click', function() {
    // Reset styles for drop-down list
    const dropdown = document.getElementById('question3_dropdown');
    dropdown.classList.remove('incorrect', 'highlight');

    // Check the selected answer
    const selectedAnswer = dropdown.value;
    const correctAnswer = 'control flow';

    if (selectedAnswer === correctAnswer) {
      dropdown.classList.add('highlight'); // Highlight correct answer
      window.score++; // Increment the score if the answer is correct
    } else {
      dropdown.classList.add('incorrect'); // Mark incorrect answer
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
