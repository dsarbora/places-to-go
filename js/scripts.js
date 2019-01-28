// ### Business / Back-End Logic  for Place Book-----------
function PlaceBook(){
  this.places=[]
  this.currentId= 0
};

PlaceBook.prototype.addPlace = function(place){
  place.id = this.assignId();
  this.places.push(place);
};

PlaceBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlaceBook.prototype.findPlace = function(id){
  for(var i = 0; i < this.places.length; i++){
    if(this.places[i].id == id){
      return this.places[i]
    }
  };
  return false;
}

//Back end logic for Place Object
function Place(name, location, landmarks, timeOfYear, notes){
  this.name = name,
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
};

// ### User / Front-End Logic -----------
placeBook = new PlaceBook();

function displayPlaceDetails(placeBookToDisplay){
  var placesList = $("ul#places");
  var htmlForPlaceInfo = "";
  placeBookToDisplay.places.forEach(function(place){
    htmlForPlaceInfo += "<li id =" + place.id + ">" + place.name + /*" " + place.location + " " + place.landmarks + " " + place.timeOfYear + " " + place.notes + */"</li>";
  });
  placesList.html(htmlForPlaceInfo);
};

function showPlace(placeId) {
  var place = placeBook.findPlace(placeId);
  $("#show-place").show();
  $(".name").html(" " + place.name);
  $(".location").html(" " + place.location);
  $(".landmarks").html(" " + place.landmarks);
  $(".timeOfYear").html(" " + place.timeOfYear);
  $(".notes").html(" " + place.notes);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class = 'deleteButton' id=" +place.id + ">Delete</button>");
}

function attachPlaceListeners(){
  $("ul#places").on("click", "li", function(){
    showPlace(this.id);
  });
};


$(document).ready(function() {
  attachPlaceListeners();
  $("#placeForm").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    var location = $("#location").val();
    var landmarks = $("#landmarks").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();
    var place = new Place(name, location, landmarks, timeOfYear, notes);
    placeBook.addPlace(place);
    displayPlaceDetails(placeBook);
  }); //end submit function





}); //end doc ready function
