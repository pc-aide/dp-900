function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
      // Reset styles for dropdown
      const dropdown = document.getElementById('q9-dropdown');
      dropdown.classList.remove('incorrect', 'highlight');

      // Check the selected answer
      const selectedAnswer = dropdown.value;
      const correctAnswer = 'd'; // Value for "strong consistency guarantees are required"

      if (selectedAnswer === correctAnswer) {
          dropdown.classList.add('highlight');
          score++;
      } else {
          dropdown.classList.add('incorrect');
          const correctAnswerElement = document.getElementById('correctAnswer_question9');
          if (correctAnswerElement) {
              correctAnswerElement.style.display = 'block';
          }
      }

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question9');
      if (solutionInfoElement) {
          solutionInfoElement.style.display = 'block';
      }

      showFinalScore();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question9(button);
  });
});
