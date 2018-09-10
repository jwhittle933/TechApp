

function populateNortonRoom() {
    $('#roomop').load('php/roominfoqueries.php')
}
function populateCarverRoom() {
    $('#roomop').load('php/roominfoqueries.php')
}
function populateRankinRoom() {
    $('#roomop').load('php/roominfoqueries.php')
}
function populateLibraryRoom() {
    $('#roomop').load('php/roominfoqueries.php')
}
function populateCookRoom() {
    $('#roomop').load('php/roominfoqueries.php')
}

function populateRooms(buildingName) {
    let data = {
        building = buildingName
    }
    let callback = function (response) {
        $('#roomop').html(response); 
    }
    $.get("php/roominfoqueries.php", data, callback);
}






$.ajax({
    url: 'php/roominfoqueries.php',  //CALL TO PHP SCRIPT FOR DATA
    data: "",        //INSERT URL ARGUMENTS TO PASS TO API
    dataType: 'json',
    success: function(data) {
        let id = data[0];   //GET ID
        let vname = data[1];//GET NAME
        $('#output').html("<b>id: </b>" + id + "<b> name: </b>"+vname); //SET OUTPUT ELEMENT HTML
    }
});
