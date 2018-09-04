//ARRAYS-------------------------------------------------------------------->
const building = {Norton: ["", 11, 12, 13, 14, 15, 16, 17, 20,
        101, 102, 103, 104, 105, 195, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232],
                  Carver: ["", 108, 135],
                  Rankin: ["", 101, 201],
                  Library: ["", "Crismon", "Curriculum Lab", "Mullins Room"],
                  Cook: ["", 8, 221, 224, 'CCRH', 'IRH', 'Heeren Hall']};
const buildingName = Object.keys(building);
const nortonRooms = building.Norton;
const carverRooms = building.Carver;
const rankinRooms = building.Rankin;
const libraryRooms = building.Library;
const cookRooms = building.Cook;
const problem = {Projector: ["Is the light green?", "Is there a blue screen?", "Is the projector on?"],
                 Computer: ["Is it a seminary issued laptop?", "Is it powered on?", "Can't connect to the internet?"],
                 Screen: ["Is your computer plugged in?", "Is the screen blue?"],
                 Audio: ["Is the cable plugged in?", "Is your computer muted?", "Is the Crestron muted?"],
                 Video: ["Is the projector on?", "Are you plugged in?"],
                 Power: ["Are the desks connected?"],
                 PlayDisc: ["Are you using a BluRay Player?", "Are you using your computer?"],
                 Adapter: ["Does your computer plug straight in?"],
                 AppleTV: ["Is it on but won't connect?", "Is your computer not detecting the device?"],
                 SmartBoard: ["Have you powered it on?", "Is the USB plugged in?", "Is the HDMI plugged in?", "Have you connected via the mobile app?"]
                }
const nortonProjector = {11: "The projector system in most of the basement rooms of Norton has two inputs: HDMI(small and thin) and VGA(slightly larger). Check the wall jack to make sure that it has not been damaged. These rooms also reqire a remote to power on the projector. If one is not present, check the surrounding rooms as there is sure to be one present. Also, you may reach up and manually push the power button on the remote.",
                       12: "This room contains an Extron room control system. The touch panel on the lecturn controls the projector and inputs. To turn the projector on, select Room Controls on the touch screen and then select from the Apple TV or wall jack inputs. Selection of eiter should turn the projector on for you. The wall jack inputs are automatic and will detect your computer. If you are connected but there is no video, check the cable in the wall to make sure it's inserted completely.",
                       13: "Room 13 contains a short throw projector, situated right above the white board. You can connect to this projector the same way as many of the other rooms, by plugging your computer into the wall jack. If youa are plugged in and there is still no video (the screen will be blue), check the cable in the wall to make sure its plugged all the way in.",
                       17: "This room is like others in the basement of Norton, but unlike them this room does not have an HDMI input. If your computer does not have a VGA port built in, it will be necessary to check out an adapter. As well, VGA does not trasmit audio, so if you desire to play a video or any form of audio, make sure that the audio cable in the wall is plugged into your headphone jack.",
                       100200: "This room contains a Crestron room controller. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device.",
                       195: "This room contains two different projection systems. One is a Crestron, similar to the 100 classrooms in Norton. To start up, simply select the input you'd like from either HDMI or VGA (the touch screen includes House PC, but this is not functional). Selecting the input will turn the projectors on. Ensure that your computer is connected to one of the cables coming from the wooden lecturn and an image will appear after the projectors warm up. Unfortunately, this system does not have audio capability at this time. The other system projects direcly down the middle and includes audio. To start this system, plug your computer into the blue-tipped VGA cable coming from the metal cabinet and push the selector button until the light is on the side labeld Computer. For this system, you'll need the white projector remote to turn it on. The remote has two sections: one power button at the top to turn the speaker on and another section to power the projector.",
                       203: "Room 203 is similar to the preaching labs in the basement, rooms 12 and 16. The projector is controlled by the touch panel on the wall. Make sure you select the Room Controls options at the bottom of the screen and select your input. If you desire to plug your device in, select the button that images a wall plate. If you desire to use the Apple TV, selec the image of the Apple TV.",
                       208: "Room 208 contains a Crestron room controller like many other rooms in Norton. The touch screen on the lecturn powers on the projector, so you will not find a projector remote. To start the system, just select which input you'd like to use (House PC, HDMI, or VGA), and plug in your device. This room also comes with a gooseneck microphone for amplification. If you desire to use the microphone, find the mute button on the left side of the touch display and unselect it. Above that button is a volume control that will allow you to adjust your amplification.",
                       232: "This room contains a TV with an HDMI cable for you to plug into."}
