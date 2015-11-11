//variables
var allPhotos = [];
var randomGenerate;
var displayphoto1 = document.getElementById('photoholder1');
var displayphoto2 = document.getElementById('photoholder2');
var photo1;
var photo2;

//photo Object constructor

function Photo(theName, path) {
  this.theName = theName;
  this.path = path;
  this.votes = 0;
  allPhotos.push(this);
}

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
// function VoteTracker() {

// }
//functions to change into methods of the tracker functions

randomPhoto = function () {
  randomGenerate = Math.floor(Math.random() * allPhotos.length);
  console.log (randomGenerate);
  return randomGenerate;
}

display = function () {
  photo1 = randomPhoto();
  photo2 = randomPhoto();

  while (photo1 === photo2) {
    photo1 = randomPhoto();
    photo2 = randomPhoto();
  }

  var newImage1 = new Image(300, 300);
  newImage1.src = allPhotos[photo1].path;
  newImage1.id = 'left';
  displayphoto1.appendChild(newImage1);

  var newImage2 = new Image(300, 300);
  newImage2.src = allPhotos[photo2].path;
  newImage2.id = 'right';
  displayphoto2.appendChild(newImage2);


}


refreshPhotos = function () {
  photo1 = randomPhoto();
  photo2 = randomPhoto();

  while (photo1 === photo2) {
    photo1 = randomPhoto();
    photo2 = randomPhoto();
  }
  var getLeft = document.getElementById('left');
  var getRight = document.getElementById('right');
  getLeft.src = allPhotos[photo1].path;
  getRight.src = allPhotos[photo2].path;



}

var pieVotes = [];
  var pieLabels = [];

  for (var i = 0; i < allPhotos.length; i++) {
    pieVotes.push(allPhotos[i].votes);
    pieLabels.push(allPhotos[i].theName);
  }
  console.log(pieVotes, pieLabels);

function randomColor() {
  var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  var result= "#";
  for (var i = 0; i < 6; i++) {
    result += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }
  return result;
}

var pieData = [];
  for (var i in pieLabels) {
    pieData.push({
      value: pieVotes[i],
      label: pieLabels[i],
      color: randomColor(),
      highlight: "#eeeeee"
    })
  }

displayphoto1.addEventListener('click', function () {
  allPhotos[photo1].votes++;
  refreshPhotos();
  console.log(allPhotos[photo1]);
});
displayphoto2.addEventListener('click', function () {
  allPhotos[photo2].votes++;
  refreshPhotos();
  console.log(allPhotos[photo2]);
});

//takes selected photo and highlights it

display();





  var myChart = document.getElementById("canvas").getContext("2d");
  new Chart(myChart).Pie(pieData);

// VoteTracker.protoype.pieChart = function(){

// };

// //code
// // put everything after intitial load into an event listener connected to a "Play Again" button
// VoteTracker.display();// move this to inside a while loop that calls all methods.



