<?php
//验证码登录
   $phone = $_GET["phone"];
$mysqli = new mysqli("127.0.0.1", "root", "", "html");
   if($mysqli->connect_errno){
   		exit($mysqli->connect_error);
   }
   $mysqli->set_charset("utf-8");
   $sqlStr = "select * from friday where phone = {$phone}";

   $arr = array();
   $result = $mysqli->query($sqlStr);
   if($result->num_rows){
   		$arr["result"] = 1;
   }else{
   		$arr["result"] = 0;
   }
   
   echo json_encode($arr);
   $mysqli->close();
   
?>