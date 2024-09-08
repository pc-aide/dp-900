// Function to attach event listeners to the solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question9"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question9"]:checked')?.value;
    const correctAnswer = 'B';

    if (selectedAnswer === correctAnswer) {
      document.querySelector(`input[name="question9"][value="${correctAnswer}"]`).parentElement.classList.add('highlight');
      window.score++; // Increment the score if the answer is correct
    } else {
      document.querySelector(`input[name="question9"][value="${correctAnswer}"]`).parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question9');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question9');
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
    attachSolutionButtonListeners_question9(button);
  });
});
