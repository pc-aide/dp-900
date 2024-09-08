// Function to attach event listeners to the solution button for question 5
function attachSolutionButtonListeners_question5(button) {
  button.addEventListener('click', function() {
    // Reset styles for checkboxes
    document.querySelectorAll('input[name="question5_checkbox"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Correct answers
    const correctAnswers = ['B', 'C'];
    
    let allCorrect = true;

    // Check the selected answers
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="question5_checkbox"]:checked')).map(input => input.value);
    
    // Check if the selected answers match the correct answers
    const isCorrect = selectedAnswers.every(answer => correctAnswers.includes(answer)) && correctAnswers.every(answer => selectedAnswers.includes(answer));
    
    if (isCorrect) {
      selectedAnswers.forEach(answer => {
        if (correctAnswers.includes(answer)) {
          document.querySelector(`input[name="question5_checkbox"][value="${answer}"]`).parentElement.classList.add('highlight'); // Highlight correct answers
        }
      });
      window.score++; // Increment the score if the answer is correct
    } else {
      selectedAnswers.forEach(answer => {
        if (!correctAnswers.includes(answer)) {
          document.querySelector(`input[name="question5_checkbox"][value="${answer}"]`).parentElement.classList.add('incorrect'); // Mark incorrect answers
          allCorrect = false; // Answer is incorrect
        }
      });
      correctAnswers.forEach(answer => {
        if (!selectedAnswers.includes(answer)) {
          document.querySelector(`input[name="question5_checkbox"][value="${answer}"]`).parentElement.classList.add('highlight'); // Highlight missing correct answers
        }
      });
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question5');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
      const correctAnswersElement = document.getElementById('correctAnswers_question5');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
      }
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question5(button);
  });
});
