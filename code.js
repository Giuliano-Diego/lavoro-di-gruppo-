// File: /home/utente/Gruppo/lavoro-di-gruppo-/code.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Function to fetch and display status
async function fetchAndDisplayStatus() {
    try {
        const response = await fetch("https://status.epicgames.com/api/v2/status.json");
        const data = await response.json();
        const status = data.status;

        // Display status for each type
        document.getElementById('operational').innerText = status.indicator === 'none' ? 'Operational' : 'Issues';
        document.getElementById('degraded_performance').innerText = status.indicator === 'minor' ? 'Degraded Performance' : 'Operational';
        document.getElementById('partial_outage').innerText = status.indicator === 'major' ? 'Partial Outage' : 'Operational';
        document.getElementById('major_outage').innerText = status.indicator === 'critical' ? 'Major Outage' : 'Operational';
    } catch (error) {
        console.error("Error fetching status:", error);
    }
}

// Call the function to fetch and display status
fetchAndDisplayStatus();