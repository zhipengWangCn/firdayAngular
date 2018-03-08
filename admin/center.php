<?php
session_start();
$user=$_SESSION["zhanghu"];
?>
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title></title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
</head>

<body>
<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="#">首页</a></li>
    </ul>
    </div>
    
    <div class="mainindex">
    
    
    <div class="welinfo">
    <span><img src="images/sun.png" alt="" /></span>
    <b><?php echo $user;?>早上好，欢迎使用礼拜五商城</b>(<?php echo $user;?>)
    
    </div>
    
    
    
    <div class="xline"></div>
    
    <ul class="iconlist">
    
    <li><img src="images/ico01.png" /><p><a href="insertgoods.php">添加商品</a></p></li>
    <!--<li><img src="images/ico02.png" /><p><a href="reply.php">评论管理</a></p></li>-->
    <li><img src="images/ico03.png" /><p><a href="selorder.php">订单管理</a></p></li>
    <li><img src="images/ico05.png" /><p><a href="seluser.php">会员管理</a></p></li>

            
    </ul>
    
    
    
    <div class="xline"></div>
    <div class="box"></div>
    
   
   
    
    <div class="xline"></div>
    
  
    
    
    
    
    </div>
</body>
</html>
