<?php
require "conn.php";
?>
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title>添加商品</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript">
	function chkinput(form)
	{
	  if(form.mingcheng.value=="")
	   {
	     alert("请输入商品名称!");
		 form.mingcheng.select();
		 return(false);
	   }
	  
	
	
	  if(form.huiyuanjia.value=="")
	   {
	     alert("请输入商品现价!");
		 form.huiyuanjia.select();
		 return(false);
	   }
	 
	
	
	  if(form.shichangjia.value=="")
	   {
	     alert("请输入商品原价!");
		 form.shichangjia.select();
		 return(false);
	   }
	 
	   
	   
	   
	   if(form.jianjie.value=="")
	   {
	     alert("请输入商品简介!");
		 form.jianjie.select();
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
    <li><a href="insertgoods.php">添加商品</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>添加商品</span></div>
    <form name="form1" enctype="multipart/form-data" method="post" action="savenewgoods.php" onSubmit="return chkinput(this)">
    <ul class="forminfo">
    <li><label>商品名称</label><input type="text" name="mingcheng" size="25"class="dfinput" /><i>标题不能超过30个字符</i></li>
    <li><label>原价</label><input type="text" name="shichangjia" size="25"class="dfinput" /></li>
    <li><label>现价</label><input type="text" name="huiyuanjia" size="25"class="dfinput" /></li>
    <li><label>商品简介</label><textarea name="jianjie" cols="" rows="" class="textinput"></textarea></li>
    <li><label>&nbsp;</label><input name="submit" type="submit" class="btn" value="确认添加"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
