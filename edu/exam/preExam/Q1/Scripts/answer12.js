// Function to attach event listeners to the solution button for question 12
function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      outputToFileStore: 'Yes',
      outputToRelationalDB: 'Yes',
      outputToNoSQLDB: 'Yes'
    };

    // Get selected answers
    const selectedAnswers = {
      outputToFileStore: document.querySelector('input[name="outputToFileStore"]:checked')?.value || 'No',
      outputToRelationalDB: document.querySelector('input[name="outputToRelationalDB"]:checked')?.value || 'No',
      outputToNoSQLDB: document.querySelector('input[name="outputToNoSQLDB"]:checked')?.value || 'No'
    };

    // Show correct/incorrect styling for each statement
    Object.keys(selectedAnswers).forEach(key => {
      const isCorrect = selectedAnswers[key] === correctAnswers[key];
      const radioButtons = document.getElementsByName(key);
      radioButtons.forEach(radio => {
        if (radio.checked) {
          if (isCorrect) {
            radio.parentElement.classList.add('highlight');
          } else {
            radio.parentElement.classList.add('incorrect');
          }
        }
      });
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question12');
    if (solutionInfoElement) {
      const allCorrect = Object.keys(selectedAnswers).every(key => selectedAnswers[key] === correctAnswers[key]);
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question12');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question12');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerFileStore_12').textContent = `Batch processing can output data to a file store: ${selectedAnswers.outputToFileStore}`;
          document.getElementById('yourAnswerRelationalDB_12').textContent = `Batch processing can output data to a relational database: ${selectedAnswers.outputToRelationalDB}`;
          document.getElementById('yourAnswerNoSQLDB_12').textContent = `Batch processing can output data to a NoSQL database: ${selectedAnswers.outputToNoSQLDB}`;
          yourAnswerElement.style.display = 'block';
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
    attachSolutionButtonListeners_question12(button);
  });
});
