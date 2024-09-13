// Function to attach event listeners to the solution button for question 17
function attachSolutionButtonListeners_question17(button) {
    button.addEventListener('click', function() {
        // Reset styles for dropdown list
        const dropdown = document.getElementById('question17_dropdown');
        const dropdownParent = dropdown.parentElement;
        dropdownParent.classList.remove('incorrect', 'highlight');

        // Correct answer
        const correctAnswer = 'D';

        let selectedAnswer = dropdown.value;
        let allCorrect = true;

        // Check answer
        if (selectedAnswer === correctAnswer) {
            dropdownParent.classList.add('highlight'); // Highlight correct answer
        } else {
            dropdownParent.classList.add('incorrect'); // Mark incorrect answer
            allCorrect = false;
        }

        // Increment score if correct
        if (allCorrect) {
            window.score++; // Increment the score if the answer is correct
        }

        // Show solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question17');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';
            const correctAnswersElement = document.getElementById('correctAnswers_question17');
            if (correctAnswersElement) {
                correctAnswersElement.style.display = 'block';
            }
        }

        showFinalScore(); // Display final score
    });
}

// Initialize functionality on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question17(button);
    });
});
