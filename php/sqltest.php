<?php
require_once 'login.php';
$connection = new mysqli($hn, $un, $pw, $db);
if ($connection->connect_error) {
  die('Fatal Error');
}

if (isset($_POST['delet']) && isset($_POST['isbn'])) {
  $isbn = get_post($conn, 'isbn');
  $query = "DELETE FROM classics WHERE isbn='$isbn'";
  $result = $conn->query($query);
  if (!$result) {echo "DELETE failed <br><br>";}
}
if (isset($_POST['author'])) &&
if (isset($_POST['title'])) &&
if (isset($_POST['category'])) &&
if (isset($_POST['year'])) &&
if (isset($_POST['isbn'])) {
  $author = get_post($conn, 'author');
  $title = get_post($conn, 'title');
  $category = get_post($conn, 'category');
  $year = get_post($conn, 'year');
  $isbn = get_post($conn, 'isbn');
  $query = "INSERT INTO classics VALUES" . "('$author', '$title', '$category', '$year', '$isbn')";
  $result = $conn->query($query);
  if (!$result){echo "INSERT failed<br><br>";}
}

echo
<<<_END <form action="sqltest.php" method="post"><pre>
  Author <input type="text" name="author">
  Title <input type="text" name="title">
  Category <input type="text" name="category">
  Year <input type="text" name="year">
  ISBN <input type="text" name="isbn">
      <input type="submit" value="ADD RECORD">
  </pre></form>_END;

  $query = "SELECT * FROM classics";
  $result = $conn->query($query);
  if (!$result){die ("Database access failed");}

  $rows = $result->num_rows;

  for ($i = 0; $i < $rows; ++$i){
    $row = $result->fetch_array(MSQLI_NUM);

    $r0 = htmlspecialchars($row[0])
    $r1 = htmlspecialchars($row[1])
    $r2 = htmlspecialchars($row[2])
    $r3 = htmlspecialchars($row[3])
    $r4 = htmlspecialchars($row[4])


    echo
    <<<_END <pre>
      Author $r0
      Title $r1
      Category $r2
      Year $r3
      ISBN $r4
    <pre>
    <form action="sqltest.php" method="post">
    <input type="hidden" name="delete" value="yes">
    <input type="hidden" name="isbn" value="$r4">
    <input type="submit" name="DELETE RECORD"></form>
    _END;
  }

  $result->close();
  $conn->close();

  function get_post($conn, $var){
    return $conn->real_escape_string($_POST[$var]);
  }
 ?>
