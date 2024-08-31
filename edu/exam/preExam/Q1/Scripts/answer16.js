// Function to attach event listeners to the solution button for question 16
function attachSolutionButtonListeners_question16(button) {
  button.addEventListener('click', function() {
    // Define the correct answer
    const correctAnswer = 'B';

    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="sqlQueryObject"]:checked')?.value;

    // Show correct/incorrect styling
    const labelA = document.getElementById('optionA_16').parentElement;
    const labelB = document.getElementById('optionB_16').parentElement;
    const labelC = document.getElementById('optionC_16').parentElement;
    const labelD = document.getElementById('optionD_16').parentElement;

    if (selectedAnswer === correctAnswer) {
      labelB.classList.add('highlight'); // Correct answer highlighted in yellow
      window.score++; // Increment the score if the answer is correct
    } else {
      if (selectedAnswer === 'A') labelA.classList.add('incorrect'); // Incorrect answer in red
      if (selectedAnswer === 'C') labelC.classList.add('incorrect'); // Incorrect answer in red
      if (selectedAnswer === 'D') labelD.classList.add('incorrect'); // Incorrect answer in red
      labelB.classList.add('highlight'); // Highlight correct answer in yellow
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question16');
    if (solutionInfoElement) {
      solutionInfoElement.classList.add('highlight'); // Apply yellow background to solution info

      const correctAnswersElement = document.getElementById('correctAnswers_question16');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
        correctAnswersElement.classList.add('highlight'); // Yellow background for correct answers
      }

      // Show user's answer if incorrect
      const yourAnswerElement = document.getElementById('yourAnswer_question16');
      if (yourAnswerElement) {
        yourAnswerElement.style.display = 'block';
        yourAnswerElement.classList.add('highlight'); // Yellow background for your answer
        document.getElementById('yourAnswerOption_16').textContent = `Your answer: ${selectedAnswer}`;
      }

      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question16(button);
  });
});
