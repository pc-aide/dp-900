// Function to attach event listeners to the solution button for question 14
function attachSolutionButtonListeners_question14(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question14"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question14"]:checked');
    const correctAnswer = 'B';

    let allCorrect = false;
    let anyIncorrect = false;

    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        document.querySelector(`input[name="question14"][value="${correctAnswer}"]`).parentElement.classList.add('highlight');
        allCorrect = true;
      } else {
        document.querySelector(`input[name="question14"][value="${selectedAnswer.value}"]`).parentElement.classList.add('incorrect');
        anyIncorrect = true;
      }
    } else {
      anyIncorrect = true;
    }

    // Increment the score only if the selected answer is correct
    if (allCorrect && !anyIncorrect) {
      window.score++; // Increment the score if the selected answer is correct
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question14');
    if (solutionInfoElement) {
      if (allCorrect && !anyIncorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question14');
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
    attachSolutionButtonListeners_question14(button);
  });
});
