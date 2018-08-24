const roomOption = [011, 012, 013, 014, 015, 016, 017, 018, 019, 20,
        101, 102, 103, 104, 105, 195, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232]
const select = document.querySelector('#op1');
console.log(roomOption);

for (var i = 0; i <= roomOption.length; i++){
  var optionMenu = roomOption[i];
  var dropMenu = document.createElement('option');
  var dropText = document.createTextNode(roomOption[i]);
  //dropMenu.appendChild(dropText);
  select.appendChild(dropMenu)
}
