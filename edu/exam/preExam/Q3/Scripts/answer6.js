// Function to attach event listeners to solution button for question 6
function attachSolutionButtonListeners_question6(button) {
  button.addEventListener('click', function() {
    // Define correct answers for each statement
    const correctAnswers = {
      'statement1': 'Yes',
      'statement2': 'Yes',
      'statement3': 'No'
    };
    
    // Get selected answers from radio buttons
    const selectedStatement1 = document.querySelector('input[name="statement1"]:checked')?.value;
    const selectedStatement2 = document.querySelector('input[name="statement2"]:checked')?.value;
    const selectedStatement3 = document.querySelector('input[name="statement3"]:checked')?.value;
    
    // Get radio button elements for each statement
    const statement1Radios = document.getElementsByName('statement1');
    const statement2Radios = document.getElementsByName('statement2');
    const statement3Radios = document.getElementsByName('statement3');
    
    // Show correct/incorrect styling for statement 1
    statement1Radios.forEach(radio => {
      if (radio.value === correctAnswers['statement1']) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswers['statement1']) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    // Show correct/incorrect styling for statement 2
    statement2Radios.forEach(radio => {
      if (radio.value === correctAnswers['statement2']) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswers['statement2']) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    // Show correct/incorrect styling for statement 3
    statement3Radios.forEach(radio => {
      if (radio.value === correctAnswers['statement3']) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswers['statement3']) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    // Determine if all answers are correct
    const allAnswersCorrect = (
      selectedStatement1 === correctAnswers['statement1'] &&
      selectedStatement2 === correctAnswers['statement2'] &&
      selectedStatement3 === correctAnswers['statement3']
    );
    
    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question6');
    if (solutionInfoElement) {
      if (allAnswersCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question6');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Display final score using the function from constants.js
    if (typeof showFinalScore === 'function') {
      showFinalScore();
    }
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton[data-answer-name="question6"]').forEach(button => {
    attachSolutionButtonListeners_question6(button);
  });
});
