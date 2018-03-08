app.service('swiTch', function($interval) {
	this.lunbo = function(scope) {

		var imgArr = ['../img/lb/lb.png', '../img/lb/lb1.png', '../img/lb/lb.png', '../img/lb/lb1.png', '../img/lb/lb.png'];

		var div = $('<div class="content"></div>');
		var div1 = $('<div class="turn-btn"></div>')
		var W = parseInt($(window).width());
		var H = parseInt($('.lb').height());

		for(var i = 0; i < imgArr.length; i++) {
			var img = $('<img src="' + imgArr[i] + '" alt="" />');
			var sp = $('<span ></span>')
			div.css({
				width: W * imgArr.length,
				height: H,
				position: 'absolute',
				left: 0,

			});
			img.css({
				width: W,
				height: 500,
				float: 'left',
			});
			div.append(img);
			div1.append(sp);
		}
		$('.lb').append(div);
		$('.lb').append(div1);
		$('.turn-btn span').eq(0).addClass('select1');
		$(window).resize(function() {
			$('.content').css("width", parseInt($(window).width()) * $('.content').find("img").length + "px");
			$('.content').find("img").css("width", parseInt($(window).width()) + "px");
		})
		
		var div3 = $('<div class="lr"></div>');
		var imgL = $('<img src="../img/lb/1.png" alt="" class="left an"/>');
		var imgR = $('<img src="../img/lb/2.png" alt="" class="right an"/>');
		div3.append(imgL);
		div3.append(imgR);
		$('.lb').append(div3);
		$('.an').mouseenter(function() {
			var index = $('.an').index($(this));
			$(this).attr('src', '../img/lb/' + '0' + parseInt(index + 1) + '.png');
		});
		$('.an').mouseleave(function() {
			var index = $('.an').index($(this));
			$(this).attr('src', '../img/lb/' + parseInt(index + 1) + '.png');
		});
		//自动轮播部分	
		var index = 0;
		var timer;

		function interval() {
			timer = $interval(function() {
				index++;

				if(index > imgArr.length - 1) {
					index = 0;
				}
				$(".lb").find(".content").animate({
					"left": -index * $(".lb").find(".content img").eq(0).width()
				});

				$(".turn-btn span").eq(index).addClass("select1");
				$(".turn-btn span").eq(index).siblings().removeClass("select1");

			}, 2000);
		}
		interval();
		scope.$on('$destroy', function() {
			$interval.cancel(timer);
		});
		//右边按钮点击事件
		$(".right").on("click", function() {
			$interval.cancel(timer);

			index++;
			if(index == 5) {
				index = 0;
			}
			$('.content').animate({
				"left": -index * $(".lb").find(".content img").eq(0).width()
			}, 500);
			$(".turn-btn span").eq(index).addClass("select1");
			$(".turn-btn span").eq(index).siblings().removeClass("select1");
			interval();
		});

		
		//左边按钮点击事件
		$(".left").on("click", function() {
			$interval.cancel(timer);
			if(index == 0) {
				index = 5;
			}
			$('.content').animate({
				"left": -(index - 1) * $(".lb").find(".content img").eq(0).width()
			}, 500);
			$(".turn-btn span").eq(index - 1).addClass("select1");
			$(".turn-btn span").eq(index - 1).siblings().removeClass("select1");
			index--;
			interval();
		});
		//圆点点击事件
		$('.turn-btn span').click(function() {
			$interval.cancel(timer);
			index = $('.turn-btn span').index($(this));

			$('.content').animate({
				"left": -index * $(".lb").find(".content img").eq(0).width()
			}, 500);
			$(this).addClass("select1");
			$(this).siblings().removeClass("select1");
			interval();
		});

	};

});