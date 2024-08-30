// Function to attach event listeners to the solution button for question 8
function attachSolutionButtonListeners_question8(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      dataModel: 'starSchema',
      customer: 'dimension'
    };

    // Get selected answers
    const selectedDataModel = document.getElementById('dataModel_8').value;
    const selectedCustomer = document.getElementById('customer_8').value;

    // Show correct/incorrect styling
    if (selectedDataModel === correctAnswers.dataModel) {
      document.getElementById('dataModel_8').parentElement.classList.add('highlight');
    } else {
      document.getElementById('dataModel_8').parentElement.classList.add('incorrect');
    }

    if (selectedCustomer === correctAnswers.customer) {
      document.getElementById('customer_8').parentElement.classList.add('highlight');
    } else {
      document.getElementById('customer_8').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question8');
    if (solutionInfoElement) {
      if (selectedDataModel === correctAnswers.dataModel && selectedCustomer === correctAnswers.customer) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question8');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question8');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerDataModel_8').textContent = `The data model is: ${selectedDataModel}`;
          document.getElementById('yourAnswerCustomer_8').textContent = `Customer is: ${selectedCustomer}`;
          yourAnswerElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question8');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question8');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question8(button);
  });
});
