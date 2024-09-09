function attachSolutionButtonListeners_question10(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('analyticalModelSelect').value;

    // Reset styles for all options
    document.getElementById('analyticalModelSelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'anAggregatedMeasure';
    if (selectedValue === correctAnswer) {
      document.getElementById('analyticalModelSelect').classList.add('highlight');
      document.getElementById('correctAnswers_question10').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('analyticalModelSelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question10').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question10');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question10(button);
  });
});
