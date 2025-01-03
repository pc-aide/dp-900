// Function to attach event listeners to the solution button for question 20
function attachSolutionButtonListeners_question20(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('[name="question20_radio"]').forEach(function(radio) {
      radio.parentNode.classList.remove('incorrect', 'highlight');
    });

    // Check the selected answer
    const selectedAnswer = document.querySelector('[name="question20_radio"]:checked');
    const correctAnswer = 'D';

    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
      selectedAnswer.parentNode.classList.add('highlight'); // Highlight correct answer
      window.score++; // Increment the score if the answer is correct
    } else {
      if (selectedAnswer) {
        selectedAnswer.parentNode.classList.add('incorrect'); // Mark incorrect answer
      }
      document.getElementById(`q20_option${correctAnswer}`).parentNode.classList.add('highlight'); // Highlight correct answer
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question20');
    if (solutionInfoElement) {
      const allCorrect = selectedAnswer && selectedAnswer.value === correctAnswer;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question20');
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
    attachSolutionButtonListeners_question20(button);
  });
});
