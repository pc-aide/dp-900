// Function to attach event listeners to solution button for question 10
function attachSolutionButtonListeners_question10(button) {
  button.addEventListener('click', function() {
    // Reset styles for the dropdown
    const dropdown = document.getElementById('dropdown_question10');
    dropdown.classList.remove('incorrect', 'highlight');

    // Define the correct answer
    const correctAnswer = 'Core (SQL)';
    const selectedValue = dropdown.value;

    // Check the selected answer
    if (selectedValue === correctAnswer) {
      dropdown.classList.add('highlight'); // Highlight correct answer
      window.score++; // Increment the score if the answer is correct
    } else {
      dropdown.classList.add('incorrect'); // Mark incorrect answer
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question10');
    if (solutionInfoElement) {
      const allCorrect = selectedValue === correctAnswer;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question10');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question10(button);
  });
});
