function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
    // Get the selected answer from the dropdown
    const selectedAnswer = document.getElementById('answer6').value;
    
    // Reset styles for the dropdown
    const dropdown = document.getElementById('answer6');
    dropdown.classList.remove('incorrect', 'highlight');

    // Check if the selected answer is correct
    const correctAnswer = 'A';
    if (selectedAnswer === correctAnswer) {
      dropdown.classList.add('highlight');
      document.getElementById('correctAnswers_question6').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      if (selectedAnswer) {
        dropdown.classList.add('incorrect');
      }
      document.getElementById('correctAnswers_question6').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question6');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question6(button);
  });
});
