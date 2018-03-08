<?php
include("conn.php");
while(list($name,$value)=each($_POST))
{
   mysql_query("delete from tb_leaveword where id='".$value."'",$conn);

}
header("location:feedbook.php");
?>