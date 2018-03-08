<?php

include("conn.php");
$leibie=$_POST["name"];
$mima=md5($_POST["pass"]);
$sql=mysql_query("select * from tb_admin where name='".$leibie."'",$conn);

$info=mysql_fetch_array($sql);

if($info!=false){
 echo"<script>alert('该管理员已经存在!');window.location.href='admin_list.php';</script>";
exit;
}
else
{
 mysql_query("insert into tb_admin (name,pwd) values ('$leibie','$mima')",$conn);

echo"<script>alert('添加成功!');window.location.href='admin_list.php';</script>";
}
?>