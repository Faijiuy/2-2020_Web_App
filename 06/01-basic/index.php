<?php
    $A = [5,3,7,1,8,4];
    echo var_dump($A);

    $x = 10;

    for ($i = 0; $i < count($A); $i++){
        echo $i . ": " . $A[$i] . "\n";
    }
?>