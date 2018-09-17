<?php

if (empty($_GET['building'])){
    echo "No data sent";
} else {
    $search = trim($_GET['building']);
    switch($search){
        case "Norton":
            $result = [11, 12, 13, 14, 15, 16, 17, 20,101, 102, 103, 104, 105, 195, 201, 202, 203, 204, 205, 206, 207, 208, 209, 232];
            break; 
        case "Carver":
            $result = [108, 135];
            break; 
        case "Rankin":
            $result = [101, 201];
            break; 
        case "Library":
            $result = ["Crismon", "Curriculum Lab", "Mullins Room"];
            break; 
        case "Cook": 
            $result = [8, 221, 224, 'CCRH', 'IRH', 'Heeren Hall'];
            break; 
    }
    echo json_encode($result); 
}

?>