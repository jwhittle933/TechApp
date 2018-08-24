//ARRAYS
const building = {Norton: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        101, 102, 103, 104, 105, 195, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232],
                  Carver: [135, 108],
                  Rankin: [101, 201],
                  Library: ["Crsimon", "Curriculum Lab", "Mullins Room"]};
const buildingName = Object.keys(building);
const nortonRooms = building.Norton;
const carverRooms = building.Carver;
const rankinRooms = building.Rankin;
const libraryRooms = building.Library;

//CONST roomNorton
const problem = {Projector: ["Is the light green?", "Is there a blue screen"],
                 Computer: ["Is it a seminary issued laptop?", "Is it powered on?"],
                 Screen: ["Is your computer plugged in?", "Is the screen blue?"],
                 Audio: ["Is the cable plugged in?", "Is your computer muted?", "Is the Crestron muted?"],
                 Video: ["Is the projector on?", "Are you plugged in?"],
                 Power: ["Are the desks connected?"],
                 PlayDisc: ["Are you using a BluRay Player?"]};
var keys = Object.keys(problem);//get keys

//DOM OBJECTS
const selectBuilding = document.querySelector('#buildop');
const selectProblem = document.querySelector('#probop');
const selectRoom = document.querySelector('#roomop');


//ROOM AND BUILDING FUNCTIONS
  //CREATE BUILDING MENU
function callBuildingName() {
  for (var i = 0; i < buildingName.length; i++) {
    var buildMenu = buildingName[i];//grab building names
    var buildOption = document.createElement('option'); //create <option>
    var buildText = document.createTextNode(buildMenu);//create text from buildingName[i]
    buildOption.appendChild(buildText);//append building text to <option>
    selectBuilding.appendChild(buildOption);//append <option> to id="buildop"
  }//close loop
}//end function
callBuildingName();

  //CREATE NORTON ROOM MENU
function callNortonRooms() {
  for (var i = 0; i < nortonRooms.length; i++){
    var optionRoomMenu = nortonRooms[i];//grab room numbers
    var roomMenu = document.createElement('option'); // create <option>
    var roomText = document.createTextNode(optionRoomMenu); //create text from roomNorton[i]
    roomMenu.appendChild(roomText); //append room text to <option>
    selectRoom.appendChild(roomMenu);//append <option> to id="roomop"
    selectRoom.style.display = "block";
  }//close loop
}//end function

  //CREATE CARVER ROOM MENU
function callCarverRooms() {
  for (var i = 0; i < carverRooms.length; i++){
    var optionRoomMenu = carverRooms[i];//grab room numbers
    var roomMenu = document.createElement('option'); // create <option>
    var roomText = document.createTextNode(optionRoomMenu); //create text from roomNorton[i]
    roomMenu.appendChild(roomText); //append room text to <option>
    selectRoom.appendChild(roomMenu);//append <option> to id="roomop"
    selectRoom.style.display = "block";
  }//close loop
}//end function

  //CREATE RANKIN ROOM MENU
function callRankinRooms() {
  for (var i = 0; i < rankinRooms.length; i++){
    var optionRoomMenu = rankinRooms[i];//grab room numbers
    var roomMenu = document.createElement('option'); // create <option>
    var roomText = document.createTextNode(optionRoomMenu); //create text from roomNorton[i]
    roomMenu.appendChild(roomText); //append room text to <option>
    selectRoom.appendChild(roomMenu);//append <option> to id="roomop"
    selectRoom.style.display = "block";
  }//close loop
}//end function

  //CREATE LIBRARY ROOM MENU
function callLibraryRooms() {
  for (var i = 0; i < libraryRooms.length; i++){
    var optionRoomMenu = libraryRooms[i];//grab room numbers
    var roomMenu = document.createElement('option'); // create <option>
    var roomText = document.createTextNode(optionRoomMenu); //create text from roomNorton[i]
    roomMenu.appendChild(roomText); //append room text to <option>
    selectRoom.appendChild(roomMenu);//append <option> to id="roomop"
    selectRoom.style.display = "block";
  }//close loop
}//end function

//CREATE PROBLEM MENU
function callProblem() {
  for (var i = 0; i < keys.length; i++){
    var problemOption = keys[i];//grab problem
    var problemMenu = document.createElement('option'); // create <option>
    var problemText = document.createTextNode(problemOption); //create text from problem[i]
    problemMenu.appendChild(problemText); //append problem text to <option>
    selectProblem.appendChild(problemMenu);//append <option> to id="roomop"
  }//close loop
}//end function

//BUILDING AND ROOM CONDITIONALS
  //RETURN SELECTION TEXT VALUE
function buildingSelection() {
    var choice = document.forms[0].buildop.value;
    if (choice === "Norton") {
      //let nortSelect = document.querySelector('#roomform');
      //nortSelect.style.display = "block";
      callNortonRooms();
    } else if (choice === "Carver"){
      let carvSelect = document.querySelector('#roomform');
      carvSelect.style.display = "block";
      callCarverRooms();
    } else if (choice === "Rankin") {
      let rankSelect = document.querySelector('#roomform');
      rankSelect.style.display = "block";
      callRankinRooms();
    } else if (choice === "Library"){
      let libSelect = document.querySelector('#roomform');
      libSelect.style.display = "block";
      callLibraryRooms();
    }
    console.log(choice);
}//end function
