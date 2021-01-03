<?php
    $score = readline("Enter score: ");
    $grade = '';

    if ($score >= 80) {
        $grade = "A";
    } elseif ($score >= 70) {
        $grade = "B";
    } elseif ($score >= 60) {
        $grade = "C";
    } elseif ($score >= 50) {
        $grade = "D";
    } else {
        $grade = "F";
    }

    //echo "The grade is " . $grade;
    echo "The grade is  $grade\n";
    //echo 'The grade is  $grade\n';
?>