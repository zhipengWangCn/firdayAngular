<?php
if(isset($_GET["deal"]))
{
session_start();
session_destroy();
}
?>
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title>礼拜五后台管理系统</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="js/jquery.js"></script>
<script src="js/cloud.js" type="text/javascript"></script>

<script language="javascript">
	$(function(){
    $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
	$(window).resize(function(){  
    $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
    })  
});  
</script> 

</head>

<body style="background-color:#df7611; background-image:url(images/light.png); background-repeat:no-repeat; background-position:center top; overflow:hidden;">



    <div id="mainBody">
      <div id="cloud1" class="cloud"></div>
      <div id="cloud2" class="cloud"></div>
    </div>  


<div class="logintop">    
  
    </div>
   <script language="javascript">
	  function chkinput(form){
	    if(form.name.value==""){
		  alert("请填写用户名!");
		  form.name.select();
		  return(false);
		}
		if(form.pwd.value==""){
		  alert("请填写密码!");
		  form.pwd.select();
		  return(false);
		}
		return(true);
	  }
	</script> 
    <div class="loginbody">
    
    <span class="systemlogo"></span> 
       
    <div class="loginbox">
    <form name="form1" method="post" action="chkadmin.php" onSubmit="return chkinput(this)">
    <ul>
    <li><input name="name" type="text" class="loginuser" value="" /></li>
    <li><input name="pwd" type="password" class="loginpwd" value=""/></li>
    <li style="text-align:center;"><input name="submit" type="submit" class="loginbtn" value="登录" /></li>
    </ul>
    </form>
    
    </div>
    
    </div>
    
    
    
    <div class="loginbm">版权所有 2017 礼拜五商城的设计与实现</div>
	
</body>
</html>
