document.addEventListener('DOMContentLoaded', function () {
    // Display browser information
    const browserDetails = document.getElementById('browser-details');
    browserDetails.textContent = `Browser: ${navigator.appName} - Version: ${navigator.appVersion}`;

    //controls
    const openWindowButton = document.getElementById('open-window');
    const closeWindowButton = document.getElementById('close-window');
    const resizeWindowButton = document.getElementById('resize-window');

    let newWindow;

    openWindowButton.addEventListener('click', function () {
        newWindow = window.open('', '', 'width=400,height=400');
        newWindow.document.write("This is a blank page");
    });

    closeWindowButton.addEventListener('click', function () {
        if (newWindow && !newWindow.closed) {
            newWindow.close();
        } else {
            alert("No window is open or the window is already closed.");
        }
    });

    resizeWindowButton.addEventListener('click', function () {
        if (newWindow && !newWindow.closed) {
            newWindow.resizeTo(800, 600);
            newWindow.document.write("This window is resized")
        } else {
            alert("No window is open or the window is already closed.");
        }
    });

    // Timer
    const timerDisplay = document.getElementById('timer-display');
    const startTimerButton = document.getElementById('start-timer');
    const stopTimerButton = document.getElementById('stop-timer');

    let timerInterval;
    let seconds = 0;

    function updateTimer() {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        timerDisplay.textContent = `${hours}:${minutes}:${secs}`;
        seconds++;
    }

    startTimerButton.addEventListener('click', function () {
        if (!timerInterval) {
            timerInterval = setInterval(updateTimer, 1000);
        }
    });

    stopTimerButton.addEventListener('click', function () {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    });

    //tag input
    const htmlTagInput = document.getElementById('html-tag');
    const addTagButton = document.getElementById('add-tag');
    const tagDisplay = document.getElementById('tag-display');

    addTagButton.addEventListener('click', function () {
        const tag = htmlTagInput.value.trim();
        if (tag) {
            tagDisplay.innerHTML = tag;
        }
    });
});
