<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php
 include("conn.php");
 $title=$_POST["title"];
 $content=$_POST["content"];
 
 mysqli_query($con,"insert into tb_gonggao (title,content,time) values ('$title','$content','$time')");
 echo "<script>alert('公告添加成功!');history.back();</script>";
?>