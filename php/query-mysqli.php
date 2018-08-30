<?php //query-mysqli.
require_once 'login.php';
$connection = new mysqli($hn, $un, $pw, $db);

if ($connection->connect_error) {
  die('Fatal Error');
}

$query = "SELECT * FROM formSubmits";
$result = $connection->query($query);

if (!$result) {
  die ('Fatal Error');
}

$rows = $result->num_rows;

for ($i = 0; $i < $rows; ++$i) {//Option 1------------------------->
  $result->data_seek($i);
  echo "Name: " . htmlspecialchars($result->fetch_assoc()['name']) . "<br>";
  $result->data_seek($i);
  echo "Room: " . htmlspecialchars($result->fetch_assoc()['room']) . "<br>";
  $result->data_seek($i);
  echo "Problem: " . htmlspecialchars($result->fetch_assoc()['problem']) . "<br>";
  $result->data_seek($i);
  echo "Time: " . htmlspecialchars($result->fetch_assoc()['time']) . "<br>";
  $result->data_seek($i);
  echo "Date: " . htmlspecialchars($result->fetch_assoc()['date']) . "<br><br>";
}

for ($i = 0; $i < $rows; ++$i) {//Option 2-------------------------->
  $row = $result->fetch_array(MYSQLI_ASSOC);

  echo "Name: " . htmlspecialchars($row['name']) . "<br>";
  echo "Room: " . htmlspecialchars($row['room']) . "<br>";
  echo "Problem: " . htmlspecialchars($row['problem']) . "<br>";
  echo "Time: " . htmlspecialchars($row['time']) . "<br>";
  echo "Date: " . htmlspecialchars($row['date']) . "<br>";


}


$result->close();
$connection->close();


?>
