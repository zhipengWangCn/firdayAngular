<?php
require "conn.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>��ӹ���</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript">
  function chkinput(form)
   {
     if(form.title.value=="")
	 {
	   alert("�����빫������!");
	   form.title.select();
	   return(false);
	 }
     if(form.content.value=="")
	 {
	   alert("�����빫������!");
	   form.content.select();
	   return(false);
	 }
	 return(true);
   }
</script>
</head>

<body>
<div class="place">
    <span>λ�ã�</span>
    <ul class="placeul">
    <li><a href="center.php">��ҳ</a></li>
    <li><a href="insertnews.php">��ӹ���</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>��ӹ���</span></div>
     <form name="form1" method="post" action="savenewgonggao.php" onSubmit="return chkinput(this);">
    <ul class="forminfo">
    <li><label>��������</label><input type="text" name="title" size="25"class="dfinput" /></li>
	<li><label>��������</label><textarea name="content" class="textinput"></textarea></li>
    <li><label>&nbsp;</label><input name="submit" type="submit" class="btn" value="ȷ�����"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
