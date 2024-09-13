// Function to attach event listeners to the solution button for question 16
function attachSolutionButtonListeners_question16(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons
        document.querySelectorAll('input[name="question16_radio"]').forEach(input => {
            const label = input.parentElement;
            label.classList.remove('incorrect', 'highlight');
        });

        // Correct answer
        const correctAnswer = 'D';

        let selectedAnswer = document.querySelector('input[name="question16_radio"]:checked');
        let allCorrect = true;

        // Check answer
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                selectedAnswer.parentElement.classList.add('highlight'); // Highlight correct answer
            } else {
                selectedAnswer.parentElement.classList.add('incorrect'); // Mark incorrect answer
                allCorrect = false;
            }
        } else {
            allCorrect = false; // No answer selected
        }

        // Increment score if correct
        if (allCorrect) {
            window.score++; // Increment the score if the answer is correct
        }

        // Show solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question16');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';
            const correctAnswersElement = document.getElementById('correctAnswers_question16');
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
        attachSolutionButtonListeners_question16(button);
    });
});