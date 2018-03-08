<?php

$phone = $_GET["phone"];
$danjia = $_GET["danjia"];
$store = $_GET["store"];
$img = $_GET["img"];
$guige = $_GET["guige"];
$num = $_GET["num"];
$font = $_GET["font"];

$mysqli = new mysqli("127.0.0.1", "root", "", "html");

if ($mysqli -> connect_errno) {
	exit($mysqli -> connect_errno);
}

$mysqli -> set_charset("utf8");

$sqlStr = "insert into gouwuche (phone, danjia, store, img, guige, num, font) values ('{$phone}', {$danjia}, '{$store}', '{$img}', '{$guige}', '{$num}', '{$font}')";

if ($mysqli -> query($sqlStr)) {
	$arr["result"] = 1;
} else {
	$arr["result"] = 0;
}

echo json_encode($arr);

$mysqli -> close();
?>