// Function to attach event listener to the solution button for question 19
function attachSolutionButtonListeners_question19(button) {
    button.addEventListener('click', function() {
        // Reset any previous styles
        document.querySelectorAll('input[name="question19"]').forEach(input => {
            input.parentElement.classList.remove('incorrect', 'highlight');
        });

        // Check the selected answer
        const selected = document.querySelector('input[name="question19"]:checked');
        const correctAnswer = "C";

        if (selected) {
            if (selected.value === correctAnswer) {
                selected.parentElement.classList.add('highlight');
                score++; // Increment score if the answer is correct
            } else {
                selected.parentElement.classList.add('incorrect');
            }
        }

        // Show the solution information
        const solutionInfoElement = document.getElementById('solutionInfo_question19');
        if (solutionInfoElement) {
            if (selected && selected.value === correctAnswer) {
                solutionInfoElement.classList.add('highlight');
                solutionInfoElement.classList.remove('incorrect');
            } else {
                solutionInfoElement.classList.add('incorrect');
                solutionInfoElement.classList.remove('highlight');
                const correctAnswersElement = document.getElementById('correctAnswers_question19');
                if (correctAnswersElement) {
                    correctAnswersElement.style.display = 'block';
                }
            }
            solutionInfoElement.style.display = 'block';
        }

        showFinalScore(); // Function to display the final score
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.solutionButton').forEach(button => {
        attachSolutionButtonListeners_question19(button);
    });
});
