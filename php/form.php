<?php
require_once 'login.php';
require_once 'query-mysqli.php';


if  ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
  $room = trim(filter_input(INPUT_POST, 'room', FILTER_SANITIZE_STRING));

  if (empty($name || empty($room))) {
    $error_message = "Please fill in the required fields: Name, Room";
  } else {
    echo "Name = $name <br>";
    echo "Room = $room <br>";
  }
}
?>
<?php
  if (isset($error_message)){
    echo "<p>$error_message</p>";
  }
?>
<form method="post" action="project.php">
  <input type="submit" value="Submit">
</form>
