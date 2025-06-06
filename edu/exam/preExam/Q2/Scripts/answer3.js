// Function to enable drag-and-drop functionality
function enableDragAndDrop() {
  document.querySelectorAll('.draggable').forEach(draggable => {
      draggable.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', e.target.id);
          e.dataTransfer.effectAllowed = 'move';
      });
  });

  document.querySelectorAll('.dropzone').forEach(dropzone => {
      dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          dropzone.classList.add('highlight');
      });

      dropzone.addEventListener('dragleave', () => {
          dropzone.classList.remove('highlight');
      });

      dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          const data = e.dataTransfer.getData('text/plain');
          const draggedElement = document.getElementById(data);
          if (draggedElement) {
              // Utiliser innerHTML pour inclure tout le texte du draggable sans le rogner
              e.target.innerHTML = draggedElement.innerHTML;
              e.target.dataset.action = draggedElement.dataset.action;
              e.target.dataset.itemId = draggedElement.id;
              dropzone.classList.remove('highlight');
          }
      });
  });
}

// Function to attach solution button listeners for question 3
function attachSolutionButtonListeners_question3(button) {
  button.addEventListener('click', function() {
      // Reset styles for drop zones
      document.querySelectorAll('.dropzone').forEach(zone => {
          zone.classList.remove('incorrect', 'highlight');
      });

      // Define correct answers
      const correctAnswers = [
          "The CRM system",  // Extract
          "The data warehouse", // Load
          "The data warehouse"  // Transform
      ];

      // Check answers
      correctAnswers.forEach((answer, index) => {
          const dropZone = document.getElementById(`dropZone3-${index + 1}`);
          if (dropZone && dropZone.innerHTML === answer) {
              dropZone.classList.add('highlight');
          } else {
              dropZone.classList.add('incorrect');
              dropZone.innerHTML = ""; // Clear incorrect drop zones
          }
      });

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question3');
      if (solutionInfoElement) {
          const allCorrect = correctAnswers.every((answer, index) => 
              document.getElementById(`dropZone3-${index + 1}`).innerHTML === answer
          );

          if (allCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              score++;
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question3');
              if (correctAnswersElement) {
                  correctAnswersElement.style.display = 'block';
              }
          }
          solutionInfoElement.style.display = 'block';
      }

      showFinalScore();
  });
}

// Initialize drag-and-drop and attach event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  enableDragAndDrop();
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question3(button);
  });
});
