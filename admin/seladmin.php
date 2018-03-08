<?php
require "conn.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>管理员信息</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript">

 function chkinput(form)
  {
    if(form.n0.value=="")
	   {
	     alert("请输入用户名!");
		 form.n0.select();
		 return(false);
	   
	   } 
	if(form.n1.value!="")
	  {
	    if(form.n1.value==""||form.n2.value=="")
		 {
		   alert("请输入新用户名或确认用户名!");
		   form.n1.select();
		   return(false);
		 }
	   if(form.n1.value!=form.n2.value)
	   {
	       alert("新用户名与确认用户名不同!");
		   form.n1.select();
		   return(false);
	   
	   }
	  }
	  if(form.p0.value=="")
	   {
	     alert("请输入用户密码!");
		 form.p0.select();
		 return(false);
	   
	   }
	   
    if(form.p1.value!="")
	  {
	    if(form.p1.value==""||form.p2.value=="")
		 {
		   alert("请输入新用户密码或确认密码!");
		   form.p1.select();
		   return(false);
		 }
	    if(form.p1.value!=form.p2.value)
	   {
	       alert("新用户密码与确认用户密码不同!");
		   form.p1.select();
		   return(false);
	   
	   }
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
    <li><a href="seladmin.php">管理员信息</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>管理员信息</span></div>
     <table width="750" border="0" align="center" cellpadding="0" cellspacing="0">
    <form name="form1" method="post" action="savechangeadmin.php" onSubmit="return chkinput(this)">
	<ul class="forminfo">
	<li><label>原管理员名：</label><input type="text" name="n0" class="dfinput" size="20"></li>
    <li><label>新管理员名：</label><input type="text" name="n1" class="dfinput" size="20"></li>
	<li><label>确认新管理员名：</label><input type="text" name="n2" class="dfinput" size="20"></li>
	<li><label>原管理员密码：</label><input type="password" name="p0" class="dfinput" size="20"></li>
	<li><label>新管理员密码：</label><input type="password" name="p1" class="dfinput" size="20"></li>
	<li><label>确认新管理员密码：</label><input type="password" name="p2" class="dfinput" size="20"></li>
	<li><label></label><input type="submit" value="更改" class="buttoncss">&nbsp;<input type="reset" value="取消更改" class="buttoncss"></li>
		  </ul>
	</form>

    </table>
    </div>
</body>
</html>
