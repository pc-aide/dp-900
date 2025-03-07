// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name^="question13"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answers
    const correctAnswers = {
      question13_1_radio: 'No',
      question13_2_radio: 'Yes',
      question13_3_radio: 'Yes'
    };

    let allCorrect = true;

    // Check answers
    Object.keys(correctAnswers).forEach((questionKey) => {
      const selectedAnswer = document.querySelector(`input[name="${questionKey}"]:checked`);
      const correctAnswer = correctAnswers[questionKey];

      if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
          selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
        } else {
          selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
          allCorrect = false; // At least one answer is incorrect
        }
      } else {
        allCorrect = false; // No answer selected for this question
      }
    });

    // Increment score if all answers are correct
    if (allCorrect) {
      window.score++; // Increment the score if all answers are correct
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
