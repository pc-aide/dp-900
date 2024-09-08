// Function to attach event listeners to the solution button for question 14
function attachSolutionButtonListeners_question14(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question14"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answer
    const correctAnswer = 'A';

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question14"]:checked')?.value;

    // Check for correct answer
    if (selectedAnswer === correctAnswer) {
      document.querySelector(`input[name="question14"][value="${correctAnswer}"]`).parentElement.classList.add('highlight');
      window.score++; // Increment the score if the correct answer is selected
    } else {
      document.querySelector(`input[name="question14"][value="${correctAnswer}"]`).parentElement.classList.add('incorrect');
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
