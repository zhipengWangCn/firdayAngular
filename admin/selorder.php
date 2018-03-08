<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title>订单查询</title>
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
    <li><a href="#">查询订单</a></li>
   
    </ul>
    </div>
    
    <div class="rightinfo">
   <form name="form1" method="post" action="deletedd.php">  
    <div class="tools">
		<input class="tools-submit" type="submit" value="删除" />

        <ul class="toolbar">

        <li><span><input type="image" src="images/t03.png" /></span>删除</li>
        </ul>
        
   
    
    </div>
<?php
require "conn.php";
$Page_size=15; 
$sql="select * from `order`";
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
   $sql="select * from `order` order by id desc limit $offset,$Page_size";
?>    
    
    <table class="tablelist">
    	<thead>
    	<tr>
        <th><input name="" type="checkbox" value="" checked="checked"/></th>
        <th>订单号<i class="sort"><img src="images/px.gif" /></i></th>
        <th>商品名</th>
        <th>商品数量</th>

		<th>店名</th>
        <th>下单时间</th>
		<th>订单状态</th>

        <th>金额总计</th>
		<!-- <th>操作</th> -->
        </tr>
        </thead>
        <tbody>
		<?php
		$result=mysqli_query($con,$sql);
		    while($info1=mysqli_fetch_array($result,MYSQLI_ASSOC)){
	  ?>
        <tr>
        <td><input type="checkbox" name="<?php echo $info1["id"];?>" value=<?php echo $info1["id"];?>></td>
        <td><?php echo $info1["id"];?></td>
        <td><?php echo $info1["name"];?></td>
        <td><?php echo $info1["count"];?></td>
		
		<td><?php echo $info1["dian"];?></td>
        <td><?php echo $info1["date"];?></td>
        <td><?php echo $info1["state"];?></td>

        <td><?php echo $info1["price"];?></td>
       <!--  <td><input name="button" type="button" class="buttoncss" id="button" onClick="javascript:window.open('showdd.php?id=<?php echo $info1["id"];?>','newframe','width=600,height=600,left=100,top=100,menubar=no,toolbar=no,location=no,scrollbars=no')" value="查看">
		<input name="button2" type="button" class="buttoncss" id="button2" onClick="javascript:window.location='orderdd.php?id=<?php echo $info1["id"];?>';" value="执行">       
            
		</td> -->
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
