class Timer {
    _startTime = null
    _stopTime = null
    _intervalId = null

    get _durationInSeconds() {
        let resultInMilliseconds = 0
        if (!this._startTime) {
            return 0;
        }
        if (!this._stopTime) {
            resultInMilliseconds = new Date() - this._startTime;
        } else {
            resultInMilliseconds = this._stopTime - this,this._startTime
        }
        return Math.floor(resultInMilliseconds / 1000)
    }

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
        this._stopTime = null;
        if (!this._startTime) {
            this._startTime = new Date();
        }
        this._intervalId = setInterval(() => {
            cb()
        }, 1000);
    }

    stop() {
        this._stopTime = new Date();
        clearInterval(this._intervalId)
        this._intervalId = null;
    }

    reset(cb) {
        this._startTime = null;
        this._stopTime = null;
        cb();
    }
}
