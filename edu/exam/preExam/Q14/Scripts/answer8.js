// Function to attach event listeners to the solution button for question 8
function attachSolutionButtonListeners_question8(button) {
    button.addEventListener('click', function() {
        // Reset styles for radio buttons
        document.querySelectorAll('input[name="question8_radio"]').forEach(radio => {
            radio.parentElement.classList.remove('incorrect', 'highlight');
        });

        // Correct answer
        const correctAnswer = 'C. Data Manipulation Language (DML)';

        // Check the selected answer
        let selectedAnswer = null;
        document.querySelectorAll('input[name="question8_radio"]').forEach(radio => {
            if (radio.checked) {
                selectedAnswer = radio.value;
            }
        });

        if (selectedAnswer) {
            if (selectedAnswer === correctAnswer) {
                document.querySelector(`input[value="${correctAnswer}"]`).parentElement.classList.add('highlight'); // Highlight correct answer
                window.score++; // Increment the score if the answer is correct
            } else {
                document.querySelector(`input[value="${selectedAnswer}"]`).parentElement.classList.add('incorrect'); // Mark incorrect answer
            }
        }

        // Show solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question8');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';
            const correctAnswersElement = document.getElementById('correctAnswers_question8');
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
        attachSolutionButtonListeners_question8(button);
    });
});
