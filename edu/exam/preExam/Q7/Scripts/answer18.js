// Function to attach event listeners to the solution button for question 18
function attachSolutionButtonListeners_question18(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name="question18_radio"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answer
    const correctAnswer = 'B'; // Value for a trigger

    let allCorrect = true;

    // Check the selected answer
    const selectedAnswer = document.querySelector('input[name="question18_radio"]:checked');
    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value;
      if (selectedValue === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
      } else {
        selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
        allCorrect = false; // Answer is incorrect
      }

      // Increment score if the answer is correct
      if (allCorrect) {
        window.score++; // Increment the score if the answer is correct
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question18');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question18');
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
    attachSolutionButtonListeners_question18(button);
  });
});
