// Function to attach event listeners to solution button for question 1
function attachSolutionButtonListeners_question1(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question1_radio"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question1_radio"]:checked');
    const correctAnswer = 'A';

    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
        window.score++; // Increment the score if the answer is correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question1');
    if (solutionInfoElement) {
      const allCorrect = selectedAnswer && selectedAnswer.value === correctAnswer;
      if (allCorrect) {
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
