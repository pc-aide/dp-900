// Function to attach event listeners to solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Define correct answers for each statement
    const correctAnswers = {
      'question13_1': 'No',
      'question13_2': 'No',
      'question13_3': 'Yes'
    };
    
    // Get selected answers from radio buttons
    const selectedStatement1 = document.querySelector('input[name="question13_1"]:checked')?.value;
    const selectedStatement2 = document.querySelector('input[name="question13_2"]:checked')?.value;
    const selectedStatement3 = document.querySelector('input[name="question13_3"]:checked')?.value;
    
    // Get radio button elements for each statement
    const statement1Radios = document.getElementsByName('question13_1');
    const statement2Radios = document.getElementsByName('question13_2');
    const statement3Radios = document.getElementsByName('question13_3');
    
    // Show correct/incorrect styling
    statement1Radios.forEach(radio => {
      if (radio.value === correctAnswers['question13_1']) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswers['question13_1']) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    statement2Radios.forEach(radio => {
      if (radio.value === correctAnswers['question13_2']) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswers['question13_2']) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    statement3Radios.forEach(radio => {
      if (radio.value === correctAnswers['question13_3']) {
        radio.parentElement.classList.add('highlight');
      } else if (radio.checked && radio.value !== correctAnswers['question13_3']) {
        radio.parentElement.classList.add('incorrect');
      }
    });
    
    // Determine if all answers are correct
    const allAnswersCorrect = (
      selectedStatement1 === correctAnswers['question13_1'] &&
      selectedStatement2 === correctAnswers['question13_2'] &&
      selectedStatement3 === correctAnswers['question13_3']
    );
    
    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question13');
    if (solutionInfoElement) {
      if (allAnswersCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if the answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question13');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }
    
    // Show explanation and references
    const explanationElement = document.getElementById('solutionInfo_question13');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('solutionInfo_question13');
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
  document.querySelectorAll('.solutionButton[data-answer-name="question13"]').forEach(button => {
    attachSolutionButtonListeners_question13(button);
  });
});
