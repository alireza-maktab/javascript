const timeContainer = document.getElementById('time')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

const timer = new Timer();

function updateTime() {
    timeContainer.innerText = timer.getTime();
}

function start() {
    timer.start(updateTime);
}

function stop() {
    timer.stop();
}

function reset() {
    timer.reset(updateTime);
}

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
resetButton.addEventListener('click', reset)


