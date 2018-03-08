var arrlook = ["../img/selfCenter/6.png","../img/selfCenter/7.png","../img/selfCenter/8.png","../img/selfCenter/6.png","../img/selfCenter/7.png","../img/selfCenter/8.png"]

for (var i = 0; i < arrlook.length; i++) {
	$(".look .second").append('<div class="sec-one clearfix"><img src="../img/selfCenter/5.png" class="chahao clearfix" alt="" /><div class="sec-two"><img src="' +  arrlook[i] + '" class="bigpic" alt="" /></div><p class="one-p1">新西兰佳沛黄金奇异果</p><p class="one-p2">果肉绵密、花蜜般的甘甜百吃不厌</p><p class="one-p3"><span>￥28.80</span><span>¥40.00</span></p><img src="../img/selfCenter/9.png" class="gwc" alt="" /></div>');
}

$(".chahao").click(function() {
	var index = $(".chahao").index($(this));
//	alert(index);
	$(this).parent().remove();
	arrlook.splice(index,1);
});