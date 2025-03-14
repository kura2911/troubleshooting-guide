document.getElementById('submitButton').addEventListener('click', function() {
    const problem = document.getElementById('problemInput').value;

    // Simulate a response from your Java program
    const solution = "Solution for: " + problem; // This would normally be fetched from your Java backend
    document.getElementById('solutionOutput').innerText = solution; // Display the solution
});
