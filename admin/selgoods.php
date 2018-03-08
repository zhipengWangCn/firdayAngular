<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>添加商品</title>
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
    <li><a href="#">添加商品</a></li>
 
    </ul>
    </div>
    
    <div class="rightinfo">
    <form name="form1" method="post" action="deletefxhw.php">
    <div class="tools">
    

        <ul class="toolbar">

        <li><span><input type="image" src="images/t03.png" /></span>删除</li>
        </ul>
        
   
    
    </div>
<?php
require "conn.php";
$Page_size=15; 
$sql="select * from tb_shangpin";
   $result=mysql_query($sql);   
   $count=mysql_num_rows($result);   
   $page_count = ceil($count/$Page_size); 
   $init=1;   
   $page_len=7;   
   $max_p=$page_count;   
   $pages=$page_count;
   //判断当前页码   
   if(empty($_GET['page'])||$_GET['page']<0){   
   $page=1;   
   }else {   
   $page=$_GET['page'];   
   }
   $offset=$Page_size*($page-1); 
   $sql="select * from tb_shangpin order by id desc limit $offset,$Page_size";
?>    
    
    <table class="tablelist">
    	<thead>
    	<tr>
        <th><input name="" type="checkbox" value="" checked="checked"/></th>
        <th>名称<i class="sort"><img src="images/px.gif" /></i></th>
        <th>品牌</th>
        <th>型号</th>
        <th>剩余</th>
        <th>市场价</th>
        <th>会员价</th>
        <th>卖出</th>
		<th>加入时间</th>
		<th>操作</th>
        </tr>
        </thead>
        <tbody>
		 <?php 
       $i=1;
       $result=mysql_query($sql);   
       while($info1=mysql_fetch_array($result)) {   
     ?>
        <tr>
        <td><input type="checkbox" name="<?php echo $info1["id"];?>" value=<?php echo $info1["id"];?>></td>
        <td><?php echo $info1["mingcheng"];?></td>
        <td><?php echo $info1["pinpai"];?></td>
        <td><?php echo $info1["xinghao"];?></td>
        <td><?php if($info1["shuliang"]<0) {echo "售完";}else {echo $info1["shuliang"];}?></td>
        <td><?php echo $info1["shichangjia"];?></td>
        <td><?php echo $info1["huiyuanjia"];?></td>
        <td><?php echo $info1["cishu"];?></td>
        <td><?php echo $info1["addtime"];?></td>
        <td><a href="changegoods.php?id=<?php echo $info1["id"];?>">更改</a></td>
      </tr>
        <?php   
      }
	  require "page.php";
	  
	  ?>
        
        
        
        </tbody>
    </table>
	</form>
    <?php
	echo $key;
	?>
   
   
    
   
    
    
    
    
    </div>
    
    <script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
	</script>
</body>
</html>
