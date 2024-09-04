function attachSolutionButtonListeners_question12(button) {
  button.addEventListener('click', function() {
      // Define the correct answers
      const correctAnswers = [
          'question12_b', // B
          'question12_c', // C
          'question12_e'  // E
      ];

      // Check selected answers
      let allCorrect = true;
      correctAnswers.forEach(id => {
          const checkbox = document.getElementById(id);
          if (!checkbox.checked) {
              allCorrect = false;
              checkbox.classList.add('incorrect');
          } else {
              checkbox.classList.remove('incorrect');
          }
      });

      // Display correct answers that are not checked
      correctAnswers.forEach(id => {
          if (document.getElementById(id).checked) {
              document.getElementById(id).classList.add('highlight');
          }
      });

      // Show or hide correct answers and solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question12');
      if (solutionInfoElement) {
          if (allCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              score++;
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question12');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      showFinalScore();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question12(button);
  });
});
