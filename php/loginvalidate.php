<?php
require 'inc/authenticate.php';
include 'inc/functions.php';

if ($conn->connect_error) {
  die('Fatal Error');
}

$username = $password = "";
if (isset($_POST['username'])){
  $username = fix_string($_POST['username']);
}
if (isset($_POST['password'])){
  $password = fix_string($_POST['username']);
}

$query = "SELECT * FROM credentials WHERE username = $username AND password = $password";
$result = $conn->query($query);



if(!$result) {//Incorrect
  echo "Username and password are incorrect";
} else {//Correct
  header ('Location: requestmanager.php');
  exit();
}




?>
