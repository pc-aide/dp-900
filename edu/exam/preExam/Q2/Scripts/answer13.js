// Function to attach event listeners to the solution button for question 13
function attachSolutionButtonListeners_question13(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      postgresqlVM: 'iaas',
      azureDBPostgreSQL: 'paas'
    };

    // Get selected answers
    const selectedPostgreSQLVM = document.getElementById('postgresqlVM_13').value;
    const selectedAzureDBPostgreSQL = document.getElementById('azureDBPostgreSQL_13').value;

    // Show correct/incorrect styling
    if (selectedPostgreSQLVM === correctAnswers.postgresqlVM) {
      document.getElementById('postgresqlVM_13').parentElement.classList.add('highlight');
    } else {
      document.getElementById('postgresqlVM_13').parentElement.classList.add('incorrect');
    }

    if (selectedAzureDBPostgreSQL === correctAnswers.azureDBPostgreSQL) {
      document.getElementById('azureDBPostgreSQL_13').parentElement.classList.add('highlight');
    } else {
      document.getElementById('azureDBPostgreSQL_13').parentElement.classList.add('incorrect');
    }

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question13');
    if (solutionInfoElement) {
      if (selectedPostgreSQLVM === correctAnswers.postgresqlVM && selectedAzureDBPostgreSQL === correctAnswers.azureDBPostgreSQL) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question13');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
        
        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question13');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerPostgreSQLVM_13').textContent = `PostgreSQL on Azure VMs: ${selectedPostgreSQLVM}`;
          document.getElementById('yourAnswerAzureDBPostgreSQL_13').textContent = `Azure Database for PostgreSQL: ${selectedAzureDBPostgreSQL}`;
          yourAnswerElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    // Show explanation and references
    const explanationElement = document.getElementById('explanation_question13');
    if (explanationElement) {
      explanationElement.style.display = 'block';
    }
    const referencesElement = document.getElementById('references_question13');
    if (referencesElement) {
      referencesElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question13(button);
  });
});
