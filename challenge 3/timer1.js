class Timer {
    seconds = 0
    minutes = 0
    hours = 0
    _intervalId = null

    getTime() {
        const hoursText = this.hours < 10 ? "0" + this.hours : this.hours.toString();
        const minutesText = this.minutes < 10 ? "0" + this.minutes : this.minutes.toString();
        const secondsText = this.seconds < 10 ? "0" + this.seconds : this.seconds.toString();

        return `${hoursText}:${minutesText}:${secondsText}`
    }

    _addOneSecond() {
        this.seconds++

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }

        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
    }

    start(cb) {
        if (this._intervalId) {
            return;
        }
        this._intervalId = setInterval(() => {
            this._addOneSecond();
            cb()
        }, 1000);
    }

    stop() {
        clearInterval(this._intervalId)
        this._intervalId = null;
    }

    reset(cb) {
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
        cb();
    }
}
