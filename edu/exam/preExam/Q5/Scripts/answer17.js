function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Reset styles for drop-down list
    const dropdown = document.getElementById('question17_dropdown');
    dropdown.classList.remove('incorrect', 'highlight');

    // Check the selected answer
    const selectedAnswer = dropdown.value;
    const correctAnswer = 'Azure Synapse Analytics';

    if (selectedAnswer === correctAnswer) {
      dropdown.classList.add('highlight'); // Highlight correct answer
      window.score++; // Increment the score if the answer is correct
    } else {
      dropdown.classList.add('incorrect'); // Mark incorrect answer
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      const allCorrect = selectedAnswer === correctAnswer;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question17');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question17(button);
  });
});