//Norton room groups: Group 1 {11, 15}, Group 2 {13}, Group 3 {17, 20, 204}, Group 4 {101, 102, 103, 104, 105, 201, 202, 206, 209}, Group 5 {203, 205, 207}, Group 6 {208}
const nortonComputer = {11: "This room does not come equipped with a computer. If you are having trouble with your seminary issued computer, please contact the help desk at x4006 during working hours.",
                        100200: "This room comes with Mac Mini that can be used to project on the screen. To log on, use your SBTS credentials (the same information you'd use to log on to your seminary issued laptop). The computer uses Windows 8, so some of the functions and locations may be different than what you're accustomed to. To access the smart board, launch WhiteBoard application from the desktop.",
                        195: "This classroom has a computer in the metal cabinet. To access and project, you must locate the input switcher near the audio mixer and push the button until Tablet is selected. Once you turn on the middle project with the remote, the image of the computer should display. You can log in to the computer using your SBTS credentials."};
const nortonScreen = "The screens in every room descend by pushing the toggle switch down. It is located near one of the doors. If you cannot get your computer to display properly, please select Projector from the drop menu and read the room info.";
const nortonAudio = {11: "This room is equipped to handle audio playback. If you are playing audio with video, try to use the HDMI input if possible, as this cable transmits both audio and video. If you are just playing audio or are using the VGA, be sure to plug the audio cable into your headphone jack. The volume is controlled partly by your computer's volume and partly by the projector volume. Our suggestion: turn your computer volume up to 75% and the projector to 50%.",
                    12: "This room is equipped to handle audio playback. The volume is controlled by the Extron touch screen on the lecturn and the volume on your computer. If you are playing audio along with video, be sure that you are using the HDMI input. If you are just playing audio or are using the VGA cable, be sure to connect the accompanying audio cable.",
                    100200: "This room is equipped to handle audio playback. If you are playing audio with video, try to use the HDMI input if possible, as this cable transmits both audio and video. If you are just playing audio or are using the VGA, be sure to plug the audio cable into your headphone jack. The volume is controlled partly by your computer's output volume and partly by the volume on the Crestron touch screen. The touch screen will be muted by default. Ensure that mute is turned off and the volume is high.",
                    195: "This room can only handle audio playback through the central sound system. The Crestron, at the moment, is incapable of transmitting audio. If you desire to play audio, be sure to connect the audio cable coming from the sound mixer into your headphone jack, and check that volume is turned up on the speaker above the central projector.",
                    232: "This room is equipped with a TV for playback of video and audio. All audio playback must go through this TV or portable speakers must be used. The TV is equipped with an HDMI cable."};
const nortonVideo = {11: "This room is equipped with both HDMI and VGA video input. In order to display your screen, make sure that you have the appropriate adapter for your device, turn the projector on with the remote, and make sure that the projector is on the correct input chanel. To select the correct chanel, press the button labeled Source Search and the projector will automatically select your input.",
                    12: "This room is equipped with an Extron room control system. To display video, select either the HDMI or VGA inputs from the wall and select the wall plate icon in the Room Controls menu on the touch screen, or select the Apple TV icon and connect to the Apple TV.",
                    100200: "This room is equipped with a Crestron room controller. Video options include HDMI, VGA, as well as a Mac Mini running Windows if you don't wish to bring your device. Select the input you desire from the touch screen and the projector will turn on automatically. ",
                    195:"There are two different projection systems in Norton 195. If you desire to write on the board, use the Crestron system mounted in the wooden lecturn. This system operates exactly like the rooms on Norton with similar technology, except that there is no House PC mounted in this room. To use the centrally located projector, connect your computer (with adapter if necessary) to the blue-tipped VGA cable and be sure that the selector is on laptop. Then turn the projector on with the white remote.",
                    232: "Room 232 is equipped with a TV and an HDMI cable. Connect your device with appropreiate adapter to the TV and select the HDMI 1 input."}
