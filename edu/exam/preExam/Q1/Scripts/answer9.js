// Function to attach event listeners to the solution button for question 9
function attachSolutionButtonListeners_question9(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'distributesProcessingAcrossComputeNodes';

    // Get selected answer
    const selectedAnswer = document.getElementById('mppEngine_9').value;

    // Show correct/incorrect styling
    if (selectedAnswer === correctAnswer) {
      document.getElementById('mppEngine_9').parentElement.classList.add('highlight');
    } else {
      document.getElementById('mppEngine_9').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question9');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question9');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question9');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerMppEngine_9').textContent = `The massively parallel processing (MPP) engine of Azure Synapse Analytics: ${selectedAnswer.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
          yourAnswerElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question9');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question9');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question9(button);
  });
});
