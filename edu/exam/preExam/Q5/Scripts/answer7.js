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
              e.target.textContent = draggedElement.dataset.action;
              e.target.dataset.action = draggedElement.dataset.action;
              e.target.dataset.itemId = draggedElement.id;
              dropzone.classList.remove('highlight');
          }
      });
  });
}

function attachSolutionButtonListeners_question7(button) {
  button.addEventListener('click', function() {
      // Reset styles for drop zones
      document.querySelectorAll('.dropzone').forEach(zone => {
          zone.classList.remove('incorrect', 'highlight');
      });

      // Check answers
      const correctAnswers = [
          "Firewall",
          "Authentication",
          "Encryption"
      ];

      correctAnswers.forEach((answer, index) => {
          const dropZone = document.getElementById(`dropZone7-${index + 1}`);
          if (dropZone && dropZone.textContent.trim() === answer) {
              dropZone.classList.add('highlight');
          } else {
              dropZone.classList.add('incorrect');
              dropZone.textContent = ""; // Clear incorrect drop zones
          }
      });

      // Display solution info
      const solutionInfoElement = document.getElementById('solutionInfo_question7');
      if (solutionInfoElement) {
          const allCorrect = correctAnswers.every((answer, index) => 
              document.getElementById(`dropZone7-${index + 1}`).textContent.trim() === answer
          );

          if (allCorrect) {
              solutionInfoElement.classList.add('highlight');
              solutionInfoElement.classList.remove('incorrect');
              score++;
          } else {
              solutionInfoElement.classList.add('incorrect');
              solutionInfoElement.classList.remove('highlight');
              const correctAnswersElement = document.getElementById('correctAnswers_question7');
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
  enableDragAndDrop();
  document.querySelectorAll('.solutionButton').forEach(button => {
      attachSolutionButtonListeners_question7(button);
  });
});
