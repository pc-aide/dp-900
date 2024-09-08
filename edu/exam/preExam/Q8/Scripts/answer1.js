// Function to attach event listeners to the solution button for question 1
function attachSolutionButtonListeners_question1(button) {
  button.addEventListener('click', function() {
    // Reset styles for checkboxes
    document.querySelectorAll('input[name="question1_checkbox"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Check the selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="question1_checkbox"]:checked')).map(input => input.value);
    const correctAnswers = ['B', 'D', 'F'];

    const allCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer));
    const anyIncorrect = selectedAnswers.some(answer => !correctAnswers.includes(answer));

    // Mark correct answers
    correctAnswers.forEach(answer => {
      if (selectedAnswers.includes(answer)) {
        document.querySelector(`input[name="question1_checkbox"][value="${answer}"]`).parentElement.classList.add('highlight');
      }
    });

    // Mark incorrect answers
    if (anyIncorrect) {
      selectedAnswers.forEach(answer => {
        if (!correctAnswers.includes(answer)) {
          document.querySelector(`input[name="question1_checkbox"][value="${answer}"]`).parentElement.classList.add('incorrect');
        }
      });
    }

    // Increment the score only if there are selected answers and all selected answers are correct
    if (selectedAnswers.length > 0 && allCorrect && !anyIncorrect) {
      window.score++; // Increment the score if all selected answers are correct
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question1');
    if (solutionInfoElement) {
      if (allCorrect && !anyIncorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question1');
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
    attachSolutionButtonListeners_question1(button);
  });
});
