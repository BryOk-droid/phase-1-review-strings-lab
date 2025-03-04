// Write your code in this file!
// Define the current user
const currentUser = "Grace Hopper";

// Construct the welcome message using template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create the excited version of the welcome message
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting using only the first letter of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
