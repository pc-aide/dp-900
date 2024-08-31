// Function to attach event listeners to solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Reset styles for the radio buttons
    const radios = document.querySelectorAll('input[name="question9"]');
    radios.forEach(radio => radio.parentElement.classList.remove('incorrect', 'highlight'));

    // Define the correct answer
    const correctAnswer = 'az storage account create';
    const selectedAnswer = document.querySelector('input[name="question9"]:checked');

    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value;

      // Check the selected answer
      if (selectedValue === correctAnswer) {
        selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
        window.score++; // Increment the score if the answer is correct
      } else {
        selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
      }

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question9');
      if (solutionInfoElement) {
        const allCorrect = selectedValue === correctAnswer;
        if (allCorrect) {
          solutionInfoElement.classList.add('highlight');
          solutionInfoElement.classList.remove('incorrect');
        } else {
          solutionInfoElement.classList.add('incorrect');
          solutionInfoElement.classList.remove('highlight');
          const correctAnswersElement = document.getElementById('correctAnswers_question9');
          if (correctAnswersElement) {
            correctAnswersElement.style.display = 'block';
          }
        }
        solutionInfoElement.style.display = 'block';
      }

      showFinalScore(); // Display final score
    }
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question9(button);
  });
});
