<?php //receive validate.html data

$forename = $surname = $buildingName = $roomNumber = $problem = $email = "";

if (isset($_POST['forename']))
  $forename = fix_string($_POST['forename']);
if (isset($_POST['surname']))
  $forename = fix_string($_POST['surname']);
if (isset($_POST['buildingName']))
  $forename = fix_string($_POST['buildingName']);
if (isset($_POST['roomNumber']))
  $forename = fix_string($_POST['roomNumber']);
if (isset($_POST['problem']))
  $forename = fix_string($_POST['problem']);
if (isset($_POST['email']))
  $forename = fix_string($_POST['email']);

$fail = validate_forename($forename);
$fail .= validate_surname($surname);
$fail .= validate_buildingName($buidingName);
$fail .= validate_roomNumber($roomNumber);
$fail .= validate_problem($problem);
$fail .= validate_email($email);

echo "<!DOCTYPE html>\n<html><head><title>Form Submit</title>";

if ($fail == ""){
  echo "</head><body>Form data successfully validated:
    $forename, $surname, $buildingName, $roomNumber, $problem, $email.</body></html>";

//Enter posted fields into the database
  exit;
}//end conditional
echo <<<_END<style>
  h1 {
    font: normal 1.5em Montserrat;
  }
  .signup {
    width: auto;
    border: 1px solid #999999;
    font: normal 2em Sawarabi Mincho;
    color: #444444;
  }
  .subbutton {
    font-family: Helvetica;
    font-size: 1em;
    width:auto;
  }
  </style>
  <script>

  function validate(form){
    fail = validateForename(form.forename.value);
    fail += validateSurname(form.surname.value);
    fail += validateBuildingName(form.buildingName.value);
    fail += validateRoomnumber(form.roomNumber.value);
    fail += validateProblem(form.problem.value);
    fail += validateEmail(form.email.value);

    if (fail === "") {return true;}
    else {alert(fail); return false;}
  }//end function

  function validateForename(field){
    return (field == "") ? "First name field was empty.\n" : "";
  }//end validate First Name
  function validateSurname(field) {
    return (field == "") ? "Last name field was empty.\n" : "";
  }//end Validate last name
  function validateBuildingName(field){
    if (field == "") return "Building name field was empty.\n";
    return "";
  }//end validate username
  function validateRoomnumber(field){
    if (field == "") return "Room number field was empty.\n";
    return "";
  }//end validate username
  function validateProblem(field){
    if (field=="") return "Text field was empty.\n";
    else if (field.length < 10) return "Please provide more information.\n";
    return "";
  }//end validate username
  function validateEmail(field){
    if (field == "") return "Email field was empty.\n";
    else if(!((field.indexOf(".")>0) && (field.indexOf('@') >0)) || /[^a-zA-Z0-9.@_-]/.test(field))
      {return "The Email address is invalid.\n";}
    else if(field === "eg. name@sbts.edu" || field === "eg.name@sbts.edu")
      {return "The Email address is invalid.\n";}
    return "";
  }//end validate email
  </script>
  </head>
  <body>

    <table border="0" cellpadding="2" cellspacing="5" bgcolor="#eeeeee">
      <th colspan="2" align="center"><h1>Report a Problem</h1></th>
      <th colspan="2" align="center"><h1>Report a Problem</h1></th>
      <tr><td colspan="2">Sorry, the following errors were encoutered<br>
        in your form: <p><font color=red size=1<i>$fail</i></font></p></td></tr>
      <form method="post" action="php/reportform.php" onSubmit="return validate(this)">
        <tr><td>First Name</td>
          <td><input type="text" maxlength="32" name="forename" value="$forename"></td></tr>
        <tr><td>Last Name</td>
          <td><input type="text" maxlength="32" name="surname" value="$surname"></td></tr>
        <tr><td>Building Name</td>
          <td><input type="text" maxlength="16" name="buildingName" value="$buildingName"></td></tr>
        <tr><td>Room Number</td>
          <td><input type="text" maxlength="16" name="roomNumber" value="$roomNumber"></td></tr>
        <tr><td>Problem</td>
          <td><textarea type="text" maxlength="200" name="problem" value="$problem">Type your problem here</textarea></td></tr>
        <tr><td>Email</td>
          <td><input type="text" maxlength="64" name="email" value="$email"></td></tr>
        <tr><td colspan="2" align="center"><input type="submit" value="Submit"></td></tr>
      </form>
    </table>
  </body>
</html>

_END;

function validate_forename($field){
  return ($field == "") ? "First name was left blank<br>" : "";
}
function validate_lastname($field){
  return ($field == "") ? "Last name was left blank<br>" : "";
}
function validate_buildingName($field){
  return ($field == "") ? "Building field was left blank<br>" : "";
}
function validate_roomNumber($field){
  return ($field == "") ? "Room field was left blank<br>" : "";
}
function validate_problem($field){
  return ($field == "") ? "Problem field was left blank<br>" : "";
}
function validate_email($field){
  if ($field == "") return "Email was left blank<br>";
  else if (!((strpos($field, ".") > 0) && (strpos($field, "@") > 0)) ||
    preg_match("/[^a-zA-Z0-9.@_-]/", $field)) return "The email address is invalid<br>";
  return "";
}

function fix_string($string){
  if (get_magic_quotes_gpc()) $string = stripslashes($string);
  return htmlentities ($string);
}

?>
