<?php 
  include("conn.php");
  $sql1=mysql_query("select * from tb_shangpin where id=".$_GET["id"]."",$conn);
  $info1=mysql_fetch_array($sql1);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>更改商品信息</title>
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
	     alert("请输入商品会员价!");
		 form.huiyuanjia.select();
		 return(false);
	   }
	 
	
	
	  if(form.shichangjia.value=="")
	   {
	     alert("请输入商品市场价!");
		 form.shichangjia.select();
		 return(false);
	   }
	  if(form.dengji.value=="")
	   {
	     alert("请输入商品等级!");
		 form.dengji.select();
		 return(false);
	   }
	   
	   
	   if(form.pinpai.value=="")
	   {
	     alert("请输入商品品牌!");
		 form.pinpai.select();
		 return(false);
	   }
	   
	   if(form.xinghao.value=="")
	   {
	     alert("请输入商品型号!");
		 form.xinghao.select();
		 return(false);
	   }
	   if(form.shuliang.value=="")
	   {
	     alert("请输入商品数量!");
		 form.shuliang.select();
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
    <li><a href="insertgoods.php?id=<?php echo $_GET["id"];?>">更改商品</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    <div class="formtitle"><span>更改商品</span></div>
    <form name="form1"  enctype="multipart/form-data" method="post" action="savechangegoods.php?id=<?php echo $_GET["id"];?>" onSubmit="return chkinput(this)">
    <ul class="forminfo">
    <li><label>商品名称</label><input type="text" name="mingcheng" value="<?php echo $info1["mingcheng"];?>" size="25"class="dfinput" /><i>标题不能超过30个字符</i></li>
    <li><label>上市时间</label><select name="nian" class="dfinput" style="width:100px;">
 <?php 
  for($i=1995;$i<=2050;$i++)
  {
 ?>
  <option <?php if(substr($info1["addtime"],0,4)==$i){echo "selected";}?>><?php echo $i;?></option>
  <?php 
  }
 ?>
</select>          
年
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
          月
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
          日<i></i></li>
    <li><label>市场价</label><input type="text" name="shichangjia" size="25"class="dfinput" value="<?php echo $info1["shichangjia"];?>" /></li>
    <li><label>会员价</label><input type="text" name="huiyuanjia" size="25"class="dfinput" value="<?php echo $info1["huiyuanjia"];?>" /></li>
    <li><label>商品类型</label> <?php
			$sql=mysql_query("select * from tb_type order by id desc",$conn);
			$info=mysql_fetch_array($sql);
			if($info==false)
			{
			  echo "请先添加商品类型!";
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
	<li><label>商品等级</label><select name="dengji" class="dfinput" style="width:100px;">
            <option value="精品" <?php if(trim($info1["dengji"])=="精品"){echo "selected";}?>>精品</option>
                  <option value="一般" <?php if(trim($info1["dengji"])=="一般"){echo "selected";}?>>一般</option>
                  <option value="二手" <?php if(trim($info1["dengji"])=="二手"){echo "selected";}?>>二手</option>
                  <option value="淘汰" <?php if(trim($info1["dengji"])=="淘汰"){echo "selected";}?>>淘汰</option>
          </select></li>
	<li><label>商品品牌</label><input type="text" name="pinpai" size="25"class="dfinput" value="<?php echo $info1["pinpai"];?>"></li>
	<li><label>商品型号</label><input type="text" name="xinghao" size="25"class="dfinput" value="<?php echo $info1["xinghao"];?>"></li>
	<li><label>是否推荐</label> <select name="tuijian" class="dfinput"style="width:100px;" >
            <option value=1 <?php if($info1["tuijian"]==1) {echo "selected";}?>>是</option>
                  <option value=0 <?php if($info1["tuijian"]==0) {echo "selected";}?>>否</option>
          </select></li>
	<li><label>商品数量</label><input type="text" name="shuliang" size="25"class="dfinput" value="<?php echo $info1["shuliang"];?>" /></li>
	<li><label>商品图片</label><input type="hidden" name="MAX_FILE_SIZE" value="2000000">
        <input type="file" name="upfile" class="dfinput" size="30"></li>
	
    <li><label>商品简介</label><textarea name="jianjie" cols="" rows="" class="textinput"><?php echo $info1["jianjie"];?></textarea></li>
    <li><label>&nbsp;</label><input name="submit" type="submit" class="btn" value="确认添加"/></li>
    </ul>
    </form>
    
    </div>
</body>
</html>
