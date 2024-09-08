// Function to attach event listeners to the solution button for question 7
function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function() {
    // Reset styles for checkboxes
    document.querySelectorAll('input[name="question7_checkbox"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answers
    const correctAnswers = ['A', 'C', 'E'];

    // Track if all correct answers are selected
    let allCorrect = true;

    // Check the selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="question7_checkbox"]:checked'))
      .map(input => input.value);

    // Check for correct answers
    correctAnswers.forEach(answer => {
      if (!selectedAnswers.includes(answer)) {
        allCorrect = false;
        document.querySelector(`input[name="question7_checkbox"][value="${answer}"]`).parentElement.classList.add('incorrect');
      } else {
        document.querySelector(`input[name="question7_checkbox"][value="${answer}"]`).parentElement.classList.add('highlight');
      }
    });

    // Check for incorrect selections
    selectedAnswers.forEach(answer => {
      if (!correctAnswers.includes(answer)) {
        document.querySelector(`input[name="question7_checkbox"][value="${answer}"]`).parentElement.classList.add('incorrect');
        allCorrect = false;
      }
    });

    // Increment score if all correct answers are selected
    if (allCorrect) {
      window.score++; // Increment the score if all correct answers are selected
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
