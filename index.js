
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const selectColor = (colorsArray) => {
setInterval(function(){
return colorsArray[randomIntegerFromInterval(0, colorsArray.length-1)];
}, 1000)
};


selectColor(colors);
