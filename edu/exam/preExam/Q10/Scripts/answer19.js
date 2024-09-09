function attachSolutionButtonListeners_question19(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('sqlInstanceSelect').value;

    // Reset styles for all options
    document.getElementById('sqlInstanceSelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'sqlServerOnAzureVMs';
    if (selectedValue === correctAnswer) {
      document.getElementById('sqlInstanceSelect').classList.add('highlight');
      document.getElementById('correctAnswers_question19').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('sqlInstanceSelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question19').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question19');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question19(button);
  });
});
