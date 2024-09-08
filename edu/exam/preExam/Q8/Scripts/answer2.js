// Function to attach event listeners to the solution button for question 2
function attachSolutionButtonListeners_question2(button) {
  button.addEventListener('click', function() {
    // Reset styles for checkboxes
    document.querySelectorAll('input[name="question2_checkbox"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answers
    const correctAnswers = ['A', 'B'];

    let allCorrect = true;

    // Check the selected answers
    const selectedAnswers = document.querySelectorAll('input[name="question2_checkbox"]:checked');
    selectedAnswers.forEach(selected => {
      if (correctAnswers.includes(selected.value)) {
        selected.parentElement.classList.add('highlight'); // Highlight correct answer
      } else {
        selected.parentElement.classList.add('incorrect'); // Mark incorrect answer
        allCorrect = false; // Answer is incorrect
      }
    });

    // Ensure all correct answers are selected
    if (selectedAnswers.length !== correctAnswers.length) {
      allCorrect = false; // Not all correct answers selected
    }

    // Increment score if all answers are correct
    if (allCorrect) {
      window.score++; // Increment the score if the answer is correct
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question2');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question2');
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
    attachSolutionButtonListeners_question2(button);
  });
});
