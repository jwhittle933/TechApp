<?php
include 'inc/authenticate.php';

$q = intval($_GET['q']);

if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

$query = "SELECT description FROM device_description WHERE device = ? AND building = ? AND room_code = ?";

/////////////////////////////////////////////////////////////////
//--------------------NORTON DEVICE QUERY-----------------------
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

/////////////////////////////////////////////////////////////////
//--------------------CARVER DEVICE QUERY-----------------------
/////////////////////////////////////////////////////////////////
////////////////////////////////
//--CARVER PROJECTOR QUERIES--
///////////////////////////////
function caverProjectorCode108 ($query){
    $stmt = $conn->prepare($query);
    $stmt = bind_param('ssi', 'Video', 'Norton', 232);
    $result = $stmt->execute();
    $$array = $stmt->fetch_array ($result);
}

while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['FirstName'] . "</td>";
    echo "<td>" . $row['LastName'] . "</td>";
    echo "<td>" . $row['Age'] . "</td>";
    echo "<td>" . $row['Hometown'] . "</td>";
    echo "<td>" . $row['Job'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>