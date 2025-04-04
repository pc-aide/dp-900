// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question13_statement1"], input[name="question13_statement2"], input[name="question13_statement3"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answers
    const correctAnswers = {
      statement1: 'No',
      statement2: 'No',
      statement3: 'Yes'
    };

    // Track if all correct answers are selected
    let allCorrect = true;

    // Check the selected answers
    const selectedAnswers = {
      statement1: document.querySelector('input[name="question13_statement1"]:checked')?.value,
      statement2: document.querySelector('input[name="question13_statement2"]:checked')?.value,
      statement3: document.querySelector('input[name="question13_statement3"]:checked')?.value
    };

    // Check for correct answers
    Object.keys(correctAnswers).forEach(statement => {
      if (selectedAnswers[statement] === correctAnswers[statement]) {
        document.querySelector(`input[name="question13_statement${statement.slice(-1)}"][value="${correctAnswers[statement]}"]`).parentElement.classList.add('highlight');
      } else {
        allCorrect = false;
        document.querySelector(`input[name="question13_statement${statement.slice(-1)}"][value="${correctAnswers[statement]}"]`).parentElement.classList.add('incorrect');
      }
    });

    // Increment score if all correct answers are selected
    if (allCorrect) {
      window.score++; // Increment the score if all correct answers are selected
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question13');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question13');
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
    attachSolutionButtonListeners_question13(button);
  });
});
