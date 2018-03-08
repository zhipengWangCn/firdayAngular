<?php
include("conn.php");

while(list($name,$value)=each($_POST)){
    mysqli_query($con,"delete from friday where id=".$value."");
  }
header("location:seluser.php");
?>