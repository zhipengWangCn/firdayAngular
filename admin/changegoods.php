<?php 
  include("conn.php");
  $sql1=mysql_query("select * from tb_shangpin where id=".$_GET["id"]."",$conn);
  $info1=mysql_fetch_array($sql1);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>������Ʒ��Ϣ</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
        <script language="javascript">
	function chkinput(form)
	{
	  if(form.mingcheng.value=="")
	   {
	     alert("��������Ʒ����!");
		 form.mingcheng.select();
		 return(false);
	   }
	  
	
	
	  if(form.huiyuanjia.value=="")
	   {
	     alert("��������Ʒ��Ա��!");
		 form.huiyuanjia.select();
		 return(false);
	   }
	 
	
	
	  if(form.shichangjia.value=="")
	   {
	     alert("��������Ʒ�г���!");
		 form.shichangjia.select();
		 return(false);
	   }
	  if(form.dengji.value=="")
	   {
	     alert("��������Ʒ�ȼ�!");
		 form.dengji.select();
		 return(false);
	   }
	   
	   
	   if(form.pinpai.value=="")
	   {
	     alert("��������ƷƷ��!");
		 form.pinpai.select();
		 return(false);
	   }
	   
	   if(form.xinghao.value=="")
	   {
	     alert("��������Ʒ�ͺ�!");
		 form.xinghao.select();
		 return(false);
	   }
	   if(form.shuliang.value=="")
	   {
	     alert("��������Ʒ����!");
		 form.shuliang.select();
		 return(false);
	   }
	   if(form.jianjie.value=="")
	   {
	     alert("��������Ʒ���!");
		 form.jianjie.select();
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
    <li><a href="insertgoods.php?id=<?php echo $_GET["id"];?>">������Ʒ</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>������Ʒ</span></div>
    <form name="form1"  enctype="multipart/form-data" method="post" action="savechangegoods.php?id=<?php echo $_GET["id"];?>" onSubmit="return chkinput(this)">
    <ul class="forminfo">
    <li><label>��Ʒ����</label><input type="text" name="mingcheng" value="<?php echo $info1["mingcheng"];?>" size="25"class="dfinput" /><i>���ⲻ�ܳ���30���ַ�</i></li>
    <li><label>����ʱ��</label><select name="nian" class="dfinput" style="width:100px;">
 <?php 
  for($i=1995;$i<=2050;$i++)
  {
 ?>
  <option <?php if(substr($info1["addtime"],0,4)==$i){echo "selected";}?>><?php echo $i;?></option>
  <?php 
  }
 ?>
</select>          
��
          <select name="yue" class="dfinput"style="width:100px;">
            <?php 
            for($i=1;$i<=12;$i++)
             {
            ?>
           <option <?php if(substr($info1["addtime"],5,1)==$i){echo "selected";} ?>><?php echo $i;?></option>
            <?php 
             }
             ?>
          </select>
          ��
          <select name="ri" class="dfinput" style="width:100px;">
		  <?php 
            for($i=1;$i<=31;$i++)
             {
            ?>
		  
            <option <?php if(substr($info1["addtime"],7,1)==$i){echo "selected";} ?>><?php echo $i;?></option>
		 <?php 
             }
             ?>
          </select>
          ��<i></i></li>
    <li><label>�г���</label><input type="text" name="shichangjia" size="25"class="dfinput" value="<?php echo $info1["shichangjia"];?>" /></li>
    <li><label>��Ա��</label><input type="text" name="huiyuanjia" size="25"class="dfinput" value="<?php echo $info1["huiyuanjia"];?>" /></li>
    <li><label>��Ʒ����</label> <?php
			$sql=mysql_query("select * from tb_type order by id desc",$conn);
			$info=mysql_fetch_array($sql);
			if($info==false)
			{
			  echo "���������Ʒ����!";
			}
			else
			{
			?>
            <select name="typeid" class="dfinput" style="width:100px;">
			<?php
			do
			{
			?>
              <option value=<?php echo $info["id"];?> <?php if($info1["typeid"]==$info["id"]) {echo "selected";}?>><?php echo $info["typename"];?></option>
			<?php
			}
			while($info=mysql_fetch_array($sql));
			?>  
            </select>
            <?php
		     }
		    ?></li>
	<li><label>��Ʒ�ȼ�</label><select name="dengji" class="dfinput" style="width:100px;">
            <option value="��Ʒ" <?php if(trim($info1["dengji"])=="��Ʒ"){echo "selected";}?>>��Ʒ</option>
                  <option value="һ��" <?php if(trim($info1["dengji"])=="һ��"){echo "selected";}?>>һ��</option>
                  <option value="����" <?php if(trim($info1["dengji"])=="����"){echo "selected";}?>>����</option>
                  <option value="��̭" <?php if(trim($info1["dengji"])=="��̭"){echo "selected";}?>>��̭</option>
          </select></li>
	<li><label>��ƷƷ��</label><input type="text" name="pinpai" size="25"class="dfinput" value="<?php echo $info1["pinpai"];?>"></li>
	<li><label>��Ʒ�ͺ�</label><input type="text" name="xinghao" size="25"class="dfinput" value="<?php echo $info1["xinghao"];?>"></li>
	<li><label>�Ƿ��Ƽ�</label> <select name="tuijian" class="dfinput"style="width:100px;" >
            <option value=1 <?php if($info1["tuijian"]==1) {echo "selected";}?>>��</option>
                  <option value=0 <?php if($info1["tuijian"]==0) {echo "selected";}?>>��</option>
          </select></li>
	<li><label>��Ʒ����</label><input type="text" name="shuliang" size="25"class="dfinput" value="<?php echo $info1["shuliang"];?>" /></li>
	<li><label>��ƷͼƬ</label><input type="hidden" name="MAX_FILE_SIZE" value="2000000">
        <input type="file" name="upfile" class="dfinput" size="30"></li>
	
    <li><label>��Ʒ���</label><textarea name="jianjie" cols="" rows="" class="textinput"><?php echo $info1["jianjie"];?></textarea></li>
    <li><label>&nbsp;</label><input name="submit" type="submit" class="btn" value="ȷ�����"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
