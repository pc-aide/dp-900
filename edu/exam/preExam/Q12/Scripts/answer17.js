// Function to attach event listeners to the solution button for question 17
function attachSolutionButtonListeners_question17(button) {
    button.addEventListener('click', function() {
        // Reset styles for the dropdown
        const dropdown = document.getElementById('question17_dropdown');
        dropdown.classList.remove('incorrect', 'highlight');

        // Correct answer
        const correctAnswer = 'for NoSQL';

        // Check selected answer
        const selectedAnswer = dropdown.value;

        if (selectedAnswer === correctAnswer) {
            dropdown.classList.add('highlight'); // Highlight correct answer
            window.score++; // Increment score if correct
        } else {
            dropdown.classList.add('incorrect'); // Mark incorrect answer
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
