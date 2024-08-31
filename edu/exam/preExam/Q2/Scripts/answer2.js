// Function to enable drag-and-drop functionality
function enableDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const dropZones = document.querySelectorAll('.dropzone');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
    });
  });

  dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', function(event) {
      event.preventDefault();
    });

    dropZone.addEventListener('drop', function(event) {
      event.preventDefault();
      const id = event.dataTransfer.getData('text/plain');
      const draggableElement = document.getElementById(id);
      const originalText = draggableElement.getAttribute('data-original');

      if (dropZone && draggableElement) {
        // Create a clone of the original draggable element
        const clonedElement = draggableElement.cloneNode(true);
        clonedElement.id = ""; // Clear the ID to prevent conflicts
        clonedElement.draggable = false; // Make the cloned element non-draggable
        clonedElement.textContent = originalText;
        
        // Clear previous content and append the cloned element
        dropZone.innerHTML = "";
        dropZone.appendChild(clonedElement);
      }
    });
  });
}

// Function to attach event listeners to solution button for question 2
function attachSolutionButtonListeners_question2(button) {
  button.addEventListener('click', function() {
    // Reset styles for drop zones
    document.querySelectorAll('.dropzone').forEach(zone => {
      zone.classList.remove('incorrect', 'highlight');
    });

    // Define correct answers
    const correctAnswers = {
      '2_step1': 'Batch',
      '2_step2': 'Streaming',
      '2_step3': 'Batch'
    };

    // Check answers
    Object.keys(correctAnswers).forEach(id => {
      const dropZone = document.getElementById(id);
      if (dropZone && dropZone.textContent.trim() === correctAnswers[id]) {
        dropZone.classList.add('highlight'); // Highlight correct answer
      } else {
        dropZone.classList.add('incorrect'); // Mark incorrect answer
      }
    });

    // Show solution information
    const solutionInfoElement = document.getElementById('solutionInfo_question2');
    if (solutionInfoElement) {
      const allCorrect = Object.keys(correctAnswers).every(id => 
        document.getElementById(id).textContent.trim() === correctAnswers[id]
      );

      if (allCorrect) {
        solutionInfoElement.classList.add('highlight');
        solutionInfoElement.classList.remove('incorrect');
        window.score++; // Increment the score if all answers are correct
      } else {
        solutionInfoElement.classList.add('incorrect');
        solutionInfoElement.classList.remove('highlight');
        const correctAnswersElement = document.getElementById('correctAnswers_question2');
        if (correctAnswersElement) {
          correctAnswersElement.style.display = 'block';
        }
      }
      solutionInfoElement.style.display = 'block';
    }

    showFinalScore(); // Display final score
  });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
  enableDragAndDrop();
  document.querySelectorAll('.solutionButton').forEach(button => {
    attachSolutionButtonListeners_question2(button);
  });
});
