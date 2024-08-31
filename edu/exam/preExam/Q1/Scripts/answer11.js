// Function to attach event listeners to the solution button for question 11
function attachSolutionButtonListeners_question11(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'transactionalWrites';

    // Get selected answer
    const selectedAnswer = document.getElementById('transactional_11').value;

    // Show correct/incorrect styling
    if (selectedAnswer === correctAnswer) {
      document.getElementById('transactional_11').parentElement.classList.add('highlight');
    } else {
      document.getElementById('transactional_11').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question11');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question11');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question11');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerTransactional_11').textContent = `A relational database is appropriate for scenarios that involve a high volume of: ${selectedAnswer.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
          yourAnswerElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.querySelector('#solutionInfo_question11 p:nth-of-type(1)');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.querySelector('#solutionInfo_question11 ul');
    if (referencesElement) {
      referencesElement.style.display = 'block';
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
