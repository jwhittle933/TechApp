<?php
include 'inc/authenticate.php';
include 'inc/functions.php';

$forename = $surname = $buildingName = $roomNumber = $problem = $email = "";

echo "<!DOCTYPE html>\n<html><head><title>Form Submit</title>";


if (isset($_POST['forename']))
  $forename = htmlentities($_POST['forename'], ENT_QUOTES);
if (isset($_POST['surname']))
  $surname = htmlentities($_POST['surname'], ENT_QUOTES);
if (isset($_POST['buildingName']))
  $buildingName = htmlentities($_POST['buildingName'], ENT_QUOTES);
if (isset($_POST['roomNumber']))
  $roomNumber = htmlentities($_POST['roomNumber'], ENT_QUOTES);
if (isset($_POST['problem']))
  $problem = htmlentities($_POST['problem'], ENT_QUOTES);
if (isset($_POST['email']))
  $email = fix_string($_POST['email']);

$fail = validate_forename($forename);
$fail .= validate_surname($surname);
$fail .= validate_buildingName($buildingName);
$fail .= validate_roomNumber($roomNumber);
$fail .= validate_problem($problem);
$fail .= validate_email($email);

if (isset($_POST['forename']) &&
    isset($_POST['surname']) &&
    isset($_POST['buildingName']) &&
    isset($_POST['roomNumber']) &&
    isset($_POST['problem']) &&
    isset($_POST['email'])){

  $forename = get_post('forename');
  $surname = get_post('surname');
  $buildingName = get_post('buildingName');
  $roomNumber = get_post('roomNumber');
  $problem = get_post('problem');
  $email = get_post('email');

  $query = "INSERT INTO formsubmissions (first_name, last_name, building_name, room_number, problem, email) VALUES (?, ?, ?, ?, ?, ?)";
  $stmt = $conn->prepare($query);
  $stmt->bind_param('ssssss', $forename, $surname, $buildingName, $roomNumber, $problem, $email);
  $stmt->execute();

  //$row = $result->num_rows;
} else {
  echo "Plese go back and fill in the required fields.";
}

if ($fail == ""){
  echo "</head><body><h1>Information Validated</h1><br>
    $forename $surname<br> $buildingName $roomNumber<br> $problem<br> $email<br></body></html>";

} else {
echo <<<_END
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Sawarabi+Mincho" rel="stylesheet">
    <style>
    h1 {
      font: normal 1.5em Montserrat;
    }
    .signup {
      width: auto;
      border: 1px solid #999999;
      font: normal 1.5em Sawarabi Mincho;
      color: #444444;
    }
    .subbutton {
      font-family: Helvetica;
      font-size: 1em;
      width:auto;
    }
    </style>
  </head>
  <body>
    <table class = "signup" border="0" cellpadding="2" cellspacing="5" bgcolor="#eeeeee">
      <th colspan="2" align="center"><h1>Report a Problem</h1></th>
      <form method="post" action="forminput.php">
        <tr><td colspan='2'>Sorry, the following errors were encoutered
          in your form: <p><font color=red size=3<i>$fail</i></font></p></td></tr>
        <tr><td>First Name</td>
          <td><input type="text" maxlength="32" name="forename" value="$forename"></td></tr>
        <tr><td>Last Name</td>
          <td><input type="text" maxlength="32" name="surname" value="$surname"></td></tr>
        <tr><td>Building Name</td>
          <td><input type="text" maxlength="16" name="buildingName" value="$buildingName"></td></tr>
        <tr><td>Room Number</td>
          <td><input type="text" maxlength="16" name="roomNumber" value="$roomNumber"></td></tr>
        <tr><td>Problem</td>
          <td><textarea type="text" maxlength="200" name="problem" value="$problem"></textarea></td></tr>
        <tr><td>Email</td>
          <td><input type="text" maxlength="64" name="email" value="$email"></td></tr>
        <tr><td colspan="2" align="center"><input class="subbutton" type="submit" name="submit" value="Submit"></td></tr>
      </form>
    </table>
  </body>
</html>
_END;

}//end conditional



// for ($i = 0; $i < $rows; ++$i){
//   $row = $result->fetch_array(MYSQLI_ASSOC);
//
//   echo "First Name: " .  htmlspecialchars($row['first_name']) . "<br>";
//   echo "Last Name: " .  htmlspecialchars($row['last_name']) . "<br>";
//   echo "Building Name: " .  htmlspecialchars($row['building_name']) . "<br>";
//   echo "Room Number: " .  htmlspecialchars($row['room_number']) . "<br>";
//   echo "Problem: " .  htmlspecialchars($row['problem']) . "<br>";
//   echo "Email: " .  htmlspecialchars($row['email']) . "<br>";
// }


$query = "SELECT * FROM formsubmissions";
$result = $conn->query($query);
if (!$result) {
  die ('Fatal Error');
}

$rows = $result->num_rows;

for ($i = 0; $i < $rows; ++$i) {//Option 1------------------------->
  $result->data_seek($i);
  echo "<pre><b>First Name: " . htmlspecialchars($result->fetch_assoc()['first_name']) . "<br><br></pre>";
  $result->data_seek($i);
  echo "<pre>Last Name: " . htmlspecialchars($result->fetch_assoc()['last_name']) . "<br><br></b></pre>";
  $result->data_seek($i);
  echo "<pre>Building: " . htmlspecialchars($result->fetch_assoc()['building_name']) . "<br><br></pre>";
  $result->data_seek($i);
  echo "<pre>Room: " . htmlspecialchars($result->fetch_assoc()['room_number']) . "<br><br></pre>";
  $result->data_seek($i);
  echo "<pre>Problem: " . htmlspecialchars($result->fetch_assoc()['problem']) . "<br><br></pre>";
  $result->data_seek($i);
  echo "<pre>Email: " . htmlspecialchars($result->fetch_assoc()['email']) . "<br><br></pre>";
}
echo "<pre style='font-size: 20px;'><a href='../index.html'>Return</a> to TechHelp homepage.";

$result->close();
$conn->close();

?>
