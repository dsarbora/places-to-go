// ### Business / Back-End Logic  for Place Book-----------
function PlaceBook(){
  this.places=[]
};

PlaceBook.prototype.addPlace = function(place){
  this.places.push(place);
}


//Back end logic for Place Object
function Place(location, landmarks, timeOfYear, notes){
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
};

// ### User / Front-End Logic -----------
$(document).ready(function() {

});
