
<?php

include("conn.php");
$leibie=$_POST["leibie"];
$sql=mysql_query("select * from tb_type where typename='".$leibie."'",$conn);

$info=mysql_fetch_array($sql);

if($info!=false){
 echo"<script>alert('该类别已经存在!');window.location.href='inserttype.php';</script>";
exit;
}
else
{
mysql_query("insert into tb_type(typename) values ('$leibie')",$conn);
echo"<script>alert('添加成功!');window.location.href='inserttype.php';</script>";
}
?>