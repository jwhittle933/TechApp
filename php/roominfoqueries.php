<?php
include 'inc/authenticate.php';
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
} else echo "Database accessed.";


///////////////////////////////////////////////////////////
//-----------------NORTON ROOM QUERY------------------
//////////////////////////////////////////////////////////
if($_GET['building'] === "Norton"){
    $building = "norton_rooms";
} elseif ($_GET['building'] === "Carver"){
    $building = "carver_rooms";
} elseif ($_GET['building'] === "Rankin"){
    $building = "rankin_rooms";
} elseif ($_GET['building'] === "Library"){
    $building = "library_rooms";
} elseif ($_GET['building'] === "Cook"){
    $building = "cook_rooms";
}
$roomNumberQuery = "SELECT room_number FROM ?"; 
$stmt = $conn->prepare($roomQuery); 
$stmt->bind_params('s', $building);
$result = $stmt->fecthAll(); 
echo $result; 


$query = "SELECT description FROM device_description WHERE device = ? AND building = ? AND room_code = ?";

/////////////////////////////////////////////////////////////////
//--------------------NORTON DEVICE QUERIES--------------------
/////////////////////////////////////////////////////////////////
////////////////////////////////
//--NORTON PROJECTOR QUERIES--
///////////////////////////////
function nortonProjectorCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 11); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonProjectorCode12 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 12); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonProjectorCode13 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 13); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonProjectorCode100200 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 10200); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonProjectorCode195 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 195); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonProjectorCode203 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 203); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonProjectorCode208 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 208); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonProjectorCode232 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Norton', 232); 
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON COMPUTER QUERIES--
///////////////////////////////
function nortonComputerCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Computer', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonComputerCode100200 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Computer', 'Norton', 100200);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonComputerCode195 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Computer', 'Norton', 195);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON SCREEN QUERIES--
///////////////////////////////
function nortonScreen($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Screen', 'Norton', 0);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON AUDIO QUERIES--
///////////////////////////////
function nortonAudioCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Audio', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonAudioCode12 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Audio', 'Norton', 12);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonAudioCode100200 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Audio', 'Norton', 100200);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonAudioCode195 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Audio', 'Norton', 195);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonAudioCode232 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Audio', 'Norton', 232);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON VIDEO QUERIES--
///////////////////////////////
function nortonVideoCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Video', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonVideoCode12 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Video', 'Norton', 12);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonVideoCode100200 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Video', 'Norton', 100200);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonVideoCode195 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Video', 'Norton', 195);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonVideoCode232 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Video', 'Norton', 232);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON POWER QUERIES--
///////////////////////////////
function nortonPowerCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Power', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonPowerCode100200 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Power', 'Norton', 100200);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonPowerCode195 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Power', 'Norton', 195);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON PLAY DISC QUERIES--
///////////////////////////////
function nortonPlayDiscCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Play Disc', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON ADAPTER QUERIES--
///////////////////////////////
function nortonAdapterCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Adapter', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON APPLE TV QUERIES--
///////////////////////////////
function nortonAppleTVCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Apple TV', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonAppleTVCode12 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Apple TV', 'Norton', 12);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonAppleTVCode100200 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Apple TV', 'Norton', 100200);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
////////////////////////////////
//--NORTON SMARTBOARD QUERIES--
///////////////////////////////
function nortonSmartBoardCode11 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Apple TV', 'Norton', 11);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function nortonSmartBoardCode100200 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Apple TV', 'Norton', 100200);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}

/////////////////////////////////////////////////////////////////
//--------------------CARVER DEVICE QUERIES---------------------
/////////////////////////////////////////////////////////////////
////////////////////////////////
//--CARVER PROJECTOR QUERIES--
///////////////////////////////
function caverProjector($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Projector', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverComputer($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Computer', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverScreen($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Screen', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverAudio($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Audio', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverVideo($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Video', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverPower($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Power', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverPlayDisc($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Play Disc', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverAdapter($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Computer', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
function caverAppleTV($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Apple TV', 'Carver', 108);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}
/////////////////////////////////////////////////////////////////
//--------------------RANKIN DEVICE QUERIES--------------------
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//--------------------LIBRARY DEVICE QUERIES--------------------
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//--------------------COOK DEVICE QUERIES--------------------
/////////////////////////////////////////////////////////////////

?>