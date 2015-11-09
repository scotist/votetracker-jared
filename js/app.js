//variables
var photoName = ['London', 'Bora Bora', 'Barcelona', 'Paris', 'Sydney', 'New York City', 'Maui', 'Rio de Janeiro', 'Cape Town', 'San Francisco','Maldives', 'Prague', 'Yellowstone','Zurich', 'Budapest'];
var photoPaths = [];
var randomGenerate = 0;

//functions

var randomPhoto = function () {
  randomGenerate = Math.floor(Math.random() * photos.length);
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
    photo1 = photos[photo1];
    photo2 = photos[photo2];
    var newPhoto1 = document.createElement('p'); //change p to img and place
    var newOutput = document.createTextNode(photo1);
    newPhoto1.appendChild(newOutput);
    document.body.appendChild(newPhoto1);
    var newPhoto2 = document.createElement('p');
    var newOutput = document.createTextNode(photo2);
    newPhoto2.appendChild(newOutput);
    document.body.appendChild(newPhoto2);
}
display();

//photo Object constructor

//Tracker Object constructor


//for loop for creating all photo objects using the photoName array
