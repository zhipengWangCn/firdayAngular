<?php
require "conn.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>添加公告</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript">
  function chkinput(form)
   {
     if(form.title.value=="")
	 {
	   alert("请输入公告主题!");
	   form.title.select();
	   return(false);
	 }
     if(form.content.value=="")
	 {
	   alert("请输入公告内容!");
	   form.content.select();
	   return(false);
	 }
	 return(true);
   }
</script>
</head>

<body>
<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="center.php">首页</a></li>
    <li><a href="insertnews.php">添加公告</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>添加公告</span></div>
     <form name="form1" method="post" action="savenewgonggao.php" onSubmit="return chkinput(this);">
    <ul class="forminfo">
    <li><label>公告主题</label><input type="text" name="title" size="25"class="dfinput" /></li>
	<li><label>公告主题</label><textarea name="content" class="textinput"></textarea></li>
    <li><label>&nbsp;</label><input name="submit" type="submit" class="btn" value="确认添加"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
