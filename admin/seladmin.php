<?php
require "conn.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>����Ա��Ϣ</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="javascript">

 function chkinput(form)
  {
    if(form.n0.value=="")
	   {
	     alert("�������û���!");
		 form.n0.select();
		 return(false);
	   
	   } 
	if(form.n1.value!="")
	  {
	    if(form.n1.value==""||form.n2.value=="")
		 {
		   alert("���������û�����ȷ���û���!");
		   form.n1.select();
		   return(false);
		 }
	   if(form.n1.value!=form.n2.value)
	   {
	       alert("���û�����ȷ���û�����ͬ!");
		   form.n1.select();
		   return(false);
	   
	   }
	  }
	  if(form.p0.value=="")
	   {
	     alert("�������û�����!");
		 form.p0.select();
		 return(false);
	   
	   }
	   
    if(form.p1.value!="")
	  {
	    if(form.p1.value==""||form.p2.value=="")
		 {
		   alert("���������û������ȷ������!");
		   form.p1.select();
		   return(false);
		 }
	    if(form.p1.value!=form.p2.value)
	   {
	       alert("���û�������ȷ���û����벻ͬ!");
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
    <span>λ�ã�</span>
    <ul class="placeul">
    <li><a href="center.php">��ҳ</a></li>
    <li><a href="seladmin.php">����Ա��Ϣ</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>����Ա��Ϣ</span></div>
     <table width="750" border="0" align="center" cellpadding="0" cellspacing="0">
    <form name="form1" method="post" action="savechangeadmin.php" onSubmit="return chkinput(this)">
	<ul class="forminfo">
	<li><label>ԭ����Ա����</label><input type="text" name="n0" class="dfinput" size="20"></li>
    <li><label>�¹���Ա����</label><input type="text" name="n1" class="dfinput" size="20"></li>
	<li><label>ȷ���¹���Ա����</label><input type="text" name="n2" class="dfinput" size="20"></li>
	<li><label>ԭ����Ա���룺</label><input type="password" name="p0" class="dfinput" size="20"></li>
	<li><label>�¹���Ա���룺</label><input type="password" name="p1" class="dfinput" size="20"></li>
	<li><label>ȷ���¹���Ա���룺</label><input type="password" name="p2" class="dfinput" size="20"></li>
	<li><label></label><input type="submit" value="����" class="buttoncss">&nbsp;<input type="reset" value="ȡ������" class="buttoncss"></li>
		  </ul>
	</form>

    </table>
    </div>
</body>
</html>
