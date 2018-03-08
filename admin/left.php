<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
<title></title>
<title>左边导航标题</title>

<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="js/jquery.js"></script>

<script type="text/javascript">
$(function(){	
	//导航切换
	$(".menuson .header").click(function(){
		var $parent = $(this).parent();
		$(".menuson>li.active").not($parent).removeClass("active open").find('.sub-menus').hide();
		
		$parent.addClass("active");
		if(!!$(this).next('.sub-menus').size()){
			if($parent.hasClass("open")){
				$parent.removeClass("open").find('.sub-menus').hide();
			}else{
				$parent.addClass("open").find('.sub-menus').show();	
			}
			
			
		}
	});
	
	// 三级菜单点击
	$('.sub-menus li').click(function(e) {
        $(".sub-menus li.active").removeClass("active")
		$(this).addClass("active");
    });
	
	$('.title').click(function(){
		var $ul = $(this).next('ul');
		$('dd').find('.menuson').slideUp();
		if($ul.is(':visible')){
			$(this).next('.menuson').slideUp();
		}else{
			$(this).next('.menuson').slideDown();
		}
	});
})	
</script>


</head>

<body style="background:#fff3e1;">
	<div class="lefttop"><span></span>管理中心</div>
    
    <dl class="leftmenu">
        
    <dd>
    <div class="title">
    <span><img src="images/leftico01.png" /></span>商品管理
    </div>
    	<ul class="menuson">
        
        <li class="active"><cite></cite><a href="insertgoods.php" target="rightFrame">添加商品</a><i></i></li>
        </ul>    
    </dd>
        
    
    <dd>
    <div class="title">
    <span><img src="images/leftico02.png" /></span>会员管理
    </div>
    <ul class="menuson">
        <li><cite></cite><a href="seluser.php" target="rightFrame">会员信息管理</a><i></i></li>
        </ul>     
    </dd> 
    
    
    <dd><div class="title"><span><img src="images/leftico03.png" /></span>订单管理</div>
    <ul class="menuson">
        <li><cite></cite><a href="selorder.php" target="rightFrame">订单管理</a><i></i></li>
    </ul>    
    </dd>  
    <!--
    
    <dd><div class="title"><span><img src="images/leftico04.png" /></span>评论管理</div>
    <ul class="menuson">
        <li><cite></cite><a href="reply.php" target="rightFrame">评论管理</a><i></i></li>
    </ul>
    
    </dd>   -->
    
    </dl>
</body>
</html>
