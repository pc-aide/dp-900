function attachSolutionButtonListeners_question8(button) {
  button.addEventListener('click', function() {
      // Reset styles for radio buttons
      document.querySelectorAll('input[name="q8"]').forEach(radio => {
          radio.parentElement.classList.remove('incorrect', 'highlight');
      });

      // Check the selected answer
      const selectedAnswer = document.querySelector('input[name="q8"]:checked');
      const correctAnswer = 'A';

      if (selectedAnswer && selectedAnswer.value === correctAnswer) {
          selectedAnswer.parentElement.classList.add('highlight');
          score++;
      } else {
          if (selectedAnswer) {
              selectedAnswer.parentElement.classList.add('incorrect');
          }
          const correctAnswerElement = document.getElementById('correctAnswer_question8');
          if (correctAnswerElement) {
              correctAnswerElement.style.display = 'block';
          }
      }

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question8');
      if (solutionInfoElement) {
          solutionInfoElement.style.display = 'block';
      }

      showFinalScore();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question8(button);
  });
});
