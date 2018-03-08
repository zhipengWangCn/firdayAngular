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
	$arr["result"] = 1;
	
} else {
	$arr["result"] = 0;
}

echo json_encode($arr);

$mysqli -> close();
?>