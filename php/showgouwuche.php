<?php
$phone = $_GET["phone"];
$mysqli = new mysqli("127.0.0.1", "root", "", "html");

if ($mysqli -> connect_errno) {
	exit($mysqli -> connect_errno);
}

$mysqli -> set_charset("utf8");

$sqlStr = "select * from gouwuche where phone = {$phone}";

$result = $mysqli -> query($sqlStr);

$arr = array();

if ($result -> num_rows) {
	for ($i = 0; $i < $result->num_rows; $i++) { 
		$row = $result->fetch_object();
		array_push($arr, $row);
	}	
}

echo json_encode($arr);

$mysqli -> close();
?>