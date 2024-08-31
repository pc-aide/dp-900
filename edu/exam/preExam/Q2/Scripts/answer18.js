// Function to attach event listener to the solution button for question 18
function attachSolutionButtonListeners_question18(button) {
  button.addEventListener('click', function() {
    // Get the selected answer from the drop-down list
    const codeBlockAnswer = document.getElementById('codeBlock').value;

    // Correct answer
    const correctAnswer = 'storedProcedure';

    // Display user's selected answer
    document.getElementById('yourAnswerCodeBlock').textContent = codeBlockAnswer.replace(/([A-Z])/g, ' $1').trim();
    document.getElementById('yourAnswer_question18').style.display = 'block';

    // Display correct answer if the user's answer is wrong
    const solutionInfoElement = document.getElementById('solutionInfo_question18');
    if (solutionInfoElement) {
      if (codeBlockAnswer === correctAnswer) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswerElement = document.getElementById('correctAnswer_question18');
        if (correctAnswerElement) {
          correctAnswerElement.style.display = 'block';
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
    if (button.getAttribute('data-answer-name') === 'question18') {
      attachSolutionButtonListeners_question18(button);
    }
  });
});
