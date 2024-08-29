// Function to attach event listeners to solution button for question 2
function attachSolutionButtonListeners_question2(button) {
  button.addEventListener('click', function() {
      // Define correct answers
      const correctAnswers = {
          'question2_statement1': 'no',
          'question2_statement2': 'yes',
          'question2_statement3': 'yes'
      };

      // Get selected answers from radio buttons
      const selectedStatement1 = document.querySelector('input[name="question2_statement1"]:checked')?.value;
      const selectedStatement2 = document.querySelector('input[name="question2_statement2"]:checked')?.value;
      const selectedStatement3 = document.querySelector('input[name="question2_statement3"]:checked')?.value;

      // Show correct/incorrect styling
      const statement1Radios = document.getElementsByName('question2_statement1');
      const statement2Radios = document.getElementsByName('question2_statement2');
      const statement3Radios = document.getElementsByName('question2_statement3');

      statement1Radios.forEach(radio => {
          if (radio.value === correctAnswers['question2_statement1']) {
              radio.parentElement.classList.add('highlight');
          } else if (radio.checked && radio.value !== correctAnswers['question2_statement1']) {
              radio.parentElement.classList.add('incorrect');
          }
      });

      statement2Radios.forEach(radio => {
          if (radio.value === correctAnswers['question2_statement2']) {
              radio.parentElement.classList.add('highlight');
          } else if (radio.checked && radio.value !== correctAnswers['question2_statement2']) {
              radio.parentElement.classList.add('incorrect');
          }
      });

      statement3Radios.forEach(radio => {
          if (radio.value === correctAnswers['question2_statement3']) {
              radio.parentElement.classList.add('highlight');
          } else if (radio.checked && radio.value !== correctAnswers['question2_statement3']) {
              radio.parentElement.classList.add('incorrect');
          }
      });

      // Show solution information
      const solutionInfoElement = document.getElementById('solutionInfo_question2');
      if (solutionInfoElement) {
          if (selectedStatement1 === correctAnswers['question2_statement1'] &&
              selectedStatement2 === correctAnswers['question2_statement2'] &&
              selectedStatement3 === correctAnswers['question2_statement3']) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              window.score++; // Increment the score if the answers are correct
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question2');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      // Show explanation and references
      const explanationElement = document.getElementById('explanation_question2');
      if (explanationElement) {
          explanationElement.style.display = 'block';
      }
      const referencesElement = document.getElementById('references_question2');
      if (referencesElement) {
          referencesElement.style.display = 'block';
      }

      // Display final score using the function from constants.js
      if (typeof showFinalScore === 'function') {
          showFinalScore();
      }
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton[data-answer-name="question2"]').forEach(button => {
      attachSolutionButtonListeners_question2(button);
  });
});
