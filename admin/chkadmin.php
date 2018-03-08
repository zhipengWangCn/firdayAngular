<?php

     include("conn.php");

      $sql=mysqli_query($con,"select * from tb_admin where name='".$_POST["name"]."' and pwd='".$_POST["pwd"]."'");
     $info = mysqli_num_rows($sql);
     if($info!=1){
          echo "<script type='text/javascript'>alert('没有此管理员');history.back();</script>";
          exit;
       }else{
		   session_start();
			$_SESSION["zhanghu"]=$_POST["name"];
           header("location:main.php");

      }    
   


?>