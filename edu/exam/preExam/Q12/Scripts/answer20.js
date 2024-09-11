// Function to attach event listeners to the solution button for question 20
function attachSolutionButtonListeners_question20(button) {
    button.addEventListener('click', function() {
        // Get selected answer from the drop-down list
        const selectedAnswer = document.getElementById('question20_dropdown').value;

        // Correct answer
        const correctAnswer = 'The Power BI service';

        // Reset styles
        document.querySelectorAll('select').forEach(select => {
            select.classList.remove('incorrect', 'highlight');
        });

        // Check answer and update styles
        if (selectedAnswer === correctAnswer) {
            document.getElementById('question20_dropdown').classList.add('highlight'); // Highlight correct answer
            window.score++; // Increment the score if the answer is correct
        } else {
            document.getElementById('question20_dropdown').classList.add('incorrect'); // Mark incorrect answer
        }

        // Show solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question20');
        if (solutionInfoElement) {
            solutionInfoElement.style.display = 'block';
            const correctAnswersElement = document.getElementById('correctAnswers_question20');
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
        attachSolutionButtonListeners_question20(button);
    });
});
