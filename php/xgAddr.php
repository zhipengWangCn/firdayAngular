<?php
$phone = $_GET["phone"];
$id = $_GET["id"];
$isDefault = $_GET["isDefault"];
$address = $_GET["address"];

$mysqli = new mysqli("127.0.0.1", "root", "", "html");

if ($mysqli -> connect_errno) {
	exit($mysqli -> connect_errno);
}

$mysqli -> set_charset("utf8");

if ($isDefault == "0") {
	$sqlStr = "update address set isDefault = '{$isDefault}', address = '{$address}' where id = {$id}";

	$arr = array();

	if ($mysqli -> query($sqlStr)) {
		$arr["result"] = 1;
	} else {
		$arr["result"] = 0;
	}
} else {
	$sqlStr = "update address set isDefault = 0 where phone = '{$phone}'";

	$arr = array();

	if ($mysqli -> query($sqlStr)) {
		$sqlStr = "update address set isDefault = '{$isDefault}', address = '{$address}' where id = {$id}";
		
		if ($mysqli -> query($sqlStr)) {
			$arr["result"] = 1;
		} else {
			$arr["result"] = 0;
		}
	}
}

echo json_encode($arr);

$mysqli -> close();
?>