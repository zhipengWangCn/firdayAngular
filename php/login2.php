<?php
//密码登录
   $phone = $_GET["phone"];
   $password = $_GET["password"];
//	$autologin = $_GET["autologin"];
  $mysqli = new mysqli("127.0.0.1", "root", "", "html");
   if($mysqli->connect_errno){
   		exit($mysqli->connect_error);
   }
   $mysqli->set_charset("utf-8");
   $sqlStr1 = "select * from friday where phone = {$phone} and password = '{$password}'";
   $arr = array();
   $result = $mysqli->query($sqlStr1);
   if($result->num_rows){
	   	$arr["result"] = 1;
//	   $row = $result->fetch_object();
//	   $id = $row->id;
//	   	$sqlStr2 = "update friday set autologin = '{$autologin}' where id = {$id}";
//		$mysqli->query($sqlStr2);
   }else{
   		$arr["result"] = 0;
   }
   
   echo json_encode($arr);
   $mysqli->close();
   
?>