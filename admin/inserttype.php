<?php
require "conn.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>�����Ʒ���</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript">
 function chkinput(form)
 {
   if(form.leibie.value=="")
    {
	  alert('������������Ʒ�����!');
	  form.leibie.select();
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
    <li><a href="inserttype.php">�����Ʒ���</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>�����Ʒ���</span></div>
     <form name="form1" method="post" action="saveaddleibie.php" onSubmit="return chkinput(this);">
    <ul class="forminfo">
    <li><label>��Ʒ���</label><input type="text" name="leibie" size="25"class="dfinput" /><i>���ⲻ�ܳ���30���ַ�</i></li>
    <li><label>&nbsp;</label><input name="submit" type="submit"  class="btn" value="ȷ�����"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
