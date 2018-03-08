<?php
  $page=intval($_POST["page_id"]);
  include("conn.php");
  while(list($value,$name)=each($_POST))
   {  
     mysqli_query($con,"delete from `order` where id='".$value."'");
   }
 header("location:selorder.php");
?>