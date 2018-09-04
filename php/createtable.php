<?php

require_once 'authenticate.php';

$query = "CREATE TABLE rooms (id SMALLINT NOT NULL AUTO_INCREMENT,
                              room_number VARCHAR(10) NOT NULL,
                              building_name VARCHAR(120) NOT NULL)";

$result = $conn->query($query);

if(!$result) die ("Database access failed.");

?>
