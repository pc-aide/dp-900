// Function to attach event listener to the solution button for question 14
function attachSolutionButtonListeners_question14(button) {
    button.addEventListener('click', function() {
        // Reset styles for the drop-down
        const dropdown = document.getElementById('question14_dropdown');
        dropdown.classList.remove('incorrect', 'highlight');

        // Correct answer
        const correctAnswer = 'JSON';

        let allCorrect = true;

        // Check the selected answer
        const selectedAnswer = dropdown.value;
        if (selectedAnswer) {
            if (selectedAnswer === correctAnswer) {
                dropdown.classList.add('highlight'); // Highlight correct answer
            } else {
                dropdown.classList.add('incorrect'); // Mark incorrect answer
                allCorrect = false; // Answer is incorrect
            }
        } else {
            allCorrect = false; // No option selected
        }

        // Increment score if the answer is correct
        if (allCorrect) {
            window.score++; // Increment the score if the answer is correct
        }

        // Show solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question14');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';
            const correctAnswersElement = document.getElementById('correctAnswers_question14');
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
        attachSolutionButtonListeners_question14(button);
    });
});