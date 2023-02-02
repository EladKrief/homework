class stopWatch {
  startBtn;
  stopBtn;
  time;
  interval;
  constructor() {
    this.time = 0;
    this.startBtn = document.getElementById("start");
    this.startBtn.addEventListener("click", () => {
      this.start();
    });
    this.stopBtn = document.getElementById("stop");
    this.stopBtn.addEventListener("click", () => {
      this.stop();
    });
  }
  start() {
    if (!this.interval) {
      this.interval = setInterval(this.timeRunning.bind(this), 1000);
      console.log("lets go!");
    } else {
      console.log("interval already running");
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null; // restart the interval so line 18 can run without problems.
    console.log("Stopwatch stopped");
  }
  timeRunning() {
    this.time++;
    this.printToBrowser();
  }
  printToBrowser() {
    document.getElementById("liveTimer").innerHTML = this.time;
  }
}
let stopWatch1 = new stopWatch();
