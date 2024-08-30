// Function to attach event listeners to the solution button for question 7
function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      customer: 'rootObject',
      address: 'nestedObject',
      socialMedia: 'nestedArray'
    };

    // Get selected answers
    const selectedCustomer = document.getElementById('customer').value;
    const selectedAddress = document.getElementById('address').value;
    const selectedSocialMedia = document.getElementById('socialMedia').value;

    // Show correct/incorrect styling
    if (selectedCustomer === correctAnswers.customer) {
      document.getElementById('customer').parentElement.classList.add('highlight');
    } else {
      document.getElementById('customer').parentElement.classList.add('incorrect');
    }

    if (selectedAddress === correctAnswers.address) {
      document.getElementById('address').parentElement.classList.add('highlight');
    } else {
      document.getElementById('address').parentElement.classList.add('incorrect');
    }

    if (selectedSocialMedia === correctAnswers.socialMedia) {
      document.getElementById('socialMedia').parentElement.classList.add('highlight');
    } else {
      document.getElementById('socialMedia').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question7');
    if (solutionInfoElement) {
      if (selectedCustomer === correctAnswers.customer && selectedAddress === correctAnswers.address && selectedSocialMedia === correctAnswers.socialMedia) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question7');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question7');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question7');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question7(button);
  });
});
