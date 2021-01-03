<?php
// Get a file handle
$file = fopen("sub-districts.csv", "r");
$counter = 0;
$sub_districts = array();
while (!feof($file)) {
  $line = fgetcsv($file);
  $counter++;

  if ($counter == 1) continue;

  //echo print_r($line). '<br/>';
  array_push($sub_districts, $line);
}

function cmp($a, $b) {
  return strcmp($a[2], $b[2]);
}

usort($sub_districts, "cmp");

echo '<pre>';
echo var_dump($sub_districts);
echo '</pre>';
fclose($file);
?>