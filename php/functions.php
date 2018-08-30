<?php
require_once 'login.php';

function get_book_list(){
  include 'connection.php';
  try {
    return $db->query('SELECT * FROM BOOKS');
  } catch (Exception $e) {
    echo "Error!: " . $e->getMessage();
    return false;
  }
}
$books = get_book_list();
$book_array = $podcasts->fetchAll(PDO::FETCH_ASSOC);
foreach ($book_array as $book) {
  echo $book['title']. " " . $book['year_published'];
}

/*
function add_project($title, $category) {
  include "connection.php"

  $sql = "INSERT INTO projects(title, category) VALUES (?, ?)";

  try {
    $results = $db->prepare($sql);
    $results->bindValue(1, $title, PDO::PARAM_STRING);
    $results->bindValue(1, $category, PDO::PARAM_STRING);
    $results->execute();
  } catch (Exception $e){
    echo "Error: " . $e->getMessage();
    return false;
  }
  return true;
}
*/
