// Function to attach event listener to the solution button for question 10
function attachSolutionButtonListeners_question10(button) {
    button.addEventListener('click', function() {
        // Reset styles for drop-down list
        const dropdown = document.getElementById('question10_dropdown');
        dropdown.classList.remove('incorrect', 'highlight');

        // Correct answer
        const correctAnswer = 'Azure SQL Edge';

        let selectedAnswer = dropdown.value;
        let allCorrect = true;

        // Check answer
        if (selectedAnswer === correctAnswer) {
            dropdown.classList.add('highlight'); // Highlight correct answer
        } else {
            dropdown.classList.add('incorrect'); // Mark incorrect answer
            allCorrect = false;
        }

        // Increment score if correct
        if (allCorrect) {
            window.score++; // Increment the score if the answer is correct
        }

        // Show solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question10');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';
            const correctAnswersElement = document.getElementById('correctAnswers_question10');
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
        attachSolutionButtonListeners_question10(button);
    });
});
