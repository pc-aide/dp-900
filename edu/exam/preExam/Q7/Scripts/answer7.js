// Function to attach event listeners to the solution button for question 7
function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="q7"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answer
    const correctAnswer = 'C';

    let allCorrect = true;

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="q7"]:checked');
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
      } else {
        selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
        allCorrect = false; // Answer is incorrect
      }
    } else {
      allCorrect = false; // No answer selected
    }

    // Increment score if the answer is correct
    if (allCorrect) {
      window.score++; // Increment the score if the answer is correct
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question7');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question7');
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
    attachSolutionButtonListeners_question7(button);
  });
});
