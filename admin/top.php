<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title></title>
<title></title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="js/jquery.js"></script>
<script type="text/javascript">
$(function(){	
	//顶部导航切换
	$(".nav li a").click(function(){
		$(".nav li a.selected").removeClass("selected")
		$(this).addClass("selected");
	})	
})	
</script>


</head>

<body style="background:url(images/topbg.gif) repeat-x;">

    <div class="topleft">
    <a href="main.php" target="_parent"><img src="images/logo.png" title="系统首页" /></a>
    </div>
        
    
            
    <div class="topright">    
    <ul>
    
    <li><a href="login.php?deal=loginout" target="_parent">退出</a></li>
    </ul>
     
      
    
    </div>
</body>
</html>
