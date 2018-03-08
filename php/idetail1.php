<?php
    $phone = $_GET["phone"];
$mysqli = new mysqli("127.0.0.1", "root", "", "html");
	if($mysqli->connect_errno){
		exit($mysqli->connect_error);
	}
	//设置编码格式
	$mysqli->set_charset("utf8");
	//查询数据库
	$sqlStr1 = "select * from friday where phone = '{$phone}'";
	//执行语句
	$result = $mysqli -> query($sqlStr1);
	
	if($result->num_rows){
		$row = $result -> fetch_object();
		$arr = array();
		$arr["photo"] = $row -> photo;
		$arr["nicheng"] = $row -> nicheng;
		$arr["sex"] = $row -> sex;
		$arr["birthday"] = $row -> birthday;
		$arr["phone"] = $phone;
	}
	
	
	echo json_encode($arr);
	
	$mysqli->close();
?>