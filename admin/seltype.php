<?php
require "conn.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>��Ʒ������</title>
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
    <span>λ�ã�</span>
    <ul class="placeul">
    <li><a href="center.php">��ҳ</a></li>
    <li><a href="seltype.php">��Ʒ������</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    

    <form name="form1" method="post" action="deletelb.php">
        <div class="tools">
    
    	<ul class="toolbar">

        <li><span><input type="image" src="images/t03.png" /></span>ɾ��</li>
        </ul>
        
        
        <ul class="toolbar1">

        </ul>
    
    </div>
    <table class="tablelist">
    	<thead>
    	<tr>
		<th><input name="" type="checkbox" value="" checked="checked"/></th>
        <th>���<i class="sort"><img src="images/px.gif" /></i></th>
        <th>����</th>
        
        </tr>
        </thead>
        <tbody>
		
		<?php
$sql=mysql_query("select * from tb_type order by id desc",$conn);
$info=mysql_fetch_array($sql);
 if($info==false)
  {
    echo "��վ������Ʒ���!";
   }
  else
  {
?><?php
		  do
		  {
		?>
        <tr>
		<td><input type="checkbox" value=<?php echo $info["id"];?> name="<?php echo $info["id"];?>" /></td>
        <td><?php echo $info["id"];?></td>
        <td><?php echo $info["typename"];?></td>
        
        </tr> 
        <?php
		 }
		 while($info=mysql_fetch_array($sql));
		 }
		?>
		
        
        </tbody>
    </table>
    
   
   
    
    
   
    </form>
    
    
    
    </div>
    
    <script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
	</script>

</body>
</html>
