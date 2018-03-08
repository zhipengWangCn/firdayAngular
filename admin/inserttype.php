<?php
require "conn.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>添加商品类别</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript">
 function chkinput(form)
 {
   if(form.leibie.value=="")
    {
	  alert('请输入新增商品类别名!');
	  form.leibie.select();
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
    <li><a href="inserttype.php">添加商品类别</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>添加商品类别</span></div>
     <form name="form1" method="post" action="saveaddleibie.php" onSubmit="return chkinput(this);">
    <ul class="forminfo">
    <li><label>商品类别</label><input type="text" name="leibie" size="25"class="dfinput" /><i>标题不能超过30个字符</i></li>
    <li><label>&nbsp;</label><input name="submit" type="submit"  class="btn" value="确认添加"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
