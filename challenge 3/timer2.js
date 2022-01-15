class Timer {
    _durationInSeconds = 0
    _intervalId = null

    get seconds() {
        return this._durationInSeconds % 60;
    }

    get minutes() {
        return Math.floor(this._durationInSeconds / 60) % 60
    }

    get hours() {
        return Math.floor(this._durationInSeconds / (60 * 60))
    }

    getTime() {
        const hoursText = this.hours < 10 ? "0" + this.hours : this.hours.toString();
        const minutesText = this.minutes < 10 ? "0" + this.minutes : this.minutes.toString();
        const secondsText = this.seconds < 10 ? "0" + this.seconds : this.seconds.toString();

        return `${hoursText}:${minutesText}:${secondsText}`
    }

    start(cb) {
        if (this._intervalId) {
            return;
        }
        this._intervalId = setInterval(() => {
            this._durationInSeconds++
            cb()
        }, 1000);
    }

    stop() {
        clearInterval(this._intervalId)
        this._intervalId = null;
    }

    reset(cb) {
        this._durationInSeconds = 0
        cb();
    }
}
