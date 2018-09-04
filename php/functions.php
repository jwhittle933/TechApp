<?php
function get_post($conn, $var){
  return $conn->real_escape_string($_POST[$var]);
}
function validate_forename($field){
  return ($field == "") ? "*First name is blank<br>" : "";
}
function validate_surname($field){
  return ($field == "") ? "*Last name is blank<br>" : "";
}
function validate_buildingName($field){
  return ($field == "") ? "*Building field is blank<br>" : "";
}
function validate_roomNumber($field){
  return ($field == "") ? "*Room field is blank<br>" : "";
}
function validate_problem($field){
  return ($field == "") ? "*Problem field is blank<br>" : "";
}
function validate_email($field){
  if ($field == "") return "*Email is blank<br>";
  else if (!((strpos($field, ".") > 0) && (strpos($field, "@") > 0)) ||
    preg_match("/[^a-zA-Z0-9.@_-]/", $field)) return "The email address is invalid<br>";
  return "";
}
function fix_string($string){
  if (get_magic_quotes_gpc()) $string = stripslashes($string);
  return htmlentities($string);
}

 ?>
