var starNum = [2, 3, 4, 5, 3, 5, 4, 4, 3, 2, 5, 4];
for(var i = 0; i < $('.b').length; i++) {
	for(var j = 0; j < starNum[i]; j++) {
		$('.b').eq(i).children('img').eq(j).attr('src', '../img/city/star2.png');
		$('.b').eq(i).attr('id', starNum[i]);
//		$('.b').eq(i).attr('id', starNum[i]);
	}
}


$('.px span').eq(0).addClass('dj');
$('.px span').eq(0).children('img').show();

$('.px span').click(function() {

	if($(this).hasClass('dj')) {
		if($(this).children('img').hasClass('image')) {
			$(this).children('img').attr('src', '../img/city/s_jgpx.png');
			$(this).children('img').removeClass('image')
		} else {
			$(this).children('img').addClass('image');
			$(this).children('img').attr('src', '../img/city/s_jgpx2.png');
		}
	} else {
		$(this).addClass('dj');
		$(this).children('img').show();
		if($(this).children('img').hasClass('image')) {
			$(this).children('img').attr('src', '../img/city/s_jgpx.png');
		}
	}
	$(this).siblings().removeClass('dj');
	$(this).siblings().children('img').hide();
});
//按价格
var pc = document.querySelectorAll('.b span em');
var b = document.querySelectorAll('.b');
var arr = [];
var arrScore = [];

$('.price').click(function() {
	arr = [];
	if($(this).children('img').hasClass('image')) {
		function paixu() {
			for(var i = 0; i < $('.b span em').length; i++) {
				for(var j = 0; j < $('.b span em').length - 1 - i; j++) { //每次一次都会比出最大的值，放到最后，然后第二次数组长度减去1，再循环比一次  
					if(parseInt(pc[j].innerHTML) < parseInt(pc[j + 1].innerHTML)) {
						var t = pc[j + 1].innerHTML;
						pc[j + 1].innerHTML = pc[j].innerHTML;
						pc[j].innerHTML = t;
						var m = b[j + 1].innerHTML;
						b[j + 1].innerHTML = b[j].innerHTML;
						b[j].innerHTML = m;
						//star id 调换
						var s = $('.b').eq(j + 1).attr('id');
						$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
						$('.b').eq(j).attr('id', s);
						
					}
				}
				arr.unshift(pc[j].innerHTML);

			}

			for(var i = 0; i < $('.b span em').length; i++) {
				$('.b span em')[i].innerHTML = arr[i];
			}
		}
	} else {
		function paixu() {
			for(var i = 0; i < $('.b span em').length; i++) {
				for(var j = 0; j < $('.b span em').length - 1 - i; j++) {
					if(parseInt(pc[j].innerHTML) > parseInt(pc[j + 1].innerHTML)) {
						var t = pc[j + 1].innerHTML;
						pc[j + 1].innerHTML = pc[j].innerHTML;
						pc[j].innerHTML = t;
						var m = b[j + 1].innerHTML;
						b[j + 1].innerHTML = b[j].innerHTML;
						b[j].innerHTML = m;
						//star id 调换
						var s = $('.b').eq(j + 1).attr('id');
						$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
						$('.b').eq(j).attr('id', s);
					}
				}
				arr.unshift(pc[j].innerHTML);
				
			}
			
			for(var i = 0; i < $('.b span em').length; i++) {
				$('.b span em')[i].innerHTML = arr[i];
			}
		}

	}

	paixu();
});

//按评分

$('.score').click(function() {
	arrScore=[];
	if($(this).children('img').hasClass('image')) {
		function paixuScore() {
			for(var i = 0; i < $('.b').length; i++) {
				for(var j = 0; j < $('.b').length - 1 - i; j++) {
					if(parseInt($('.b').eq(j).attr('id')) < parseInt($('.b').eq(j + 1).attr('id'))) {
						var s = $('.b').eq(j + 1).attr('id');
						$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
						$('.b').eq(j).attr('id', s);
						var n = b[j + 1].innerHTML;
						b[j + 1].innerHTML = b[j].innerHTML;
						b[j].innerHTML = n;
					}
				}
				arrScore.unshift($('.b').eq(j).attr('id'));

			}

			for(var i = 0; i < $('.b').length; i++) {
				$('.b').eq(i).attr('id', arrScore[i]);
			}
		}

	} else {
		function paixuScore() {
			for(var i = 0; i < $('.b').length; i++) {
				for(var j = 0; j < $('.b').length - 1 - i; j++) {
					if(parseInt($('.b').eq(j).attr('id')) > parseInt($('.b').eq(j + 1).attr('id'))) {
						var s = $('.b').eq(j + 1).attr('id');
						$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
						$('.b').eq(j).attr('id', s);
						var n = b[j + 1].innerHTML;
						b[j + 1].innerHTML = b[j].innerHTML;
						b[j].innerHTML = n;
					}
				}
				arrScore.unshift($('.b').eq(j).attr('id'));

			}

			for(var i = 0; i < $('.b').length; i++) {
				$('.b').eq(i).attr('id', arrScore[i]);
			}
		}
	}
	paixuScore();
	
});