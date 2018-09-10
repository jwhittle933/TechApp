<?php
include 'inc/authenticate.php';
include 'inc/functions.php';


if (!isset($_POST['username'])){
  echo "<pre style='color:red; text-align:center;'>*Please enter your username</pre>";
} else $username = test_input($_POST['username']);
if (!isset($_POST['password'])){
  echo "<pre style='color:red; text-align:center;'>*Please enter your password</pre>";
} else $password = test_input($_POST['password']);

if (isset($_POST['username']) &&
    isset($_POST['password'])) {
    $query = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($query);
    $stmt = mysqli_fetch_array($result);
}
if ($stmt){
  // session_start();
  // $_SESSION['username'] = $username;
  // $_SESSION['password'] = $password;
  header('Location: requestmanager.php');
  exit();
} else {
  echo "<style>header { text-align: center;}h1 {font-family: Montserrat;} h2 {font:normal 1.5em Montserrat;} .signup {width: auto; border: 1px solid #999999; font: normal 1.5em Sawarabi Mincho; color: #444444} .subbutton {font-family: Helvetica; font-size: 1em; width:auto;} table {width: auto; text-align: center; margin-left: auto;margin-right: auto;margin-top: 100px; }
  </style>";
  echo "<header><h1>Tech Help Requests Portal</h1><p>Please login to continue</p><p style='color: red;'>*Username and password are incorrect</p></header>";
  echo "<table class = 'login' border='0' cellpadding='2' cellspacing='5' bgcolor='#eeeeee' style='margin-left:auto; margin-right:auto;'>";
  echo "<th colspan='2' align='center'><h2>Login</h2></th>";
  echo "<form method='post' action='loginvalidate.php'>";
  echo "<tr><td>Username</td>";
  echo "<td><input type='email' maxlength='32' name='username' required></td></tr>";
  echo "<tr><td>Password</td>";
  echo "<td><input type='password' maxlength='32' name='password' required></td>";
  echo "</tr><td><input class='subbutton' type='submit' name='submit' value='Login'></td></tr>";
  echo "</form></table>";
}

?>
