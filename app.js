// Expanded commands object with descriptions for popular Linux commands
const commands = {
    ls: "author\nprojects\ncv",
    author: "This website was created by John Doe.",
    projects: "1. Project A\n2. Project B\n3. Project C",
    cv: "You can view the CV at: https://www.johndoe.com/cv",
    pwd: "Prints the current working directory. Not implemented yet.",
    cd: "Changes the current directory. Not implemented yet.",
    touch: "Creates a new empty file. Not implemented yet.",
    mkdir: "Creates a new directory. Not implemented yet.",
    rm: "Removes a file or directory. Not implemented yet.",
    cp: "Copies files or directories. Not implemented yet.",
    mv: "Moves or renames files or directories. Not implemented yet.",
    cat: "Concatenates and displays the content of a file. Not implemented yet.",
    man: "Displays the manual for a command. Not implemented yet.",
    echo: "Outputs the text provided as arguments. Not implemented yet.",
    clear: "Clears the terminal screen. Not implemented yet.",
    help: "Displays a list of available commands.",
    whoami: "Displays the current logged-in user. Not implemented yet.",
    uname: "Displays system information. Not implemented yet.",
    top: "Displays the system's resource usage. Not implemented yet.",
    df: "Displays disk space usage. Not implemented yet.",
    ps: "Displays information about running processes. Not implemented yet.",
    date: "Displays the current date and time. Not implemented yet.",
    uptime: "Displays how long the system has been running. Not implemented yet.",
    sudo: "Executes commands as another user, typically root. Not implemented yet.",
    find: "Searches for files and directories. Not implemented yet.",
    grep: "Searches for patterns within files. Not implemented yet.",
};

// Filter the commands that have been implemented
function getImplementedCommands() {
    return Object.keys(commands)
    // return Object.keys(commands).filter(command => !commands[command].includes("Not implemented yet"));
}

// Handle user input and execute commands
function handleCommand(command) {
    let response = "";

    // Check if the command is valid
    if (commands[command]) {
        response = commands[command];
    } else {
        response = `bash: command not found: ${command}`;
    }

    // Display the response in the terminal
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
            if (command === 'help') {
                handleHelpCommand()   
            } else {
                handleCommand(command);
            }
        }

        // Clear the input field
        event.target.value = "";
    }
});

// Focus the input when the page loads
window.onload = function() {
    const outputDiv = document.getElementById("output");
    
    // Initially, simulate typing "welcome to my blog"
    typeText("welcome to my blog", outputDiv, 100);

    // Focus the input field after the typing effect
    setTimeout(() => {
        document.getElementById("command-input").focus();
    }, 2000); // Wait for typing to finish before focusing input
};

// Handle 'help' command dynamically to list only implemented commands
function handleHelpCommand() {
    const implementedCommands = getImplementedCommands();
    let response = "Available commands:\n\n";

    implementedCommands.forEach(command => {
        response += `${command}: ${commands[command]}\n`;
    });

    // Display the response in the terminal
    const outputDiv = document.getElementById("output");
    outputDiv.textContent += `$ help\n${response}\n\n`;

    // Scroll to the bottom of the terminal
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
