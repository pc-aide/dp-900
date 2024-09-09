function attachSolutionButtonListeners_question11(button) {
  button.addEventListener('click', function() {
    // Get the selected value
    const selectedOption = document.querySelector('input[name="dataService"]:checked');

    // Reset styles for all options
    document.querySelectorAll('input[name="dataService"]').forEach(input => {
      input.parentElement.classList.remove('incorrect', 'highlight');
    });

    // Check if an option is selected
    if (selectedOption) {
      const selectedValue = selectedOption.value;
      const correctAnswer = 'AzureCosmosDB';

      // Apply styles based on the selected value
      if (selectedValue === correctAnswer) {
        selectedOption.parentElement.classList.add('highlight');
        document.getElementById('correctAnswers_question11').style.display = 'block';
        score++; // Increment score if the answer is correct
      } else {
        selectedOption.parentElement.classList.add('incorrect');
        document.getElementById('correctAnswers_question11').style.display = 'block';
      }
    }

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question11');
    if (solutionInfoElement) {
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question11(button);
  });
});
