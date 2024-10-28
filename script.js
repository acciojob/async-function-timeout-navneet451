document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    let textInput = document.getElementById("text");
    let delayInput = document.getElementById("delay");
    let btn = document.getElementById("btn");
    let outputDiv = document.getElementById("output");

    // Async function to handle the delay and display text
    async function displayText() {
        // Retrieve values from inputs
        const text = textInput.value;
        const delay = parseInt(delayInput.value);

        // Validate the delay value
        if (isNaN(delay) || delay < 0) {
            outputDiv.textContent = 'Please enter a valid delay in milliseconds.';
            return;
        }

        // Clear output div before displaying new message
        outputDiv.textContent = '';

        // Create a promise that resolves after the specified delay
        await new Promise((resolve) => setTimeout(resolve, delay));

        // Display the text after the delay
        outputDiv.textContent = text;
    }

    // Add event listener for the button click
    btn.addEventListener("click", displayText);
});
