<?php
include 'loginvalidate.php';
require 'inc/functions.php';

if (isset($_POST['delete']) && isset($_POST['problem'])) {
  $problem = get_post($conn, 'problem');
  $query = "DELETE FROM formsubmissions WHERE problem = $problem";
  $result = $conn->query($query);
  if(!$result) echo "Delete failed<br><br>";
}

if(isset($_POST['first_name'])&&
  isset($_POST['last_name']) &&
  isset($_POST['building_name']) &&
  isset($_POST['room_number']) &&
  isset($_POST['problem']) &&
  isset($_POST['email'])) {
    $forename = get_post($conn, 'first_name');
    $surname = get_post($conn, 'last_name');
    $building = get_post($conn, 'building_name');
    $roomNumber = get_post($conn, 'room_number');
    $problem = get_post($conn, 'problem');
    $email = get_post($conn, 'email');

    $query = "INSERT INTO formsubmissions VALUES" . "('$forename', '$surname', '$building', '$roomNumber', '$problem', '$email')";
    $result = $conn->query($query);
    if (!$result) echo "INSERT failed<br><br>";
  }

  echo "<form action='requestmanager.php' method='post'<pre>";
  echo "First Name: <input type='text' name='first_name'>";
  echo "Last Name: <input type='text' name='last_name'>";
  echo "Building: <input type='text' name='building_name'>";
  echo "Room: <input type='text' name='room_number'>";
  echo "Problem: <input type='text' name='problem'>";
  echo "Email: <input type='email' name='email'>";
  echo "<input type='submit' value='ADD PROBLEM'>";
  echo "</pre></form>";






$query = "SELECT * FROM formsubmissions";
$result = $conn->query($query);
if(!$result) echo "Database access failed";

$rows = $result->num_rows;

for ($i = 0; $i < $rows; ++$i) {//Option 2-------------------------->
  $row = $result->fetch_array(MYSQLI_NUM);

  $r0 = htmlspecialchars($row[0]);
  $r1 = htmlspecialchars($row[1]);
  $r2 = htmlspecialchars($row[2]);
  $r3 = htmlspecialchars($row[3]);
  $r4 = htmlspecialchars($row[4]);
  $r5 = htmlspecialchars($row[5]);
  $r6 = htmlspecialchars($row[6]);

  echo "<pre>";
  echo "<b>Room ID: $r0</b><br>";
  echo "Building: $r1<br>";
  echo "Room: $r2<br>";
  echo "Description: $r3<br>";
  echo "</pre>";

  echo "<form action='requestmanager.php' method='post'>";
  echo "<input type='hidden' name='delete' value='yes'>";
  echo "<input type='hidden' name='problem' value='$r5'>";
  echo "<input type='submit' value='DELETE RECORD'></form>";
}

$result->close();
$conn->close();

 ?>
