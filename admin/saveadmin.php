<?php

include("conn.php");
$leibie=$_POST["name"];
$mima=md5($_POST["pass"]);
$sql=mysql_query("select * from tb_admin where name='".$leibie."'",$conn);

$info=mysql_fetch_array($sql);

if($info!=false){
 echo"<script>alert('�ù���Ա�Ѿ�����!');window.location.href='admin_list.php';</script>";
exit;
}
else
{
 mysql_query("insert into tb_admin (name,pwd) values ('$leibie','$mima')",$conn);

echo"<script>alert('��ӳɹ�!');window.location.href='admin_list.php';</script>";
}
?>