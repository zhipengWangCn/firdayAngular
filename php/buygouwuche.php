<?php

$arrS = $_GET["arrS"];

$mysqli = new mysqli("127.0.0.1", "root", "", "html");

if ($mysqli -> connect_errno) {
	exit($mysqli -> connect_errno);
}

$mysqli -> set_charset("utf8");



$sqlStr = "update address set isDefault = 0 where phone = '{$phone}'";

$arr = array();

if ($mysqli -> query($sqlStr)) {
	$sqlStr = "update address set isDefault = 1 where id = {$id}";
	if ($mysqli -> query($sqlStr)) {
		$arr["result"] = 1;
	} else {
		$arr["result"] = 0;
	}
}

echo json_encode($arr);

$mysqli -> close();
?>