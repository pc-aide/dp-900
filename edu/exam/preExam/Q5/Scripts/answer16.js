function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
      // Get the selected radio button value
      const selectedAnswer = document.querySelector('input[name="question16"]:checked');

      // Reset styles for radio buttons
      document.querySelectorAll('input[name="question16"]').forEach(radio => {
          radio.parentElement.classList.remove('correct', 'incorrect');
      });

      // Check the answer
      const correctAnswer = "WHERE";
      if (selectedAnswer && selectedAnswer.value === correctAnswer) {
          selectedAnswer.parentElement.classList.add('correct');
          score++;
      } else if (selectedAnswer) {
          selectedAnswer.parentElement.classList.add('incorrect');
      }

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question16');
      if (solutionInfoElement) {
          if (selectedAnswer && selectedAnswer.value === correctAnswer) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
          }
          solutionInfoElement.style.display = 'block';
      }

      showFinalScore();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question16(button);
  });
});
