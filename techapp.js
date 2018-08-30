//ARRAYS-------------------------------------------------------------------->
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
const problem = {Projector: ["Is the light green?", "Is there a blue screen?", "Projector is off"],
                 Computer: ["Is it a seminary issued laptop?", "Is it powered on?", "Can't connect to the internet?"],
                 Screen: ["Is your computer plugged in?", "Is the screen blue?"],
                 Audio: ["Is the cable plugged in?", "Is your computer muted?", "Is the Crestron muted?"],
                 Video: ["Is the projector on?", "Are you plugged in?"],
                 Power: ["Are the desks connected?"],
                 PlayDisc: ["Are you using a BluRay Player?", "Are you using your computer?"],
                 Adapter: ["Have you checked to see if your computer can plug straight in?"]
               }
const projectorProblems = {"Is the light green?": "If the light is red, the projector may have experienced a malfunction and will need to be taken down. In this situation, there is little that can be done with any immediacy. If a technician is in the office, he or she can bring a temporary projector and set it up on a table near the front of the room.",
                          "Is there a blue screen": "If the screen is blue, a cable has disconnected from the back of the lecturn. Unfortunately, there is nothing that can be done at the moment.",
                          "Projector is off": ["The projector is controlled by the Crestron touch screen in the lecturn. A simple restart should resync the two. If that doesn't work, unfortunately there is nothing that can be done at the moment.", "If you cannot find a remote in your classroom, there's good chance that a neighboring classroom might have one. You may also consider powering the device by hand. Just push the power button on the projector."]}
const probProjector = problem['Projector'];
const probComputer = problem['Computer'];
const probScreen = problem['Screen'];
const probAudio = problem['Audio'];
const probVideo = problem['Video'];
const probPower = problem['Power'];
const probPlayDisc = problem['PlayDisc'];
const probAdapter = problem['Adapter'];
var keys = Object.keys(problem);//get keys

//DOM OBJECTS---------------------------------------------------------------->
const selectBuilding = document.querySelector('#buildop');
const selectProblem = document.querySelector('#probop');
const selectRoom = document.querySelector('#roomop');
const roomForm = document.querySelector('#roomform');
const probForm = document.querySelector('#probform');
const suggestionDiv = document.querySelector('#suggestion-div');
const suggestionUl = document.querySelector('#suggestion-ul');
console.log(suggestionUl);
const menuDiv = document.querySelector('#menu-div svg');
const menuItems = document.querySelector('#menu-items');
const solutionDiv = document.querySelector('#solution-content-div');


//ROOM AND BUILDING FUNCTIONS-------------------------------------------------->
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
callBuildingName();//populate Building selector

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
  selectProblem.innerHTML = "<option></option>";
  for (var i = 0; i < keys.length; i++){
    var problemOption = keys[i];//grab problem
    var problemMenu = document.createElement('option'); // create <option>
    var problemText = document.createTextNode(problemOption); //create text from problem[i]
    problemMenu.appendChild(problemText); //append problem text to <option>
    selectProblem.appendChild(problemMenu);//append <option> to id="roomop"
  }//close loop
}//end function


//BUILDING AND ROOM MENU CONTROLLER--------------------------------------------->
function buildingSelection() {
      var choice = selectBuilding.value;
      //var choice = document.forms[0].buildop.value;
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
selectBuilding.addEventListener('change', buildingSelection);//Listen for selection

//PROBLEM MENU CONTROLLER---------------------------------------------------->
function roomSelection() {
  var choice2 = document.forms[1].roomop.value;
  probForm.style.display = "inline-flex";
  if (choice2 === "") {
    probForm.style.display = "none";
  } else {
      callProblem();
  }//end conditional
}//end function
selectRoom.addEventListener('change', roomSelection);//Listen for selection

//SUGGESTION OPTIONS FOR LOOP FUNCTION------------>
function createProblemListItems(e) {
  var probText = e;
  var probAnchor = document.createElement('a');
  var probLI = document.createElement('li');
  var probTextOp = document.createTextNode(probText);
  probLI.className = "clickable";
  probLI.appendChild(probTextOp);
  suggestionUl.appendChild(probLI);
}//end function

//RESET UL SUGGESTION OPTIONS---------------------->
function resetUL() {
  suggestionDiv.style.display = "block";
  suggestionUl.innerHTML = "";
}

// SUGGESTION OPTIONS CONTROLLER---------------------------------->
function probSelection() {
  var choice1 = document.forms[0].buildop.value;
  var choice2 = document.forms[1].roomop.value;
  var choice3 = document.forms[2].probop.value;
  if (choice3 === "") {
    suggestionDiv.style.display = "none";
  } else if (choice3 === "Projector" && choice1 === "Norton"){
    resetUL();//function on line 174ff
    for (var i = 0; i < probProjector.length; ++i){
      createProblemListItems(probProjector[i]);
    }//close for-loop 1
    appendProblemSuggest("There is nothing that can be done right now"); //defined on line 234ff.
  } else if (choice3 === "Computer"){
    resetUL();
    for (var i = 0; i < probComputer.length; ++i){
      createProblemListItems(probComputer[i]);
    }//close for-loop 2
  } else if (choice3 === "Screen"){
    resetUL();
    for (var i = 0; i < probScreen.length; ++i){
      createProblemListItems(probScreen[i]);
    }//close for-loop 3
  } else if (choice3 === "Audio"){
    resetUL();
    for (var i = 0; i < probAudio.length; ++i){
      createProblemListItems(probAudio[i]);
    }//close for-loop 4
  } else if (choice3 === "Video"){
    resetUL();
    for (var i = 0; i < probVideo.length; ++i){
      createProblemListItems(probVideo[i]);
    }//close for-loop 5
  } else if (choice3 === "Power"){
    resetUL();
    for (var i = 0; i < probPower.length; ++i){
      createProblemListItems(probPower[i]);
    }//close for-loop 6
  } else if (choice3 === "PlayDisc"){
    resetUL();
    for (var i = 0; i < probPlayDisc.length; ++i){
      createProblemListItems(probPlayDisc[i]);
    }//close for-loop 7
  } else if (choice3 === "Adapter"){
    resetUL();
    for (var i = 0; i < probAdapter.length; ++i){
      createProblemListItems(probAdapter[i]);
    }//close for-loop 8
  }//close conditional
} //end function
selectProblem.addEventListener('change', probSelection);//Listen for problem selection

//EXPAND PROBLEM SOLUTION PARAGRAPHS-------------------------->
function appendProblemSuggest(text) { //called at line 193ff.
  if (suggestionUl.value !== "null") {
        suggestionUl.childNodes[0].addEventListener('click', ()=>{
            var paragraph = document.createElement('p');
            var paragraphText = document.createTextNode(text);
            paragraph.appendChild(paragraphText);
            solutionDiv.appendChild(paragraph);
            solutionDiv.style.display = "block";
        })//end click handler 1
  }//end conditional 1
  window.addEventListener('scroll', ()=> {//REWORK THIS HANDLER<<<<<<<<
    solutionDiv.innerHTML = "";
    solutionDiv.style.display = "none";
  })//end scroll handler
}//end function

//MENU EXPAND----------------------------------------------------------->
$('svg').click(function(){
    $('.menu-items-view').slideToggle(800);
})//end toggle click handler
$('#menu-div svg').on("click", function (event) {
    $('.svg').toggleClass('rotate');
    $('.svg').toggleClass('rotate-reset');
});//end animation click handler
// $(window).scroll(function() {
//   $('.menu-items-view').slideUp(200);
// })
