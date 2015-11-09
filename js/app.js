//variables
var photoName = ['London', 'Bora Bora', 'Barcelona', 'Paris', 'Sydney', 'New York City', 'Maui', 'Rio de Janeiro', 'Cape Town', 'San Francisco','Maldives', 'Prague', 'Yellowstone','Zurich', 'Budapest'];
var photoPath = ['images/london.jpg', 'images/borabora.jpg', 'images/barcelona.jpg', 'images/paris.jpg', 'images/sydney.jpg', 'images/newyork.jpg', 'images/maui.jpg', 'images/rio-de-janeiro.jpg', 'images/capetown.jpg', 'images/sanfrancisco.jpg', 'images/maldives.jpg', 'images/praque.jpg', 'images/yellowstone.jpg', 'images/zurich.jpg', 'images/budapest.jpg'];
var randomGenerate = 0;

//functions

var randomPhoto = function () {
  randomGenerate = Math.floor(Math.random() * photoName.length);
  console.log (randomGenerate); // this should get a random number between 0 and the array length
  return randomGenerate;// change the array name
}

var display = function () { //if working need to convert to displaying images
  var photo1 = randomPhoto();
  var photo2 = randomPhoto();

  while (photo1 === photo2) {
    photo1 = randomPhoto();
    photo2 = randomPhoto();
  }

  var newImage1 = new Image(300, 300);
  newImage1.src = photoPath[photo1];
  console.log(newImage1);
  var displayphoto1 = document.getElementById('photoholder1');
  displayphoto1.appendChild(newImage1);

  var newImage2 = new Image(300, 300);
  newImage2.src = photoPath[photo2];
  console.log(newImage2);
  var displayphoto2 = document.getElementById('photoholder2');
  displayphoto2.appendChild(newImage2);
}

display();

//photo Object constructor

//Tracker Object constructor


//for loop for creating all photo objects using the photoName array
