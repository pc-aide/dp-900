function attachSolutionButtonListeners_question19(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    const radios = document.querySelectorAll('input[name="question19"]');
    radios.forEach(radio => radio.classList.remove('incorrect', 'highlight'));

    // Check the selected answer
    let selectedAnswer;
    radios.forEach(radio => {
      if (radio.checked) {
        selectedAnswer = radio.value;
      }
    });
    const correctAnswer = 'B. tabular';

    if (selectedAnswer === correctAnswer) {
      radios.forEach(radio => {
        if (radio.value === correctAnswer) {
          radio.classList.add('highlight'); // Highlight correct answer
        }
      });
      window.score++; // Increment the score if the answer is correct
    } else {
      radios.forEach(radio => {
        if (radio.checked) {
          radio.classList.add('incorrect'); // Mark incorrect answer
        }
      });
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question19');
    if (solutionInfoElement) {
      const allCorrect = selectedAnswer === correctAnswer;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question19');
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
    attachSolutionButtonListeners_question19(button);
  });
});
