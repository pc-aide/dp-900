function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="dataWarehouseFunction"]:checked');
    
    // Reset styles for all options
    document.querySelectorAll('input[name="dataWarehouseFunction"]').forEach(input => {
      input.parentElement.classList.remove('incorrect', 'highlight');
    });

    // Check if the selected answer is correct
    const correctAnswer = 'B';
    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
      selectedAnswer.parentElement.classList.add('highlight');
      document.getElementById('correctAnswers_question17').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.querySelectorAll('input[name="dataWarehouseFunction"]').forEach(input => {
        if (input.value === correctAnswer) {
          input.parentElement.classList.add('highlight');
        } else if (input.checked) {
          input.parentElement.classList.add('incorrect');
        }
      });
      document.getElementById('correctAnswers_question17').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question17(button);
  });
});
