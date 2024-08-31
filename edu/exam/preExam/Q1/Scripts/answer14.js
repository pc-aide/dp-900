// Function to attach event listeners to the solution button for question 14
function attachSolutionButtonListeners_question14(button) {
  button.addEventListener('click', function() {
    // Define correct answers
    const correctAnswers = {
      statement1: 'Yes',
      statement2: 'No',
      statement3: 'No'
    };

    // Get selected answers
    const selectedAnswers = {
      statement1: document.querySelector('input[name="statement1"]:checked')?.value,
      statement2: document.querySelector('input[name="statement2"]:checked')?.value,
      statement3: document.querySelector('input[name="statement3"]:checked')?.value
    };

    // Show correct/incorrect styling for each statement
    Object.keys(selectedAnswers).forEach(statement => {
      const selectedValue = selectedAnswers[statement];
      const correctValue = correctAnswers[statement];

      const labelYes = document.getElementById(`${statement}Yes_14`).parentElement;
      const labelNo = document.getElementById(`${statement}No_14`).parentElement;

      if (selectedValue === correctValue) {
        if (selectedValue === 'Yes') labelYes.classList.add('highlight');
        if (selectedValue === 'No') labelNo.classList.add('highlight');
      } else {
        if (selectedValue === 'Yes') labelYes.classList.add('incorrect');
        if (selectedValue === 'No') labelNo.classList.add('incorrect');
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question14');
    if (solutionInfoElement) {
      const allCorrect = Object.keys(correctAnswers).every(statement => selectedAnswers[statement] === correctAnswers[statement]);

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        const correctAnswersElement = document.getElementById('correctAnswers_question14');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }

        // Show user's answers if incorrect
        const yourAnswerElement = document.getElementById('yourAnswer_question14');
        if (yourAnswerElement) {
          document.getElementById('yourAnswerOption1_14').textContent = `Platform as a service (PaaS) database offerings in Azure require less setup & configuration effort than infrastructure as a service (IaaS) database offerings: ${selectedAnswers['statement1']}`;
          document.getElementById('yourAnswerOption2_14').textContent = `Platform as a service (PaaS) database offering in Azure provide end users with the ability to control & update the operating system version: ${selectedAnswers['statement2']}`;
          document.getElementById('yourAnswerOption3_14').textContent = `All relation & non-relational platform as a service (PaaS) database offerings in Azure can be paused to reduce costs: ${selectedAnswers['statement3']}`;
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
    attachSolutionButtonListeners_question14(button);
  });
});
