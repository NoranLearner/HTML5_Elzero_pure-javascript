// Create Canvas On Page

var myPageCanvas = document.createElement('canvas');

// Assign ID To This Canvas

myPageCanvas.id = 'c';

// Customize The Canvas

myPageCanvas.width = 600;
myPageCanvas.height = 200;
myPageCanvas.style.display = 'block';
myPageCanvas.style.margin = '50px auto';

// Add Canvas To The Page

document.body.appendChild(myPageCanvas);

// Get Canvas Information

var myCanvas = document.getElementById('c'),

    myContext = myCanvas.getContext('2d');


// Fill And Style Option

myContext.fillStyle = '#080';

myContext.strokeStyle = '#ddd';

myContext.lineWidth = 2;

myContext.font = '50px Arial';


// Add The Text

myContext.fillText('ElZero Web School', 50, 80);

myContext.strokeText('ElZero Web School', 50, 80);


// Add The Second Text

myContext.strokeStyle = 'brown';

myContext.lineWidth = 1;

myContext.strokeText('ElZero Web School', 50, 80);



