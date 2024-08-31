// Function to attach event listeners to solution button for question 11
function attachSolutionButtonListeners_question11(button) {
  button.addEventListener('click', function() {
    // Reset styles for all radio buttons in question 11
    const radios = document.querySelectorAll('#question11 input[type="radio"]');
    radios.forEach(radio => radio.parentNode.classList.remove('incorrect', 'highlight'));

    // Define the correct answer
    const correctAnswer = 'B';
    let selectedValue = '';
    radios.forEach(radio => {
      if (radio.checked) {
        selectedValue = radio.value;
      }
    });

    // Check the selected answer
    if (selectedValue === correctAnswer) {
      document.getElementById(`question11_option${correctAnswer}`).parentNode.classList.add('highlight'); // Highlight correct answer
      window.score++; // Increment the score if the answer is correct
    } else {
      radios.forEach(radio => {
        if (radio.checked) {
          radio.parentNode.classList.add('incorrect'); // Mark incorrect answer
        }
      });
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question11');
    if (solutionInfoElement) {
      const allCorrect = selectedValue === correctAnswer;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question11');
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
    attachSolutionButtonListeners_question11(button);
  });
});
