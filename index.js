const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
  bodyColorInit: window.getComputedStyle(document.body)["backgroundColor"],
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

class ColorPicker {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.onTick();
    }, 1000);
    this.isActive = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.body.style.backgroundColor = refs.bodyColorInit;
  }
}

const updateColor = () => {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// event listeners
refs.startBtn.addEventListener("click", () => {
  colorPicker.start();
});
refs.stopBtn.addEventListener("click", () => {
  colorPicker.stop();
});

const colorPicker = new ColorPicker({
  onTick: updateColor,
});
