<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title>会员信息</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>

<script type="text/javascript">
$(document).ready(function(){
  $(".click").click(function(){
  $(".tip").fadeIn(200);
  });
  
  $(".tiptop a").click(function(){
  $(".tip").fadeOut(200);
});

  $(".sure").click(function(){
  $(".tip").fadeOut(100);
});

  $(".cancel").click(function(){
  $(".tip").fadeOut(100);
});

});
</script>


</head>


<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="#">首页</a></li>
    <li><a href="#">会员信息</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
<?php
include("conn.php");
$id=$_GET["id"];
$sql=mysqli_query($con,"select * from friday where id=".$id."");
$info=mysqli_fetch_array($sql,MYSQLI_ASSOC);
?>

   <table width="650" border="0" align="center" cellpadding="0" cellspacing="1">
      <!--DWLayoutTable-->
      <tr>
        <td width="99" height="20" bgcolor="#FFFFFF"><div align="center">会员昵称：</div></td>
        <td width="180" bgcolor="#FFFFFF"><div align="left"><?php echo $info["nicheng"];?></div></td>
        
      </tr>
      <tr>
        <td height="20" bgcolor="#FFFFFF"><div align="center">真实姓名：</div></td>
        <td colspan="3" bgcolor="#FFFFFF"><div align="left"><?php echo $info["nicheng"];?></div></td>
      </tr>
      </tr>
	  <tr>
        <td height="20" bgcolor="#FFFFFF"><div align="center">联系电话：</div></td>
        <td colspan="3" bgcolor="#FFFFFF"><div align="left"><?php echo $info["phone"];?></div></td>
      </tr>
      </tr>
    </table>
    <br />
   
    
    
    
    
    </div>
    
 
</body>
</html>
