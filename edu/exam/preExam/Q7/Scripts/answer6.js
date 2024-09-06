// Function to attach event listeners to the solution button for question 6
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name^="q6_"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answers
    const correctAnswers = {
      q6_statement1: 'No',
      q6_statement2: 'Yes',
      q6_statement3: 'No'
    };

    let allCorrect = true;

    // Check the selected answers
    Object.keys(correctAnswers).forEach(statement => {
      const selectedAnswer = document.querySelector(`input[name="${statement}"]:checked`);
      if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswers[statement]) {
          selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
        } else {
          selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
          allCorrect = false; // Answer is incorrect
        }
      } else {
        allCorrect = false; // No answer selected
      }
    });

    // Increment score if all answers are correct
    if (allCorrect) {
      window.score++; // Increment the score if all answers are correct
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question6');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question6');
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
    attachSolutionButtonListeners_question6(button);
  });
});
