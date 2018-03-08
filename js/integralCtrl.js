app.controller('integralCtrl', function($scope, $interval, swiTch) {
	swiTch.lunbo($scope);
	var arrIg = ['../img/integral/1.png', '../img/integral/2.png', '../img/integral/3.png', '../img/integral/4.png', '../img/integral/1.png', '../img/integral/2.png', '../img/integral/3.png', '../img/integral/4.png', '../img/integral/1.png', '../img/integral/2.png', '../img/integral/3.png', '../img/integral/4.png'];
	for(var i = 0; i < arrIg.length; i++) {
		var div = $('<div class="a3 clearfix"> <img src="' + arrIg[i] + '" alt="" /> <p class="text1">新西兰佳沛黄金奇异果</p> <p class="text2">花蜜般的甘甜百吃不厌</p> <p class="text3">积分: <em>500</em><em>价值 : ¥ 20.0</em></p> <p class="text4">立即兑换</p> </div>');
		$('.integral-wp').append(div);
	}

	$(".a3 img").click(function() {
		localStorage.setItem("firstImgSrc", $(this).attr("src"));
		window.location.href = "#/jifenDetail";
		$(window).scrollTop(0);
	})

	$(".text4").click(function() {
		window.location.href = "#/jifendingdan";
	});
})