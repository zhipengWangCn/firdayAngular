var arrCollect = ["../img/selfCenter/6.png","../img/selfCenter/10.png","../img/selfCenter/11.png","../img/selfCenter/6.png","../img/selfCenter/10.png","../img/selfCenter/11.png"];

for (var i=0; i < arrCollect.length; i++) {
		$(".collect .second").append('<div class="sec-one clearfix"><div class="sec-two"><img src="' + arrCollect[i] + '" class="bigpic" alt="" /></div><p class="one-p1">新西兰佳沛黄金奇异果</p><p class="one-p2">果肉绵密、花蜜般的甘甜百吃不厌</p><p class="one-p3"><span>￥28.80</span><span>¥40.00</span></p><img src="../img/selfCenter/9.png" class="gwc" alt="" /><button class="quxiao">取消收藏</button></div>');
	}


$(".quxiao").click(function(){
	$(this).parent(".sec-one").remove();
});