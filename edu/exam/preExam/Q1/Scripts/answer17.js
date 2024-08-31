// Function to attach event listeners to the solution button for question 17
function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function () {
    // Define the correct answer
    const correctAnswer = 'simple_lookups';

    // Get the selected answer
    const selectedAnswer = document.getElementById('keyValueDataStore').value;

    // Show correct/incorrect styling
    const options = document.getElementById('keyValueDataStore').options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === correctAnswer) {
        options[i].style.backgroundColor = 'yellow'; // Highlight correct answer in yellow
      } else if (options[i].value === selectedAnswer) {
        options[i].style.backgroundColor = 'red'; // Highlight incorrect selection in red
      }
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      const isCorrect = (selectedAnswer === correctAnswer);

      if (isCorrect) {
        solutionInfoElement.classList.add('highlight'); // Apply yellow background
        window.score++; // Increment the score if the answer is correct
      } else {
        solutionInfoElement.classList.add('incorrect'); // Apply red color to text

        // Show the correct answer section
        const correctAnswersElement = document.getElementById('correctAnswers_question17');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
          correctAnswersElement.classList.add('highlight'); // Yellow background
        }

        // Show user's answer
        const yourAnswerElement = document.getElementById('yourAnswer_question17');
        if (yourAnswerElement) {
          yourAnswerElement.style.display = 'block';
          yourAnswerElement.classList.add('highlight'); // Yellow background
          document.getElementById('yourAnswerOption_17').textContent = selectedAnswer;
        }
      }

      solutionInfoElement.style.display = 'block'; // Show solution info
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question17(button);
  });
});
