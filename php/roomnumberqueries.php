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
$stmt = $conn->bind_param('s', $building);
$rooms = $stmt->fecthAll(); 
echo $result; 

?>