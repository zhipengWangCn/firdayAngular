
<?php

include("conn.php");
$leibie=$_POST["leibie"];
$sql=mysql_query("select * from tb_type where typename='".$leibie."'",$conn);

$info=mysql_fetch_array($sql);

if($info!=false){
 echo"<script>alert('������Ѿ�����!');window.location.href='inserttype.php';</script>";
exit;
}
else
{
mysql_query("insert into tb_type(typename) values ('$leibie')",$conn);
echo"<script>alert('��ӳɹ�!');window.location.href='inserttype.php';</script>";
}
?>