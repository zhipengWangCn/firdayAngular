<?php
session_start();
include("conn.php");
if(is_numeric($_POST["shichangjia"])==false || is_numeric($_POST["huiyuanjia"])==false)
 {
   echo "<script>alert('价格只能为数字！');history.back();</script>";
   exit;
 }

$mingcheng=$_POST["mingcheng"];

$shichangjia=$_POST["shichangjia"];
$huiyuanjia=$_POST["huiyuanjia"];

$jianjie=$_POST["jianjie"];

$sql="insert into shop(name,detail,price,oldPrice)values('$mingcheng','$jianjie','$huiyuanjia','$shichangjia')";

mysqli_query($con,$sql);
echo "<script>alert('商品".$mingcheng."添加成功!');window.location.href='insertgoods.php';</script>";
?>