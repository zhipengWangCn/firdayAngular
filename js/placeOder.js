$('.address span').text(localStorage.getItem("text1"));
$('.money span em').text(localStorage.getItem("text2"));
$('.picture').click(function(){
	$('.picture').removeClass('xz');
	$(this).addClass('xz');
	$('.picture').attr('src','../img/placeOder/check1.png');
	$(this).attr('src','../img/placeOder/check2.png');
	if ($('.picture').eq(0).hasClass('xz')) {
		$('.pkind2').hide();
		$('.pkind').show();
	}
	if ($('.picture').eq(1).hasClass('xz')) {
		$('.pkind').hide();
		$('.pkind2').show();
	}
});
$('.lj').click(function(){
	$('.mb').show();
	$('.tk').show();
	$('.tk button').eq(0).click(function(){
		$('.mb').hide();
		$('.tk').hide();
		//跳转
		window.location.href = 'selfCenter.html#/iorder';
	});
	$('.tk button').eq(1).click(function(){
		$('.mb').hide();
		$('.tk').hide();
		//跳转
		window.location.href = '#/Recharge';
	});
});
