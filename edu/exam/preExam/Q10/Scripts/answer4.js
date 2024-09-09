function attachSolutionButtonListeners_question4(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedValue = document.getElementById('blobStorageSelect').value;

    // Reset styles for all options
    document.getElementById('blobStorageSelect').classList.remove('incorrect', 'highlight');

    // Check if the selected value is correct
    const correctAnswer = 'randomReadWrite';
    if (selectedValue === correctAnswer) {
      document.getElementById('blobStorageSelect').classList.add('highlight');
      document.getElementById('correctAnswers_question4').style.display = 'block';
      score++; // Increment score if the answer is correct
    } else {
      document.getElementById('blobStorageSelect').classList.add('incorrect');
      document.getElementById('correctAnswers_question4').style.display = 'block';
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question4');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question4(button);
  });
});
