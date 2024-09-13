// Function to attach event listeners to the solution button for question 9
function attachSolutionButtonListeners_question9(button) {
    button.addEventListener('click', function() {
        // Reset styles for the drop-down
        const dropdown = document.getElementById('question9_dropdown');
        dropdown.classList.remove('incorrect', 'highlight');

        // Correct answer
        const correctAnswer = 'UPDATE';

        // Check the selected answer
        const selectedAnswer = dropdown.value;
        if (selectedAnswer) {
            if (selectedAnswer === correctAnswer) {
                dropdown.classList.add('highlight'); // Highlight correct answer
                window.score++; // Increment the score if the answer is correct
            } else {
                dropdown.classList.add('incorrect'); // Mark incorrect answer
            }
        }

        // Show solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question9');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';
            const correctAnswersElement = document.getElementById('correctAnswers_question9');
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
        attachSolutionButtonListeners_question9(button);
    });
});
