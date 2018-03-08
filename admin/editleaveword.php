<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>会员留言</title>
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
    <li><a href="#">会员留言信息</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
<?php
include("conn.php");
$id=$_GET["id"];
$sql=mysql_query("select * from tb_leaveword where id='".$id."'",$conn);
$info=mysql_fetch_array($sql);
?>

 <table width="750" height="100" border="0" align="center" cellpadding="0" cellspacing="1">
        <tr> 
          <td width="87" height="25" bgcolor="#FFFFFF"><div align="center">留言主题:</div></td>
          <td width="392" height="25" bgcolor="#FFFFFF"><div align="left"><?php echo $info["title"];?></div></td>
          <td width="83" bgcolor="#FFFFFF"><div align="center">留言时间:</div></td>
          <td width="183" bgcolor="#FFFFFF"><div align="center"><?php echo $info["time"];?></div></td>
        </tr>
        <tr> 
          <td height="100" bgcolor="#FFFFFF"><div align="center">留言内容:</div></td>
          <td colspan="3" bgcolor="#FFFFFF"><div align="left">
		<?php echo $info["content"];?>
		  </div></td>
        </tr>
      </table>
    
    
    
    
    </div>
    
 
</body>
</html>
