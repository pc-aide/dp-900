// Function to attach event listeners to the solution button for question 10
function attachSolutionButtonListeners_question10(button) {
  button.addEventListener('click', function() {
    // Define correct answer
    const correctAnswer = 'clusteredIndex';

    // Get selected answer
    const selectedAnswer = document.getElementById('index_10').value;

    // Show correct/incorrect styling
    if (selectedAnswer === correctAnswer) {
      document.getElementById('index_10').parentElement.classList.add('highlight');
    } else {
      document.getElementById('index_10').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question10');
    if (solutionInfoElement) {
      if (selectedAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question10');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answer if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question10');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerIndex_10').textContent = `is an object associated with a table that sorts & stores the data rows in the table based on their key values: ${selectedAnswer.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
          yourAnswerElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.querySelector('#solutionInfo_question10 p:nth-of-type(1)');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.querySelector('#solutionInfo_question10 ul');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question10(button);
  });
});
