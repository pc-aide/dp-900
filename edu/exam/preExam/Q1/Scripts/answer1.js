// Function to attach event listeners to solution button for question 1
function attachSolutionButtonListeners_question1(button) {
  button.addEventListener('click', function() {
    // Définir la bonne réponse
    const correctAnswer = 'what occurred in the past';

    // Vérifier la réponse sélectionnée
    const selectedAnswer = document.querySelector('select[name="question1_descriptive_analytics"]').value;

    // Obtenir les éléments d'information sur la solution
    const solutionInfoElement = document.getElementById('solutionInfo_question1');
    const correctAnswersElement = document.getElementById('correctAnswers_question1');

    // Afficher le style correct/incorrect
    if (selectedAnswer === correctAnswer) {
      // Réponse correcte - sections en jaune
      solutionInfoElement.classList.add('highlight');
      solutionInfoElement.classList.remove('incorrect');
      window.score++; // Incrémenter le score si la réponse est correcte
    } else {
      // Réponse incorrecte - sections en rouge
      solutionInfoElement.classList.add('incorrect');
      solutionInfoElement.classList.remove('highlight');
      if (correctAnswersElement) {
        correctAnswersElement.style.display = 'block';
      }
    }

    // Afficher les informations de solution
    solutionInfoElement.style.display = 'block';

    // Appeler la fonction pour afficher le score final depuis constants.js
    showFinalScore();
  });
}

// Initialiser la fonctionnalité lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question1(button);
  });
});
