// Function to attach event listeners to the solution button for question 20
function attachSolutionButtonListeners_question20(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      'q20_1': 'No',
      'q20_2': 'No',
      'q20_3': 'Yes'
    };

    // Reset styles for radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.parentNode.classList.remove('incorrect', 'highlight');
    });

    // Check answers
    let allCorrect = true;
    Object.keys(correctAnswers).forEach(id => {
      const selectedOption = document.querySelector(`input[name="${id}"]:checked`);
      if (selectedOption && selectedOption.value === correctAnswers[id]) {
        selectedOption.parentNode.classList.add('highlight');
      } else {
        allCorrect = false;
        if (selectedOption) {
          selectedOption.parentNode.classList.add('incorrect');
        }
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question20');
    if (solutionInfoElement) {
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question20');
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
    attachSolutionButtonListeners_question20(button);
  });
});