var carverProjector = {108:["The projector system in this room has two inputs: HDMI(small and thin) and VGA(slightly larger). Check the wall jack to make sure that it has not been damaged. These rooms also reqire a remote to power on the projector. If one is not present, check the surrounding rooms as there is sure to be one present. Also, you may reach up and manually push the power button on the remote. The Campus Technology office is upstairs on the main hallway and if anyone is there, they may be able to help you. "]}
const probProjector = problem['Projector'];
const probComputer = problem['Computer'];
const probScreen = problem['Screen'];
const probAudio = problem['Audio'];
const probVideo = problem['Video'];
const probPower = problem['Power'];
const probPlayDisc = problem['PlayDisc'];
const probAdapter = problem['Adapter'];
const probAppleTV = problem['AppleTV'];
const probSmartBoard = problem['SmartBoard'];
const keys = Object.keys(problem);//get keys

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

//CREATE ROOM MENU---------------------------------------------------------->
function callRooms(room) {
  for (var i = 0; i < room.length; i++){
    var optionRoomMenu = room[i];//grab room numbers
    var roomMenu = document.createElement('option'); // create <option>
    var roomText = document.createTextNode(optionRoomMenu); //create text from roomNorton[i]
    roomMenu.appendChild(roomText); //append room text to <option>
    selectRoom.appendChild(roomMenu);//append <option> to id="roomop"
    selectRoom.style.display = "block";
  }//close loop
}//end function

//BUILDING AND ROOM MENU CONTROLLER-------------------------------------------->
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
      callRooms(nortonRooms);
    } else if (choice === "Carver"){
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callRooms(carverRooms);
    } else if (choice === "Rankin") {
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callRooms(rankinRooms);
    } else if (choice === "Library"){
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callRooms(libraryRooms);
    } else if (choice === "Cook"){
      selectRoom.innerHTML = "";
      roomForm.style.display = "inline-flex";
      callRooms(cookRooms);
    }//end conditional
}//end function
selectBuilding.addEventListener('change', buildingSelection);//Listen for selection

//CREATE PROBLEM MENU-------------------------------------------------------->
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

