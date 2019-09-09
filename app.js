let container = document.getElementById('container');
let currentGrid = prompt('Pick a number between 1-100');

// Create Divs with users input
if (currentGrid < 0 || currentGrid > 100) {
  alert('error')
} else if (currentGrid <= 100 || currentGrid >= 1) {
  let create = document.createDocumentFragment();
  for (let i = 0; i < currentGrid * currentGrid; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.className = 'dList';
    create.appendChild(newDiv);
  };
  container.appendChild(create);

  // Create appropriate rows and columns
  let style = document.createElement('style');
  style.innerHTML =
    '#container {' +
    `grid-template-columns:repeat(${currentGrid}, 1fr);` +
    `grid-template-rows:repeat(${currentGrid}, 1fr)` +
    '}';
  let ref = document.querySelector('script');
  ref.parentNode.insertBefore(style, ref);
};

// Reset button
let button = document.getElementById('btn').addEventListener('click', function () {
  location.reload(true);
});

// Paint brush
let paintBrush = document.getElementById('btn2').addEventListener('click', function () {
  let style2 = document.createElement('style');
  style2.innerHTML =
    '.dList:hover {' +
      'opacity: 1;' +
      'transition: 1s;' +
    '}';
  let ref2 = document.querySelector('script');
  ref2.parentNode.insertBefore(style2, ref2);
});

// Solid lines
let solid = document.getElementById('btn3').addEventListener('click', function () {
  let style3 = document.createElement('style');
  style3.innerHTML =
    '.dList:hover {' +
      'opacity: 1;' +
      'transition: 0s;' +
    '}';
  let ref3 = document.querySelector('script');
  ref3.parentNode.insertBefore(style3, ref3);
});

// Change color
let changeColor = document.getElementById('btn4').addEventListener('click', function () {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  let style4 = document.createElement('style');
  style4.innerHTML =
    '.dList:hover {' +
      `background-color: ${bgColor}`; +
      'opacity: 1;' +
      'transition: 0.2s;' +
    '}';
  let ref4 = document.querySelector('script');
  ref4.parentNode.insertBefore(style4, ref4);
});

// Black color button
let black = document.getElementById('btn5').addEventListener('click', function () {
  let style5 = document.createElement('style');
  style5.innerHTML =
    '.dList:hover {' +
      'background-color: black;' +
    '}';
  let ref5 = document.querySelector('script');
  ref5.parentNode.insertBefore(style5, ref5);
});