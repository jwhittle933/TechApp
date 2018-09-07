<?php
require_once 'inc/authenticate.php';
require_once 'inc/functions.php';


if (isset($_POST['delete']) && isset($_POST['problem'])) {
  //$problem = htmlentities($_POST['problem'], ENT_QUOTES);//FIGURE OUT HOW TO TAKE OUT APOSTROPHE
  $problem = str_replace("'", "''", $_POST['problem']);
  echo $problem;
  $query = "DELETE FROM formsubmissions WHERE problem = '$problem'";
  $stmt = $conn->query($query);
  if($conn->affected_rows) echo "Delete Successful<br><br>";
} else echo "Delete unsuccessful";

if (isset($_POST['forename'])      &&
    isset($_POST['surname'])       &&
    isset($_POST['building_name']) &&
    isset($_POST['room_number'])   &&
    isset($_POST['problem'])       &&
    isset($_POST['email']))
{
  $forename     = htmlentities($_POST['forename'], ENT_QUOTES);
  $surname      = htmlentities($_POST['surname'], ENT_QUOTES);
  $buildingName = htmlentities($_POST['building_name'], ENT_QUOTES);
  $roomNumber   = htmlentities($_POST['room_number'], ENT_QUOTES);
  $problem      = htmlentities($_POST['problem'], ENT_QUOTES);
  $email        = fix_string($_POST['email']);

  $query = "INSERT INTO formsubmissions (first_name, last_name, building_name, room_number, problem, email) VALUES (?, ?, ?, ?, ?, ?)";
  $stmt = $conn->prepare($query);
  $stmt->bind_param('ssssss', $forename, $surname, $buildingName, $roomNumber, $problem, $email);
  $stmt->execute();
} //else {echo "INSERT failed";}

  echo "<style>div {width:25%;} input {width:auto; margin-right: 0;}</style>";
  echo "<div><pre>";
  echo "<form style='border: 2px solid black;' action='requestmanager.php' method='post'<pre>";
  echo "<label for='forename'>First Name: </label><input type='text' name='forename'><br>";
  echo "<label for='surname'>Last Name: </label><input type='text' name='surname'><br>";
  echo "<label for='building_name'>Building: </label><input type='text' name='building_name'><br>";
  echo "<label for='room_number'>Room: </label><input type='text' name='room_number'><br>";
  echo "<label for='problem'>Problem: </label><input type='text' name='problem'><br>";
  echo "<label for='email'>Email: </label><input type='email' name='email'><br>";
  echo "<input type='submit' value='SUBMIT FORM'>";
  echo "</pre></form>";
  echo "</pre></div>";


$query = "SELECT * FROM formsubmissions";
$result = $conn->query($query);
if(!$result) echo "Database access failed";

//echo "<div style='display: flex; flex-wrap: wrap;'>";
$rows = $result->num_rows;
for ($i = 0; $i < $rows; ++$i) {//Option 2-------------------------->
  $row = $result->fetch_array(MYSQLI_NUM);

  $r0 = htmlspecialchars($row[0], ENT_QUOTES);
  $r1 = htmlspecialchars($row[1], ENT_QUOTES);
  $r2 = htmlspecialchars($row[2], ENT_QUOTES);
  $r3 = htmlspecialchars($row[3], ENT_QUOTES);
  $r4 = htmlspecialchars($row[4], ENT_QUOTES);
  $r5 = htmlspecialchars($row[5], ENT_QUOTES);

  echo "<pre>";
  echo "First Name: <b>$r0</b><br>";
  echo "Last Name: <b>$r1</b><br>";
  echo "Building: $r2<br>";
  echo "Room: $r3<br>";
  echo "Problem: $r4<br>";
  echo "Email: $r5<br>";
  echo "</pre>";
  echo "<form action='requestmanager.php' method='post'>";
  echo "<input type='hidden' name='delete' value='yes'>";
  echo "<input type='hidden' name='problem' value='". $r4 . "'>";
  echo "<input type='submit' value='Delete Record'></form>";
}
//echo "</div>";


$result->close();
$conn->close();



?>
