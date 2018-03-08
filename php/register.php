<?php
    $phone = $_GET["phone"];
	$password = $_GET["password"];
	$mysqli = new mysqli("127.0.0.1", "root", "", "html");
	if($mysqli->connect_errno){
		exit($mysqli->connect_error);
	}
	//设置编码格式
	$mysqli->set_charset("utf8");
	//查询数据库
	$sqlStr1 = "select * from friday";
	//执行语句
	$result = $mysqli->query($sqlStr1);
	
	$flag = FALSE;
	$arr = array();
	//逐行读取
	for($i = 0; $i < $result->num_rows; $i++){
		$row = $result->fetch_object();
		if($row->phone == $phone){
			$flag = TRUE;
			$arr["result"] =0;
			break;
		}
	}
	
	if($flag == FALSE){
		$sqlStr2 = "insert into friday (phone,password) values({$phone},'{$password}')";
		if($mysqli->query($sqlStr2)){
			$arr["result"] =1;
		}
	}
	
	echo json_encode($arr);
	
	$mysqli->close();
?>