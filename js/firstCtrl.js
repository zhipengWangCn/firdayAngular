app.controller('firstCtrl', function($scope, $interval, swiTch) {
	swiTch.lunbo($scope);
	//有关倒计时的看这里
	//初始化
	show_time();
	// 设置定时器
	setInterval(show_time, 1000);

	function show_time() {
		var time_start = new Date().getTime(); //设定当前时间
		var time_end = new Date("2017/05/30 00:00:00").getTime(); //设定目标时间
		// 计算时间差
		var time_distance = time_end - time_start;
		// 天
		var int_day = Math.floor(time_distance / 86400000)
		time_distance -= int_day * 86400000;
		// 时
		var int_hour = Math.floor(time_distance / 3600000)
		time_distance -= int_hour * 3600000;
		// 分
		var int_minute = Math.floor(time_distance / 60000)
		time_distance -= int_minute * 60000;
		// 秒
		var int_second = Math.floor(time_distance / 1000)
			// 时分秒为单数时、前面加零
		if (int_day < 10) {
			int_day = "0" + int_day;
		}
		if (int_hour < 10) {
			int_hour = "0" + int_hour;
		}
		if (int_minute < 10) {
			int_minute = "0" + int_minute;
		}
		if (int_second < 10) {
			int_second = "0" + int_second;
		}
		// 显示时间
		$('.timeDate').text(int_day + "天");
		$('.timehour').text(int_hour);
		$('.timemiute').text(int_minute);
		$('.timesecond').text(int_second);
	}
	//
	$('.fresh .a2').mouseenter(function() {
		var index = $('.fresh .a2').index($(this));
		$(".spwrap span").eq(index).addClass("select1");
		$(".spwrap span").eq(index).siblings().removeClass("select1");
	});
	// 点击图片跳转到详情页面
	$(".a2 img").click(function() {
		var index = $(this).parent().parent().find("img").index($(this));
		var srcIndex = 0;
		$(this).parent().parent().find("img").each(function(i,e) {
			if (i == index) {
				localStorage.setItem("firstImgSrc", $(this).attr("src"));
				localStorage.setItem("firstFont", $(this).siblings(".p1").text());
				localStorage.setItem("firstDanjia", $(e).parent().find('p').eq(1).find('em').eq(0).text().split('¥ ')[1]);
			} else {
				localStorage.setItem("font" + srcIndex, $(this).siblings(".p1").text());
				localStorage.setItem("ImgSrc" + srcIndex, $(this).attr("src"));
				localStorage.setItem("Danjia" + srcIndex, $(this).siblings(".p3").text().substr(2, 5));
				srcIndex++;
			}
		})
		localStorage.setItem("storeName", $(this).parent().parent().attr("storeName"));
		window.location.href = "#/fridayDetail";
		$(window).scrollTop(0);
	});
	$('.duo').click(function() {
		window.location.href = "#/spfl";
	});
	$('.shop').click(function() {
		
		if (localStorage.getItem("phone")) {
			$('.tk').html('');
			$('.mb').show();
			$('.tk').show();
			var indexShop = $(".shop").index($(this));
			var danjia = $(".p3").eq(indexShop).text().substr(2, 5);
			var storeName = $(this).parent().parent().attr("storeName");
			var imgGwc = $(this).siblings("img").attr("src");
			var fontDetail = $(this).siblings(".p1").text();
			$('.tk').append('<p class="tk1">请选择产品规格<em>✘</em></p> <div class="bottom"> <p class="tk2">现价 : &nbsp￥ ' + danjia + '<em>原价 : &nbsp¥ 40.0</em></p> <div class="tk3 clearfix"> <span>请选择规格</span> <p class="p1">500g</p> <p>1000g</p> <p>1500g</p> <p>2000g</p> </div> <div class="tk4 clearfix"> <span class="tk41">数量 : &nbsp</span> <div class="tk42"><img src="../img/searchResult/jian1.png" alt="" /></div> <input type="text" class="tk43" value="1"/> <div class="tk44"><img src="../img/searchResult/jia.png" alt="" /></div> &nbsp&nbsp件 </div> <button class="tk5">添加到购物车</button>  </div>');
			$('.tk3 p').click(function() {
				$('.tk3 p').removeClass('p1');
				$(this).addClass('p1');
			});
			var n = 1;
			$('.tk44').click(function() {
				n++;
				$('.tk43').val(n);
				if (n > 1) {
					$('.tk42 img').attr('src', '../img/searchResult/jian1.png');

				}
			});
			$('.tk42').click(function() {
				n--;
				if (n <= 1) {
					n = 1;
					$('.tk42 img').attr('src', '../img/searchResult/jian.png');
				}
				$('.tk43').val(n);
			});
			// 点击添加到购物车
			$('.tk5').click(function() {
				$.ajax({
					type: "get",
					url: "../php/addgouwuche.php",
					data: {
						phone: localStorage.getItem("phone"),
						danjia: danjia,
						store: storeName,
						img: imgGwc,
						guige: $('.tk3 .p1').text(),
						num: $(".tk43").val(),
						font: fontDetail,
					},
					dataType: "json",
					success: function(data) {
						if (data.result) {
							$('.mb').hide();
							$('.tk').hide();
							$('.mi-d5').show();
							if ($('.mi-d5 span').text() == 0 || $('.mi-d5 span').text() == "") {
								$('.mi-d5 span').text(1);
							} else{
								$('.mi-d5 span').text(parseInt($('.mi-d5 span').text())+1);
							}
						}
					}
				});
			});
			$('.tk1 em').click(function() {
				//
				$('.mb').hide();
				$('.tk').hide();
			});
		} else {
			alert("请先登录");
		}
	});
	
});