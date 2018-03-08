<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>会员留言管理</title>
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
    <li><a href="#">会员留言管理</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    <form name="form1" method="post" action="deleteleaveword.php">
    <div class="tools">
    

        <ul class="toolbar">

        <li><span><input type="image" src="images/t03.png" /></span>删除</li>
        </ul>
        
   
    
    </div>
<?php
require "conn.php";
require "function.php";
$Page_size=15; 
$sql="select * from tb_leaveword";
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
   $sql="select * from tb_leaveword order by id desc limit $offset,$Page_size";
?>    
    
    <table class="tablelist">
    	<thead>
    	<tr>
        <th>留言主题<i class="sort"><img src="images/px.gif" /></i></th>
        <th>留言者</th>
        <th>留言时间</th>
        <th>操作</th>
		<th>删除</th>
        </tr>
        </thead>
        <tbody>
		 <?php 
       $i=1;
       $result=mysql_query($sql);   
       while($info1=mysql_fetch_array($result)) {   
     ?>
        <tr> 
          <td><?php echo unhtml($info1["title"]);?></td>
          <td>
		  <?php
		   $sql2=mysql_query("select name from tb_user where id='".$info1["userid"]."'",$conn);
		   $info2=mysql_fetch_array($sql2);
		   echo $info2["name"];
		  ?>
		  </td>
          <td><?php echo $info1["time"];?></td>
          <td><a href="editleaveword.php?id=<?php echo $info1["id"];?>">查看</a></td>
          <td><input type="checkbox" name=<?php echo $info1["id"];?> value=<?php echo $info1["id"];?>>
            </td>
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
