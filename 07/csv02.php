<?php
// Get a file handle
$file = fopen("districts.csv", "r");
$counter = 0;
$districts = array();
while (!feof($file)) {
  $line = fgetcsv($file);
  $counter++;

  if ($counter == 1) continue;

  //echo print_r($line). '<br/>';
  array_push($districts, $line);
}

function cmp($a, $b) {
  return strcmp($a[2], $b[2]);
}

usort($districts, "cmp");

echo '<pre>';
echo var_dump($districts);
echo '</pre>';
fclose($file);
?>