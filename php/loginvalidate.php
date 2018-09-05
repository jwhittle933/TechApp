<?php
require 'authenticate.php';
include 'functions.php';

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

$query = "SELECT * FROM credentials WHERE username = ? AND password = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('ss', $username, $password);
$result = $stmt->execute();
if(!$result) {
  echo "Username and password are incorrect";
} else {
  echo "Welcome $username!";
}



?>
