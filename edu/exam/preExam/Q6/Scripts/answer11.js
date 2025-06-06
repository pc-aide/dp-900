// Function to attach event listeners to the solution button for question 11
function attachSolutionButtonListeners_question11(button) {
  button.addEventListener('click', function() {
    // Reset styles for drop-down list
    const dropdown = document.getElementById('question11_dropdown');
    dropdown.classList.remove('incorrect', 'highlight');

    // Check the selected answer
    const selectedAnswer = dropdown.value;
    const correctAnswer = 'A';

    if (selectedAnswer) {
      if (selectedAnswer === correctAnswer) {
        dropdown.classList.add('highlight'); // Highlight correct answer
        window.score++; // Increment the score if the answer is correct
      } else {
        dropdown.classList.add('incorrect'); // Mark incorrect answer
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question11');
    if (solutionInfoElement) {
      const allCorrect = selectedAnswer === correctAnswer;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question11');
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
    attachSolutionButtonListeners_question11(button);
  });
});
