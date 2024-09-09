function attachSolutionButtonListeners_question18(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('sqlServerTableSelect').value;

    // Reset styles for all options
    document.getElementById('sqlServerTableSelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'relationalData';
    if (selectedValue === correctAnswer) {
      document.getElementById('sqlServerTableSelect').classList.add('highlight');
      document.getElementById('correctAnswers_question18').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('sqlServerTableSelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question18').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question18');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question18(button);
  });
});
