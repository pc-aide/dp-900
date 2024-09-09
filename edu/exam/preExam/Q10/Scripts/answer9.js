function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('analyticsServiceSelect').value;

    // Reset styles for all options
    document.getElementById('analyticsServiceSelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'Azure Synapse Analytics';
    if (selectedValue === correctAnswer) {
      document.getElementById('analyticsServiceSelect').classList.add('highlight');
      document.getElementById('correctAnswers_question9').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('analyticsServiceSelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question9').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question9');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question9(button);
  });
});
