/*
Loïs GALLAUD
Chronometer application
*/

// Chronometer object
const Chronometer = {
    // Chronometer's time
    time: 0,
    // Chronometer's interval
    interval: null,
    // Chronometer's status
    status: false,
    // Chronometer's start
    start() {
        if (this.status === false) {
            this.interval = setInterval(() => {
                this.time++;
                this.display();
            }, 10);
            this.status = true;
        }
    },
    // Chronometer's stop
    stop() {
        if (this.status === true) {
            clearInterval(this.interval);
            this.status = false;
        }
    },
    // Chronometer's reset
    reset() {
        this.stop();
        this.time = 0;
        this.display();
    },
    // Chronometer's display
    display() {
        let minutes = Math.floor(this.time / 6000);
        let seconds = Math.floor(this.time / 100) - (minutes * 60);
        let centiseconds = this.time - (seconds * 100) - (minutes * 6000);
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        if (centiseconds < 10) {
            centiseconds = `0${centiseconds}`;
        }
        console.log(`${minutes}:${seconds}:${centiseconds}`);
    }
}

let chrono = Chronometer;
chrono.start();