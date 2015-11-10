//variables
var photoName = [];
var photoPath = [];
var photoVotes = [];
var randomGenerate = 0;

//photo Object constructor

function Photo(theName, path) {
  this.theName = name;
  this.path = path;
  this.votes = 0;
  photoName.push(this.name);
  photoPath.push(this.path);
  photoVotes.push(this.votes);
}
//create places

var london = new Photo('London', 'images/london.jpg');
var boraBora = new Photo('Bora Bora', 'images/borabora.jpg');
var barcelona = new Photo('Barcelona', 'images/barcelona.jpg');
var paris = new Photo ('Paris', 'images/paris.jpg');
var sydney = new Photo('Sydney', 'images/sydney.jpg');
var newYork = new Photo('New York City', 'images/newyork.jpg');
var maui = new Photo('Maui', 'images/maui.jpg');
var rio = new Photo('Rio de Janeiro', 'images/rio-de-janeiro.jpg');
var capeTown = new Photo('Cape Town', 'images/capetown.jpg');
var sanFran = new Photo('San Francisco', 'images/sanfrancisco.jpg');
var maldives = new Photo('Maldives', 'images/maldives.jpg');
var prague = new Photo('Prague', 'images/prague.jpg');
var yellowStone = new Photo('Yellowstone', 'images/yellowstone.jpg');
var zurich = new Photo('Zurich', 'images/zurich.jpg');
var budapest = new Photo('Budapest', 'images/budapest.jpg');
//Tracker Object constructor

//functions

var randomPhoto = function () {
  randomGenerate = Math.floor(Math.random() * photoName.length);
  console.log (randomGenerate);
  return randomGenerate;
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
  var displayphoto1 = document.getElementById('photoholder1');
  displayphoto1.appendChild(newImage1);

  var newImage2 = new Image(300, 300);
  newImage2.src = photoPath[photo2];
  var displayphoto2 = document.getElementById('photoholder2');
  displayphoto2.appendChild(newImage2);
}


//code

display();



