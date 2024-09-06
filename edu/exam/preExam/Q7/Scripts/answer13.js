// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Reset styles for radio buttons
    document.querySelectorAll('input[name^="question13_"]').forEach(input => {
      const label = input.parentElement;
      label.classList.remove('incorrect', 'highlight');
    });

    // Check the selected answers
    const correctAnswers = {
      question13_table_storage_read: 'Yes',
      question13_table_storage_write: 'No',
      question13_cosmos_table_read: 'Yes',
      question13_cosmos_table_write: 'Yes'
    };

    let allCorrect = true;
    let anyIncorrect = false;

    // Validate each question
    Object.keys(correctAnswers).forEach(name => {
      const selectedAnswer = document.querySelector(`input[name="${name}"]:checked`);
      const correctAnswer = correctAnswers[name];
      
      if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
          document.querySelector(`input[name="${name}"][value="${correctAnswer}"]`).parentElement.classList.add('highlight');
        } else {
          document.querySelector(`input[name="${name}"][value="${selectedAnswer.value}"]`).parentElement.classList.add('incorrect');
          anyIncorrect = true;
          allCorrect = false;
        }
      } else {
        anyIncorrect = true;
        allCorrect = false;
      }
    });

    // Increment the score only if all selected answers are correct
    if (!anyIncorrect) {
      window.score++; // Increment the score if all selected answers are correct
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question13');
    if (solutionInfoElement) {
      if (allCorrect && !anyIncorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question13');
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
    attachSolutionButtonListeners_question13(button);
  });
});
