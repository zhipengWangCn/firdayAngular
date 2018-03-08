<?php
include("conn.php");
while(list($name,$value)=each($_POST))
 {
     $id=$value;
     mysql_query("delete from tb_admin where id=".$id."",$conn);
 
 }
header("location:admin_list.php");
?>