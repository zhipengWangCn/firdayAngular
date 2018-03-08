<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title>会员管理</title>
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
    <li><a href="center.php">首页</a></li>
    <li><a href="#">会员管理</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    <form name="form1" method="post" action="deleteuser.php">
    <div class="tools">
		<input class="tools-submit" type="submit" value="删除" />

        <ul class="toolbar">

        <li><span><input type="image" src="images/t03.png" /></span>删除</li>
        </ul>
        
   
    
    </div>
<?php
require "conn.php";
$Page_size=15; 
$sql="select * from friday";
   $result=mysqli_query($con,$sql);   
   $count=mysqli_num_rows($result);   
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
   $sql="select * from friday order by id desc limit $offset,$Page_size";
?>    
    
    <table class="tablelist">
    	<thead>
    	<tr>
        <th>会员昵称<i class="sort"><img src="images/px.gif" /></i></th>
        <th>手机号码</th>
        <th>删除</th>
        <th>查看信息</th>
        </tr>
        </thead>
        <tbody>
		 <?php 
       $i=1;
       $result=mysqli_query($con,$sql);   
       while($info1=mysqli_fetch_array($result,MYSQLI_ASSOC)){
	   
     ?>
        <tr>
       
        <td><?php echo $info1["nicheng"]; ?></td>
        <td><?php echo $info1["phone"]; ?></td>
        <td><input type="checkbox" name="<?php echo $info1["id"];?>" value=<?php echo $info1["id"];?>></td>
        <td><a href="lookuserinfo.php?id=<?php echo $info1["id"];?>">查看信息</a></td>
      </tr>
        <?php   
      }
	  require "page.php";
	  
	  ?>
        
        
        
        </tbody>
    </table>
	<?php
	echo $key;
	?>

	</form>
    
   
   
    
   
    
    
    
    
    </div>
    
    <script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
	</script>
</body>
</html>