//PROBLEM MENU CONTROLLER--------------------------->
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

  if (choice3 === "") {//----------FIRST CONDITIONAL
    suggestionDiv.style.display = "none";
    solutionDiv.style.display = "none";
  }

  else if (choice3 === "Projector"){//---------SECOND CONDITIONAL
    resetUL();//function on line 173ff
    for (var i = 0; i < probProjector.length; ++i){
      createProblemListItems(probProjector[i]);//function at 186ff.
    }//close for-loop
    if (choice2 === '11' || choice2 === '14' || choice2 === '15'){
      callSolutions(nortonProjector[11]);
    } else if (choice2 === '12' || choice2 === '16'){
      callSolutions(nortonProjector[12]);
    } else if (choice2 === '17' || choice2 === '20' || choice2 === '204') {
      callSolutions(nortonProjector[17]);
    } else if (choice2 === '13'){
      callSolutions(nortonProjector[13]);
    } else if (choice2 === '195') {
      callSolutions(nortonProjector[195]);
    } else if (choice2 === '101' || choice2 === '102' || choice2 === '103' || choice2 === '104' || choice2 === '105' || choice2 === '201' || choice2 === '202' || choice2 === '206' || choice2 === '209'){
      callSolutions(nortonProjector[100200]);
    } else if (choice2 === '203' || choice2 === '205' || choice2 === '207'){
      callSolutions(nortonProjector[203]);
    } else if (choice2 === '208'){
      callSolutions(nortonProjector[208]);
    } else if (choice2 === '232'){
      callSolutions(nortonProjector[232]);
    }//end embedded conditional
  }

  else if (choice3 === "Computer"){//-------------THIRD CONDITIONAL
    resetUL();
    for (var i = 0; i < probComputer.length; ++i){
      createProblemListItems(probComputer[i]);
    }//close for-loop 2
    if (choice2 === '11' || choice2 === '12' || choice2 === '14' || choice2 === '15' || choice2 === '16' || choice2 === '17' || choice2 === '20' || choice2 === '203' || choice2 === '204' || choice2 === '205' || choice2 === '207'){
      callSolutions(nortonComputer[11]);
    } else if (choice2 === '101' || choice2 === '102' || choice2 === '103' || choice2 === '104' || choice2 === '105' || choice2 === '201' || choice2 === '202' || choice2 === '206' || choice2 === '208' || choice2 === '209'){
      callSolutions(nortonComputer[100200]);
    } else if (choice2 === '195'){
      callSolutions(nortonComputer[195]);
    }//end embedded conditional
  }

  else if (choice3 === "Screen"){
    resetUL();
    for (var i = 0; i < probScreen.length; ++i){
      createProblemListItems(probScreen[i]);
    }//close for-loop 3
    callSolutions(nortonScreen);
  }

  else if (choice3 === "Audio"){
    resetUL();
    for (var i = 0; i < probAudio.length; ++i){
      createProblemListItems(probAudio[i]);
    }//close for-loop 4
    if (choice2 === '11' || choice2 === '15' || choice2 === '17' || choice2 === '20'|| choice2 === '204'){
      callSolutions(nortonAudio[11]);
    } else if (choice2 === '12' || choice2 === '16' || choice2 === '203' || choice2 === '205' || choice2 === '207'){
      callSolutions(nortonAudio[12]);
    } else if (choice2 === '101' || choice2 === '102' || choice2 === '103' || choice2 === '104' || choice2 === '105' || choice2 === '201' || choice2 === '202' || choice2 === '206' || choice2 === '208' || choice2 === '209'){
      callSolutions(nortonAudio[100200]);
    } else if (choice2 === '195'){
      callSolutions(nortonAudio[195]);
    } else if (choice2 === '232'){
      callSolutions(nortonAudio[232]);
    }//end embedded conditional
  }

  else if (choice3 === "Video"){
    resetUL();
    for (var i = 0; i < probVideo.length; ++i){
      createProblemListItems(probVideo[i]);
    }//close for-loop 5
    if (choice2 === '11' || choice2 === '15' || choice2 === '17' || choice2 === '20'|| choice2 === '204'){
      callSolutions(nortonVideo[11]);
    } else if (choice2 === '12' || choice2 === '16' || choice2 === '203' || choice2 === '205' || choice2 === '207'){
      callSolutions(nortonVideo[12]);
    } else if (choice2 === '101' || choice2 === '102' || choice2 === '103' || choice2 === '104' || choice2 === '105' || choice2 === '201' || choice2 === '202' || choice2 === '206' || choice2 === '208' || choice2 === '209'){
      callSolutions(nortonVideo[100200]);
    } else if (choice2 === '195'){
      callSolutions(nortonVideo[195]);
    } else if (choice2 === '232'){
      callSolutions(nortonVideo[232]);
    }//end embedded conditional
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
  }

  else if (choice3 === "SmartBoard"){
    resetUL();
    for (var i = 0; i < probSmartBoard.length; ++i){
      createProblemListItems(probSmartBoard[i]);
    }//close for-loop 8
  }//close conditional
} //end function
selectProblem.addEventListener('change', probSelection);//Listen for problem selection

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
