<?php

$id = $_GET["id"];

$mysqli = new mysqli("127.0.0.1", "root", "", "html");

if ($mysqli -> connect_errno) {
	exit($mysqli -> connect_errno);
}

$mysqli -> set_charset("utf8");

$sqlStr = "delete from address where id = {$id}";

$arr = array();

if ($mysqli -> query($sqlStr)) {
	$arr["result"] = 1;
} else {
	$arr["result"] = 0;
}

echo json_encode($arr);

$mysqli -> close();
?>