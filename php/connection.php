<?php

try {
  $db = new PDO("mysqli:".__DIR__."/mydatabse.db");
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
  echo $e->getMessage();
  exit;
}
