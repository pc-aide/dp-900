// Function to enable drag-and-drop functionality
function enableDragAndDrop_question14() {
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

function attachSolutionButtonListeners_question14(button) {
  button.addEventListener('click', function() {
    // Reset styles for drop zones
    document.querySelectorAll('.dropzone').forEach(zone => {
      zone.classList.remove('incorrect', 'highlight');
    });

    // Check answers
    const correctAnswers = {
      "dropZone14-1": "Attributes",
      "dropZone14-2": "Entities",
      "dropZone14-3": "Foreign Keys"
    };

    let allCorrect = true;

    Object.entries(correctAnswers).forEach(([zoneId, correctAnswer]) => {
      const dropZone = document.getElementById(zoneId);
      if (dropZone && dropZone.textContent.trim() === correctAnswer) {
        dropZone.classList.add('highlight');
      } else {
        dropZone.classList.add('incorrect');
        dropZone.textContent = ""; // Clear incorrect drop zones
        allCorrect = false;
      }
    });

    // Display solution info
    const solutionInfoElement = document.getElementById('solutionInfo_question14');
    if (solutionInfoElement) {
      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        score++; // Increment score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question14');
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
  enableDragAndDrop_question14();
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question14(button);
  });
});
