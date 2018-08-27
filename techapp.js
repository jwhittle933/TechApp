//ARRAYS---------------------------------------------->
const building = {Norton: ["", 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        101, 102, 103, 104, 105, 195, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232],
                  Carver: ["", 135, 108],
                  Rankin: ["", 101, 201],
                  Library: ["", "Crismon", "Curriculum Lab", "Mullins Room"]};
const buildingName = Object.keys(building);
const nortonRooms = building.Norton;
const carverRooms = building.Carver;
const rankinRooms = building.Rankin;
const libraryRooms = building.Library;
const problem = {Projector: ["Is the light green?", "Is there a blue screen"],
                 Computer: ["Is it a seminary issued laptop?", "Is it powered on?"],
                 Screen: ["Is your computer plugged in?", "Is the screen blue?"],
                 Audio: ["Is the cable plugged in?", "Is your computer muted?", "Is the Crestron muted?"],
                 Video: ["Is the projector on?", "Are you plugged in?"],
                 Power: ["Are the desks connected?"],
                 PlayDisc: ["Are you using a BluRay Player?"],
                 Adapter: ["Have you checked to see if your computer can plug straight in?"]
               };
const probProjector = problem['Projector'];
const probComputer = problem['Computer'];
const probScreen = problem['Screen'];
const probAudio = problem['Audio'];
const probVideo = problem['Video'];
const probPower = problem['Power'];
const probPlayDisc = problem['PlayDisc'];
const probAdapter = problem['Adapter'];
console.log(probProjector);
var keys = Object.keys(problem);//get keys

//DOM OBJECTS--------------------------------------------------->
const selectBuilding = document.querySelector('#buildop');
const selectProblem = document.querySelector('#probop');
const selectRoom = document.querySelector('#roomop');
const roomForm = document.querySelector('#roomform');
const probForm = document.querySelector('#probform');
const suggestionDiv = document.querySelector('#suggestion-div');
const suggestionUl = document.querySelector('#suggestion-ul');


//ROOM AND BUILDING FUNCTIONS------------------------------------>
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

//BUILDING AND ROOM MENU CONTROLLER--------------------------------->
function buildingSelection() {
    var choice = document.forms[0].buildop.value;
    console.log(choice);
    //var choice2 =  document.forms[1].probop.value;
    if (choice === "") {
      roomForm.style.display = "none";
      probForm.style.display = "none";
      suggestionDiv.style.display = "none";
    } if (choice === "Norton") {
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callNortonRooms();
    } else if (choice === "Carver"){
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callCarverRooms();
    } else if (choice === "Rankin") {
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callRankinRooms();
    } else if (choice === "Library"){
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callLibraryRooms();
    }//end conditional
}//end function

//PROBLEM MENU CONTROLLER--------------------------------------->
function roomSelection() {
  var choice2 = document.forms[1].roomop.value;
  console.log(choice2);
  probForm.style.display = "inline-flex";
  if (choice2 === "") {
    probForm.style.display = "none";
  } else {
      selectProblem.innerHTML = "";
      var blankOp = document.createElement('option');
      var opText = document.createTextNode('');
      blankOp.appendChild(opText);
      selectProblem.appendChild(blankOp);
      callProblem();
  }//end conditional
}//end function


// SUGGESTION OPTIONS CONTROLLER---------------------------------->
function probSelection() {
  var choice = document.forms[0].buildop.value;
  var choice2 = document.forms[1].roomop.value;
  var choice3 = document.forms[2].probop.value;
  console.log(choice3);
  if (choice3 === "") {
    suggestionDiv.style.display = "none";
  } else if (choice3 === "Projector"){
    suggestionDiv.style.display = "block";
    for (var i = 0; i <= probProjector.length; i++){
      var probText = probProjector[i];
      var probLI = document.createElement('li');
      var probTextOp = document.createTextNode(probText);
      probLI.appendChild(probTextOp);
      suggestionUl.appendChild(probLI);
    }//close for loop 1
  } else if (choice3 === "Computer"){
    suggestionDiv.style.display = "block";
  } else if (choice3 === "Screen"){
    suggestionDiv.style.display = "block";
  } else if (choice3 === "Audio"){
    suggestionDiv.style.display = "block";
  } else if (choice3 === "Video"){
    suggestionDiv.style.display = "block";
  } else if (choice3 === "Power"){
    suggestionDiv.style.display = "block";
  } else if (choice3 === "PlayDisc"){
    suggestionDiv.style.display = "block";
  } else if (choice3 === "Adapter"){
    suggestionDiv.style.display = "block";
  }
} //end function
