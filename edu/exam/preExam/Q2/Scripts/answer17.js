// Function to attach event listeners to the solution button for question 17
function attachSolutionButtonListeners_question17(button) {
  button.addEventListener('click', function() {
    // Get the selected answers from the radio buttons
    const crossDbQueryAnswer = document.querySelector('input[name="crossDbQueries"]:checked');
    const elasticPoolsAnswer = document.querySelector('input[name="elasticPools"]:checked');
    const sqlDbCompatibilityAnswer = document.querySelector('input[name="sqlDbCompatibility"]:checked');

    // Correct answers
    const correctAnswers = {
      crossDbQueries: 'Yes',
      elasticPools: 'No',
      sqlDbCompatibility: 'No'
    };

    // Display user's selected answers
    if (crossDbQueryAnswer) {
      document.getElementById('yourAnswerCrossDbQueries').textContent = crossDbQueryAnswer.value;
    }
    if (elasticPoolsAnswer) {
      document.getElementById('yourAnswerElasticPools').textContent = elasticPoolsAnswer.value;
    }
    if (sqlDbCompatibilityAnswer) {
      document.getElementById('yourAnswerSqlDbCompatibility').textContent = sqlDbCompatibilityAnswer.value;
    }
    document.getElementById('yourAnswer_question17').style.display = 'block';

    // Display correct answers if the user's answers are wrong
    const solutionInfoElement = document.getElementById('solutionInfo_question17');
    if (solutionInfoElement) {
      const allCorrect = crossDbQueryAnswer && crossDbQueryAnswer.value === correctAnswers.crossDbQueries &&
                        elasticPoolsAnswer && elasticPoolsAnswer.value === correctAnswers.elasticPools &&
                        sqlDbCompatibilityAnswer && sqlDbCompatibilityAnswer.value === correctAnswers.sqlDbCompatibility;
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question17');
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
    if (button.getAttribute('data-answer-name') === 'question17') {
      attachSolutionButtonListeners_question17(button);
    }
  });
});
