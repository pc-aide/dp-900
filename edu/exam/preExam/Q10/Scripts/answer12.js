function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('nonRelationalDbSelect').value;

    // Reset styles for all options
    document.getElementById('nonRelationalDbSelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'noFixedSchema';
    if (selectedValue === correctAnswer) {
      document.getElementById('nonRelationalDbSelect').classList.add('highlight');
      document.getElementById('correctAnswers_question12').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('nonRelationalDbSelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question12').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question12');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question12(button);
  });
});
