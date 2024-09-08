// Function to attach event listeners to the solution button for question 17
function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Reset styles for drop-down list
    const dropdown = document.getElementById('question17_dropdown');
    dropdown.classList.remove('incorrect', 'highlight');

    // Check the selected answer
    const selectedAnswer = dropdown.value;
    const correctAnswer = 'from multiple sources is combined in a single location';

    if (selectedAnswer === correctAnswer) {
      dropdown.classList.add('highlight'); // Highlight correct answer
      window.score++; // Increment the score if the answer is correct
    } else {
      dropdown.classList.add('incorrect'); // Mark incorrect answer
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question17(button);
  });
});
