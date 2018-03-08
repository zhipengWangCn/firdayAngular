<?php
$photo = $_GET["photo"]; 
$nicheng = $_GET["nicheng"]; 
$sex = $_GET["sex"]; 
$birthday = $_GET["birthday"]; 
$phone1 = $_GET["phone1"];
$phone2 = $_GET["phone2"];  

$mysqli = new mysqli("127.0.0.1", "root", "", "html");
if($mysqli -> connect_errno){
	exit($mysqli -> connect_error);
}
$mysqli->set_charset("utf8");

if($phone1 == ""){
	$phone1 = $phone2;
}

$sqlStr = "update friday set photo='{$photo}', nicheng = '{$nicheng}', sex = '{$sex}', birthday = '{$birthday}', phone = '{$phone1}' where phone = '{$phone2}'";

$result = $mysqli->query($sqlStr);

$arr = array();
if($result){
	$arr["result"] = 1;
	$arr["phone"] = $phone1;
}else{
	$arr["result"] = 0;
}

echo json_encode($arr);


$mysqli->close();
?>