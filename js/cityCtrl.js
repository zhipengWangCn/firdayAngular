app.controller('cityCtrl', function($scope, $interval, swiTch) {
	swiTch.lunbo($scope);
	var starNum = [2, 3, 4, 5, 3, 5, 4, 4, 3, 2, 5, 4];
	for(var i = 0; i < $('.b').length; i++) {
		for(var j = 0; j < starNum[i]; j++) {
			$('.b').eq(i).children('img').eq(j).attr('src', '../img/city/star2.png');
			$('.b').eq(i).attr('id', starNum[i]);
		}
	}

	$('.px span').eq(0).addClass('dj');
	$(function(){
		$('.px span').eq(0).children('img').show();
	});
	$('.px span').click(function() {

		if($(this).hasClass('dj')) {
			if($(this).children('img').attr('src') == '../img/city/s_jgpx.png') {
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
	//按价格
	
	var b = $('.b');
	var arr = [];
	var arrScore = [];
	
	$('.price').click(function() {
		arr = [];
		var pc = $('.b').find('span').find('em');
		if($(this).children('img').attr('src') == '../img/city/s_jgpx2.png') { //降序
			for(var i = 0; i < pc.length; i++) {
				for(var j = 0; j < pc.length - 1 - i; j++) {
					if(parseInt(pc.eq(j).text()) < parseInt(pc.eq(j+1).text())) {
						var t = pc.eq(j+1).text();
						pc.eq(j+1).text(pc.eq(j).text());
						pc.eq(j).text(t);
						
						var m = $('.b').eq(j+1).html();
						$('.b').eq(j+1).html($('.b').eq(j).html());
						$('.b').eq(j).html(m);
						
						//star id 调换
						var s = $('.b').eq(j + 1).attr('id');
						$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
						$('.b').eq(j).attr('id', s);						 
					}
				}
				
				arr.unshift(pc.eq(j).text());
			}

			for(var i = 0; i < pc.length; i++) {
				$('.b').find('span').find('em').eq(i).text(arr[i]);

			}
		} else {
			
			for(var i = 0; i < pc.length; i++) {
				for(var j = 0; j < pc.length - 1 - i; j++) {
					if(parseInt(pc.eq(j).text()) > parseInt(pc.eq(j+1).text())) {
						var t = pc.eq(j+1).text();
						pc.eq(j+1).text(pc.eq(j).text());
						pc.eq(j).text(t);
						
						var m = b.eq(j+1).html();
						b.eq(j+1).html(b.eq(j).html());
						b.eq(j).html(m);
						
						//star id 调换
						var s = $('.b').eq(j + 1).attr('id');
						$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
						$('.b').eq(j).attr('id', s);
					}
				}
				
				arr.unshift(pc.eq(j).text());
			}
			for(var i = 0; i < pc.length; i++) {
				
				$('.b').find('span').find('em').eq(i).text(arr[i]);
			}
		}
		
	});

	//按评分
	$('.score').click(function() {
		
		if($(this).children('img').attr('src') == '../img/city/s_jgpx2.png') {

				for(var i = 0; i < $('.b').length; i++) {
					for(var j = 0; j < $('.b').length - 1 - i; j++) {
						if(parseInt($('.b').eq(j).attr('id')) < parseInt($('.b').eq(j + 1).attr('id'))) {
							var s = $('.b').eq(j + 1).attr('id');
							$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
							$('.b').eq(j).attr('id', s);
							
							var n = $('.b').eq(j + 1).html();
							$('.b').eq(j + 1).html($('.b').eq(j).html());
							$('.b').eq(j).html(n);
						}
					}
				}
		} else {
				for(var i = 0; i < $('.b').length; i++) {
					for(var j = 0; j < $('.b').length - 1 - i; j++) {
						if(parseInt($('.b').eq(j).attr('id')) > parseInt($('.b').eq(j + 1).attr('id'))) {
							var s = $('.b').eq(j + 1).attr('id');
							$('.b').eq(j + 1).attr('id', $('.b').eq(j).attr('id'));
							$('.b').eq(j).attr('id', s);
							var n = $('.b').eq(j + 1).html();
							$('.b').eq(j + 1).html($('.b').eq(j).html());
							$('.b').eq(j).html(n);
						}
					}
				}
		}
	});
});