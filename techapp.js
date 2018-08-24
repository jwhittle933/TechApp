const building = ["Norton", "Carver", "Rankin", "Library"];
const roomNorton = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        101, 102, 103, 104, 105, 195, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232]
const problem = ["Projector", "Computer", "Screen", "Audio", "Video", "Power", "Play DVD"];
const selectProblem = document.querySelector('#probop');
const selectRoom = document.querySelector('#roomop');
const selectBuilding = document.querySelector('#buildop');

//CREATE BUILDING MENU
for (var i = 0; i < building.length; i++) {
  var buildMenu = building[i];//grab building names
  var buildOption = document.createElement('option'); //create <option>
  var buildText = document.createTextNode(buildMenu);//create text from building[i]
  buildOption.appendChild(buildText);//append building text to <option>
  selectBuilding.appendChild(buildOption);//append <option> to id="buildop"
}

//CREATE DROP MENU
for (var i = 0; i < roomNorton.length; i++){
  var optionRoomMenu = roomNorton[i];//grab room numbers
  var roomMenu = document.createElement('option'); // create <option>
  var roomText = document.createTextNode(optionRoomMenu); //create text from roomNorton[i]
  roomMenu.appendChild(roomText); //append room text to <option>
  selectRoom.appendChild(roomMenu);//append <option> to id="roomop"
}//close for loop

//CREATE PROBLEM MENU
for (var i = 0; i < problem.length; i++){
  var problemOption = problem[i];//grab problem
  var problemMenu = document.createElement('option'); // create <option>
  var problemText = document.createTextNode(problemOption); //create text from problem[i]
  problemMenu.appendChild(problemText); //append problem text to <option>
  selectProblem.appendChild(problemMenu);//append <option> to id="roomop"
}//close for loop
