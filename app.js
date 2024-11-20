// Commands that will be recognized by the terminal
const commands = {
    ls: "author\nprojects\ncv",
    author: "This website was created by John Doe.",
    projects: "1. Project A\n2. Project B\n3. Project C",
    cv: "You can view the CV at: https://www.johndoe.com/cv",
};

function handleCommand(command) {
    let response = "";

    if (commands[command]) {
        response = commands[command];
    } else {
        response = `bash: command not found: ${command}`;
    }

    const outputDiv = document.getElementById("output");
    outputDiv.textContent += `$ ${command}\n${response}\n\n`;

    // Scroll to the bottom of the terminal
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Function to simulate typing effect
function typeText(text, element, delay = 100) {
    let index = 0;

    function typeChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, delay);
        }
    }

    typeChar();
}

// Handle keypress event in the input field
document.getElementById("command-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Get the command from input
        const command = event.target.value.trim();

        if (command) {
            // Handle the entered command
            handleCommand(command);
        }

        // Clear the input field
        event.target.value = "";
    }
});

// Focus the input when the page loads
window.onload = function() {
    const outputDiv = document.getElementById("output");
    typeText("Dear Guest, welcome to my blog. Please type 'ls' to see available commands.", outputDiv, 100);
    setTimeout(() => {
        document.getElementById("command-input").focus();
    }, 2000);
};
