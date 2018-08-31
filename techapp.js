//ARRAYS-------------------------------------------------------------------->
var building = {Norton: ["", 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        101, 102, 103, 104, 105, 195, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232],
                  Carver: ["", 108, 135],
                  Rankin: ["", 101, 201],
                  Library: ["", "Crismon", "Curriculum Lab", "Mullins Room"]};
var buildingName = Object.keys(building);
var nortonRooms = building.Norton;
var carverRooms = building.Carver;
var rankinRooms = building.Rankin;
var libraryRooms = building.Library;
var problem = {Projector: ["Is the light green?", "Is there a blue screen?", "Projector is off?"],
                 Computer: ["Is it a seminary issued laptop?", "Is it powered on?", "Can't connect to the internet?"],
                 Screen: ["Is your computer plugged in?", "Is the screen blue?"],
                 Audio: ["Is the cable plugged in?", "Is your computer muted?", "Is the Crestron muted?"],
                 Video: ["Is the projector on?", "Are you plugged in?"],
                 Power: ["Are the desks connected?"],
                 PlayDisc: ["Are you using a BluRay Player?", "Are you using your computer?"],
                 Adapter: ["Does your computer plug straight in?"],
                 AppleTV: ["Is it on but won't connect?", "Is your computer not detecting the device?"]
                }
var nortonProjectorProblems = {11: "The projector system in most of basement rooms in Norton has two inputs: HDMI(small and thin) and VGA(slightly larger). Check the wall jack to make sure that it has not been damaged. These rooms also reqire a remote to power on the projector. If one is not present, check the surrounding rooms as there is sure to be one present. Also, you may reach up and manually push the power button on the remote.",
                                12: "This room contains an Extron room control systems. The touch panel on the lecturn controls the projector and inputs. To turn the projector on, select Room Controls on the touch screen and then select from the Apple TV or wall jack inputs. Selection of eiter should turn the projector on for you. The wall jack inputs are automatic and will detect your computer. If you are connected but there is no video, check the cable in the wall to make sure it's inserted completely.",
                                13: "Room 13 contains a short throw projector, situated right above the white board. You can connect to this projector the same way as many of the other rooms, by plugging your computer into the wall jack. If youa are plugged in and there is still no video (the screen will be blue), check the cable in the wall to make sure its plugged all the way in.",
                                15: "The projector system in most of basement rooms in Norton has two inputs: HDMI(small and thin) and VGA(slightly larger). Check the wall jack to make sure that it has not been damaged. These rooms also reqire a remote to power on the projector. If one is not present, check the surrounding rooms as there is sure to be one present. Also, you may reach up and manually push the power button on the remote.",
                                16: "This room contains an Extron room control systems. The touch panel on the lecturn controls the projector and inputs. To turn the projector on, select Room Controls on the touch screen and then select from the Apple TV or wall jack inputs. Selection of eiter should turn the projector on for you. The wall jack inputs are automatic and will detect your computer. If you are connected but there is no video, check the cable in the wall to make sure it's inserted completely.",
                                17: "The projector system in most of basement rooms in Norton has two inputs: HDMI(small and thin) and VGA(slightly larger). Check the wall jack to make sure that it has not been damaged. These rooms also reqire a remote to power on the projector. If one is not present, check the surrounding rooms as there is sure to be one present. Also, you may reach up and manually push the power button on the remote.",
                                20: "The projector system in most of basement rooms in Norton has two inputs: HDMI(small and thin) and VGA(slightly larger). Check the wall jack to make sure that it has not been damaged. These rooms also reqire a remote to power on the projector. If one is not present, check the surrounding rooms as there is sure to be one present. Also, you may reach up and manually push the power button on the remote.",
                                101: "Room 101 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                102: "Room 102 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                103: "Room 103 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                104: "Room 104 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                105: "Room 104 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                201: "Room 201 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                202: "Room 202 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                203: "Room 203 is similar to the preaching labs in the basement, rooms 12 and 16. The projector is controlled by the touch panel on the wall.",
                                204: "Room 204 is similar to the rooms in the basement.",
                                205: "Room 205 is similar to the preaching labs in the basement, rooms 12 and 16. The projector is controlled by the touch panel on the wall.",
                                206: "Room 206 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                207: "Room 207 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                208: "Room 208 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                209: "Room 202 contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                                232: "This room contains a TV with an HDMI cable for you to plug into."}
var carverProjectorProblems = {}
var projectorProblems = {"Is the light green?": "If the light is red, the projector may have experienced a malfunction and will need to be taken down. In this situation, there is little that can be done with any immediacy. If a technician is in the office, he or she can bring a temporary projector and set it up on a table near the front of the room.",
                          "Is there a blue screen": "If the screen is blue, a cable has disconnected from the back of the lecturn. Unfortunately, there is nothing that can be done at the moment.",
                          "Projector is off": ["The projector is controlled by the Crestron touch screen in the lecturn. A simple restart should resync the two. If that doesn't work, unfortunately there is nothing that can be done at the moment.", "If you cannot find a remote in your classroom, there's good chance that a neighboring classroom might have one. You may also consider powering the device by hand. Just push the power button on the projector."]}
