<?php //query-mysqli.
require_once 'inc/authenticate.php';

if ($conn->connect_error) {
  die('Fatal Error');
}

$query = "SELECT * FROM formsubmissions";
$result = $conn->query($query);

if (!$result) {
  die ('Fatal Error');
}

$rows = $result->num_rows;

for ($i = 0; $i < $rows; ++$i) {//Option 1------------------------->
  $result->data_seek($i);
  echo "<b>First Name: " . htmlspecialchars($result->fetch_assoc()['first_name']) . "</b><br><";
  $result->data_seek($i);
  echo "Last Name: " . htmlspecialchars($result->fetch_assoc()['last_name']) . "<br>";
  $result->data_seek($i);
  echo "Building: " . htmlspecialchars($result->fetch_assoc()['building_name']) . "<br>";
  $result->data_seek($i);
  echo "Room: " . htmlspecialchars($result->fetch_assoc()['room_number']) . "<br>";
  $result->data_seek($i);
  echo "Problem: " . htmlspecialchars($result->fetch_assoc()['problem']) . "<br>";
  $result->data_seek($i);
  echo "Email: " . htmlspecialchars($result->fetch_assoc()['email']) . "<br>";
}

$query = "SELECT * FROM campus_rooms";
$result = $conn->query($query);
if (!$result) die ("Database access failed");

$rows = $result->num_rows;

for ($i = 0; $i < $rows; ++$i) {//Option 2-------------------------->
  $row = $result->fetch_array(MYSQLI_NUM);

  $r0 = htmlspecialchars($row[0]);
  $r1 = htmlspecialchars($row[1]);
  $r2 = htmlspecialchars($row[2]);
  $r3 = htmlspecialchars($row[3]);
  echo "<pre>";
  echo "<b>Room ID: $r0</b><br>";
  echo "Building: $r1<br>";
  echo "Room: $r2<br>";
  echo "Description: $r3<br>";
  echo "</pre>";
}


$result->close();
$conn->close();


?>
