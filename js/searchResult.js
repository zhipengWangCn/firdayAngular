$('.px .pc').eq(1).addClass('dj');
$(function(){
	$('.px .pc').eq(1).children('img').show();
});

$('.px .pc').click(function() {

	if($(this).hasClass('dj')) {
		if($(this).children('img').attr('src')=='../img/city/s_jgpx.png') {
			$(this).children('img').attr('src', '../img/city/s_jgpx2.png');
		} else {
			$(this).children('img').attr('src', '../img/city/s_jgpx.png');
		}
	} else {
		$(this).addClass('dj');
		$(this).children('img').show();
		$(this).children('img').attr('src', '../img/city/s_jgpx.png');
		$(this).siblings().removeClass('dj');
		$(this).siblings().children('img').hide();
	}
	
});
$('.send').mouseenter(function() {
	$('.send').removeClass('send1');
	$(this).addClass('send1');
});
$('.shop').click(function() {
	$('.tk').html('');
	$('.mb').show();
	$('.tk').show();
	$('.tk').append('<p class="tk1">请选择产品规格<em>✘</em></p> <div class="bottom"> <p class="tk2">现价 : &nbsp￥ 20.0<em>原价 : &nbsp¥ 40.0</em></p> <div class="tk3 clearfix"> <span>请选择规格</span> <p class="p1">500g</p> <p>1000g</p> <p>1500g</p> <p>2000g</p> </div> <div class="tk4 clearfix"> <span class="tk41">数量 : &nbsp</span> <div class="tk42"><img src="../img/searchResult/jian1.png" alt="" /></div> <input type="text" class="tk43" value="1"/> <div class="tk44"><img src="../img/searchResult/jia.png" alt="" /></div> &nbsp&nbsp件 </div> <button class="tk5">添加到购物车</button>  </div>');
	$('.tk3 p').click(function() {
		$('.tk3 p').removeClass('p1');
		$(this).addClass('p1');
	});
	var n = 1;
	$('.tk44').click(function() {
		n++;
		$('.tk43').val(n);
		if (n>1) {
		  $('.tk42 img').attr('src','../img/searchResult/jian1.png');
		}
	});
	$('.tk42').click(function() {
		n--;
		if(n <= 1) {
			n = 1;
			$('.tk42 img').attr('src','../img/searchResult/jian.png');
		}
		$('.tk43').val(n);
	});
	$('.tk1 em').click(function() {
		$('.mb').hide();
		$('.tk').hide();
	});
	//添加购物车
	$('.tk5').click(function(){
		//
		$('.mb').hide();
		$('.tk').hide();
		
	
	});
});