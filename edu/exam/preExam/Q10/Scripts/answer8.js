function attachSolutionButtonListeners_question8(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('dataTypeSelect').value;

    // Reset styles for the dropdown
    document.getElementById('dataTypeSelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'semi-structured data';
    if (selectedValue === correctAnswer) {
      document.getElementById('dataTypeSelect').classList.add('highlight');
      document.getElementById('correctAnswers_question8').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('dataTypeSelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question8').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question8');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question8(button);
  });
});
