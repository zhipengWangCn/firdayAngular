<?php
   
     
     $con = mysqli_connect('localhost','root','','html');//创建的mysqli对象，又叫句柄
	
	
	//设置编码格式
	//mysqli_set_charset(链接句柄, 编码格式)
	mysqli_set_charset($con, 'utf8');
     
?>
