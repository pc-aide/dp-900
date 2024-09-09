function attachSolutionButtonListeners_question20(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('powerBISelect').value;

    // Reset styles for all options
    document.getElementById('powerBISelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'report';
    if (selectedValue === correctAnswer) {
      document.getElementById('powerBISelect').classList.add('highlight');
      document.getElementById('correctAnswers_question20').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('powerBISelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question20').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question20');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question20(button);
  });
});
