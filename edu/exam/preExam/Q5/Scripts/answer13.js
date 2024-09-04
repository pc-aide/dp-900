// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question13_radio"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question13_radio"]:checked');
    const correctAnswer = 'D';

    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
        window.score++; // Increment the score if the answer is correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question13');
    if (solutionInfoElement) {
      const allCorrect = selectedAnswer && selectedAnswer.value === correctAnswer;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question13');
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
    attachSolutionButtonListeners_question13(button);
  });
});
