<?php


echo <<<_END
    <!DOCTYPE html>\n<html><head><title>Form Submit</title>
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
        <tr><td>First Name</td>
          <td><input type="text" maxlength="32" name="forename" value=""></td></tr>
        <tr><td>Last Name</td>
          <td><input type="text" maxlength="32" name="surname" value=""></td></tr>
        <tr><td>Building Name</td>
          <td><input type="text" maxlength="16" name="buildingName" value=""></td></tr>
        <tr><td>Room Number</td>
          <td><input type="text" maxlength="16" name="roomNumber" value=""></td></tr>
        <tr><td>Problem</td>
          <td><textarea type="text" maxlength="200" name="problem" value=""></textarea></td></tr>
        <tr><td>Email</td>
          <td><input type="text" maxlength="64" name="email" value=""></td></tr>
        <tr><td colspan="2" align="center"><input class="subbutton" type="submit" name="submit" value="Submit"></td></tr>
      </form>
    </table>
  </body>
</html>
_END;



?>
