// Initialize variables for tracking time and interval
let startTime = 0;  // Time when the timer starts
let elapsedTime = 0;  // Elapsed time since the timer started
let timerInterval;  // Interval ID for updating the display

// Get references to start and stop buttons
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");

// Function to start the timer
function startTimer() {
    // Set the start time to the current time minus the elapsed time
    startTime = Date.now() - elapsedTime;

    // Update the display every 10 milliseconds
    timerInterval = setInterval(function () {
        // Calculate the elapsed time
        elapsedTime = Date.now() - startTime;

        // Update the display with the formatted time
        display.textContent = formatTime(elapsedTime);
    }, 10);

    // Disable the start button, enable the stop button
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Function to stop the timer
function stopTimer() {
    // Clear the interval to stop updating the display
    clearInterval(timerInterval);

    // Enable the start button, disable the stop button
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Function to reset the timer
function resetTimer() {
    // Clear the interval
    clearInterval(timerInterval);

    // Reset elapsed time and update the display
    elapsedTime = 0;
    display.textContent = "00:00:00.00";

    // Enable the start button, disable the stop button
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Function to format the elapsed time in HH:mm:ss.SS format
function formatTime(time) {
    const ms = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(time / (1000 * 60 * 60));

    const formattedHours = hours > 9 ? hours : "0" + hours;
    const formattedMinutes = minutes > 9 ? minutes : "0" + minutes;
    const formattedSeconds = seconds > 9 ? seconds : "0" + seconds;
    const formattedMs = ms > 9 ? ms : "0" + ms;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMs}`;
}