var probProjector = problem['Projector'];
var probComputer = problem['Computer'];
var probScreen = problem['Screen'];
var probAudio = problem['Audio'];
var probVideo = problem['Video'];
var probPower = problem['Power'];
var probPlayDisc = problem['PlayDisc'];
var probAdapter = problem['Adapter'];
var probAppleTV = problem['AppleTV'];
var keys = Object.keys(problem);//get keys

//DOM OBJECTS---------------------------------------------------------------->
const selectBuilding = document.querySelector('#buildop');
const selectProblem = document.querySelector('#probop');
const selectRoom = document.querySelector('#roomop');
const roomForm = document.querySelector('#roomform');
const probForm = document.querySelector('#probform');
const suggestionDiv = document.querySelector('#suggestion-div');
const menuDiv = document.querySelector('#menu-div svg');
const menuItems = document.querySelector('#menu-items');
const suggestionUl = document.querySelector('#suggestion-ul');
const solutionDiv = document.querySelector('#solution-content-div');
const paragraph = document.querySelector('#populate');


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
function createProblemListItems(e) { //called at 212
  var probText = e;
  var probButton = document.createElement('button');
  probButton.innerHTML = "Select";
  probButton.className = "solutionButton";
  var probLI = document.createElement('li');
  var probTextOp = document.createTextNode(probText);
  probLI.className = "clickable";
  probLI.appendChild(probTextOp);
  probLI.appendChild(probButton);
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

  if (choice3 === "") {//----------FIRST CONDITIONAL
    suggestionDiv.style.display = "none";
    solutionDiv.style.display = "none";
  }

  else if (choice3 === "Projector"){//---------SECOND CONDITIONAL
    resetUL();//function on line 173ff
    for (var i = 0; i < probProjector.length; ++i){
      createProblemListItems(probProjector[i]);//function at 186ff.
    }//close for-loop 1
      callSolutions(nortonProjectorProblems[11]);
  }

  else if (choice3 === "Computer"){//-------------THIRD CONDITIONAL
    resetUL();
    for (var i = 0; i < probComputer.length; ++i){
      createProblemListItems(probComputer[i]);
    }//close for-loop 2
  }

  else if (choice3 === "Screen"){
    resetUL();
    for (var i = 0; i < probScreen.length; ++i){
      createProblemListItems(probScreen[i]);
    }//close for-loop 3
  }

  else if (choice3 === "Audio"){
    resetUL();
    for (var i = 0; i < probAudio.length; ++i){
      createProblemListItems(probAudio[i]);
    }//close for-loop 4
  }

  else if (choice3 === "Video"){
    resetUL();
    for (var i = 0; i < probVideo.length; ++i){
      createProblemListItems(probVideo[i]);
    }//close for-loop 5
  }

  else if (choice3 === "Power"){
    resetUL();
    for (var i = 0; i < probPower.length; ++i){
      createProblemListItems(probPower[i]);
    }//close for-loop 6
  }

  else if (choice3 === "PlayDisc"){
    resetUL();
    for (var i = 0; i < probPlayDisc.length; ++i){
      createProblemListItems(probPlayDisc[i]);
    }//close for-loop 7
  }

  else if (choice3 === "Adapter"){
    resetUL();
    for (var i = 0; i < probAdapter.length; ++i){
      createProblemListItems(probAdapter[i]);
    }//close for-loop 8
  }

  else if (choice3 === "AppleTV"){
    resetUL();
    for (var i = 0; i < probAdapter.length; ++i){
      createProblemListItems(probAppleTV[i]);
    }//close for-loop 8
  }//close conditional
} //end function
selectProblem.addEventListener('change', probSelection);//Listen for problem selection

//CREATE PARAGRAPH SOLUTION
// function createParagraph() {
//   var paragraphText = document.createTextNode("Hello World");
//   paragraph.textContent = paragraphText;
//   solutionDiv.appendChild(paragraph);
// }
//EXPAND PROBLEM SOLUTION PARAGRAPHS-------------------------->
function callSolutions(text) {
  paragraph.textContent = text;
  solutionDiv.appendChild(paragraph);
  var button = document.querySelector(".solutionButton");
  button.addEventListener("click", ()=>{
    solutionDiv.style.display = "block";
  })//end click handler
}//end function


//SOLUTION MENU FADE OUT -------------------------------------->
$('.solution-close').click(function(){
  $('#solution-content-div').fadeOut(500);
})

//NAV MENU EXPAND----------------------------------------------------------->
$('svg').click(function(){
    $('.menu-items-view').slideToggle(800);
})//end toggle click handler
$('#menu-div svg').on("click", function (event) {
    $('.svg').toggleClass('rotate');
    $('.svg').toggleClass('rotate-reset');
});//end animation click handler
