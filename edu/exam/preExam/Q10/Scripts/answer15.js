// Function to attach event listeners to the solution button for question 15
function attachSolutionButtonListeners_question15(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('roleSelect').value;

    // Reset styles for the select element
    document.getElementById('roleSelect').classList.remove('incorrect', 'highlight');

    // Correct answer
    const correctAnswer = 'databaseAdministrator';
    if (selectedValue === correctAnswer) {
      document.getElementById('roleSelect').classList.add('highlight'); // Highlight correct answer
      window.score++; // Increment the score if the answer is correct
    } else {
      document.getElementById('roleSelect').classList.add('incorrect'); // Mark incorrect answer
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
