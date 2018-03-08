
// 放大部分
// 放大移动蒙版部分
$(".smallImgW").mouseenter(function() {
	$(".daojishi").css("display", "none");
	$(".maskFd").css("display", "block");
	$(".bigImgW").css("display", "block");
	$(".smallImgW").mousemove(function(e) {
		var even = e || window.event;
		var xNum = even.clientX - $(".smallImgW").offset().left - $(".maskFd").width() / 2;
		var yNum = even.pageY - $(".smallImgW").offset().top - $(".maskFd").height() / 2;
		// 判断碰撞问题
		// 水平方向
		if (xNum <= 0) {
			xNum = 0;
		} else if (xNum >= $(".smallImgW").width() - $(".maskFd").width()) {
			xNum = $(".smallImgW").width() - $(".maskFd").width()
		}
		// 垂直方向
		if (yNum <= 0) {
			yNum = 0;
		} else if (yNum >= $(".smallImgW").height() - $(".maskFd").height()) {
			yNum = $(".smallImgW").height() - $(".maskFd").height()
		}
		$(".maskFd").css({
				top: yNum + "px",
				left: xNum + "px",
			})
			// 大图移动
		var scaleX = $(".bigImgW img").width() / $(".smallImg img").width();
		var scaleY = $(".bigImgW img").height() / $(".smallImg img").height();
		$(".bigImgW").css({
			width: scaleX * $(".maskFd").width() + "px",
			height: scaleY * $(".maskFd").height() + "px",
		})

		$(".bigImgW img").css({
			left: -scaleX * xNum + "px",
			top: -scaleY * yNum + "px",
		})
	})
})
$(".smallImgW").mouseleave(function() {
	$(".daojishi").css("display", "block");
	$(".maskFd").css("display", "none");
	$(".bigImgW").css("display", "none");
});
// 放大镜轮播部分
// 左边点击事件
var index = 0;
$(".fdLunL").click(function() {
		index--;
		if (index <= -4) {
			index = 0;
		}
		$(".scrollfd").css("left", index * 110 + "px");
	})
	// 右边点击事件
$(".fdLunR").click(function() {
		index++;

		if (index >= 1) {
			index = -3;
		}

		$(".scrollfd").css("left", index * 110 + "px");
	})
	// 点击轮播图片
$(".fdLunC li").click(function() {
	var liIndex = $(".fdLunC li").index($(this));
	$(".fdLunC li").removeClass("selefdLImg");
	$(this).addClass("selefdLImg");
	if (liIndex <= 3) {
		$(".fdLunC li").eq(4 + liIndex).addClass("selefdLImg");
	} else {
		$(".fdLunC li").eq(liIndex - 4).addClass("selefdLImg");
	}

	$(".smallImg img").attr("src", $(".fdLunC li img").eq(liIndex).attr("src"));
	$(".bigImgW img").attr("src", $(".fdLunC li img").eq(liIndex).attr("src"));
	$(".fdR1").text($(this).find("img").attr("font"));
	$(".jifenNum").text("现价: " + $(this).find("img").attr("danjia"));
})

// 右侧的 选择规格部分
$(".numG").click(function() {
		$(".numG").removeClass("selStan");
		$(this).addClass("selStan");
	})
	// 右侧的 数量的加减

$(".fdR3-4-2").click(function() {
	if ($(".fdR3-4-3").text() == 1) {
		$(".fdR3-4-3").text("1");
	} else {
		$(".fdR3-4-3").text(parseInt($(".fdR3-4-3").text()) - 1);
	}
	subThing(parseInt($(".fdR3-4-3").text()));
})
$(".fdR3-4-4").click(function() {
	$(".fdR3-4-3").text(parseInt($(".fdR3-4-3").text()) + 1);
	subThing(parseInt($(".fdR3-4-3").text()));
})

function subThing(num) {
	if (num <= 1) {
		$(".fdR3-4-2").removeClass().addClass("fdR3-4-2").addClass("fdR3-4-2NS");
	} else {
		$(".fdR3-4-2").removeClass().addClass("fdR3-4-2").addClass("fdR3-4-2S");
	}
}

// 收藏图片
$(".fdR4-1-1").click(function() {
	if ($(this).hasClass("fdR4-1-1S")) {
		$(this).removeClass("fdR4-1-1S").addClass("fdR4-1-1NS");
	} else {
		$(this).removeClass("fdR4-1-1NS").addClass("fdR4-1-1S");
	}
})

// 商品详情和商品评价
$(".gH").click(function() {
	var indexGH = $(".gH").index($(this));
	if ($(this).hasClass("nSelGH")) {
		$(this).removeClass("nSelGH").addClass("selGH");
		$(".gH").eq(1 - indexGH).removeClass("selGH").addClass("nSelGH");
		if (indexGH == 0) {
			$(".gdDWW").show();
			$(".gdEWW").hide();
		} else {
			$(".gdDWW").hide();
			$(".gdEWW").show();
		}
	}
})

//// 倒计时部分
//var now = new Date();
//
//function createtime(timeDate, times) {
//	var grt = new Date("6/10/2017 00:00:00");
//	now.setTime(now.getTime() + 250);
//	days = (grt - now) / 1000 / 60 / 60 / 24;
//	dnum = Math.floor(days);
//	hours = (grt - now) / 1000 / 60 / 60 - (24 * dnum);
//	hnum = Math.floor(hours);
//	if (String(hnum).length == 1) {
//		hnum = "0" + hnum;
//	}
//	minutes = (grt - now) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
//	mnum = Math.floor(minutes);
//	if (String(mnum).length == 1) {
//		mnum = "0" + mnum;
//	}
//	seconds = (grt - now) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
//	snum = Math.round(seconds);
//	if (String(snum).length == 1) {
//		snum = "0" + snum;
//	}
//	$(".djsday").text(dnum + "天");
//	$(".djshour").text(hnum);
//	$(".djsmin").text(mnum);
//	$(".djssec").text(snum);
//}
//执行示例1
setInterval("createtime('timeDate','times')", 250);

// 购物车部分
$(".fdR3-4-7").click(function() {
	
	if (localStorage.getItem("phone")) {
		
		console.log(localStorage.getItem("phone"),$("#xxx").text(),localStorage.getItem("storeName"),$(".smallImg img").attr("src"),$('.selStan').text(),$(".fdR3-4-3").text(),$(".fdR1").text());
		
		
		$.ajax({
			type: "get",
			url: "../php/addgouwuche.php",
			data: {
				phone: localStorage.getItem("phone"),
				danjia: $(".jifenNum").text().substr(4),
				store: localStorage.getItem("storeName"),
				img: $(".smallImg img").attr("src"),
				guige: $('.selStan').text(),
				num: $(".fdR3-4-3").text(),
				font: $(".fdR1").text(),
			},
			dataType: "json",
			success: function(data) {
				if (data.result) {
					$(".smallImgW img").eq(1).animate({
						width: 0,
						height: 0,
						left: 1190 + "px",
						top: -220 + "px"
					}, 1000, function() {
						$(this).css({
							width: 100 + "%",
							height: 100 + "%",
							left: 0,
							top: 0,
						})
						$(".mask-gwc").css("display", "block");
						$(".gwc-alert").css("display", "block");
						$('.mi-d5').show();
						if ($('.mi-d5 span').text() == 0 || $('.mi-d5 span').text() == "") {
							$('.mi-d5 span').text(1);
						} else{
							$('.mi-d5 span').text(parseInt($('.mi-d5 span').text())+1);
						}					
					})
				}
			}
		});
	} else {
		alert("请先登录");
	}
})
$(".gwc-alert").mouseenter(function() {
	$(".loginX").css("display", "block");
})
$(".gwc-alert").mouseleave(function() {
	$(".loginX").css("display", "none");	
})
$(".loginX").click(function() {
	$(".mask-gwc").css("display", "none");
	$(".gwc-alert").css("display", "none");
})
// 继续购物
$(".conti-buy").click(function() {
	window.location.href = "#/";
})
// 查看购物车
$(".see-gwc").click(function() {
	window.location.href = "#/gouwuche";
})

// 立即购买部分
$(".fdR3-4-6").click(function() {
	if (localStorage.getItem("phone")) {
		window.location.href = "#/orderMessHas";
	} else{
		alert("请先登录");
	}
})
	// 图片路径
needBigImg();
// 需放大的图片
function needBigImg() {
	var srcIndex = 0;
	$(".scrollfd li").each(function(i) {
		if ($(this).hasClass("selefdLImg")) {
			$(this).find("img").attr("src", localStorage.getItem("firstImgSrc"));
			$(".smallImg img").attr("src", $(this).find("img").attr("src"));
			$(".bigImgW img").attr("src", $(this).find("img").attr("src"));
			$(this).find("img").attr("font", localStorage.getItem("firstFont"));
			$(this).find("img").attr("danjia", localStorage.getItem("firstDanjia"));
			$(".fdR1").text(localStorage.getItem("firstFont"));
			$(".jifenNum").text("现价: " + localStorage.getItem("firstDanjia"));
		} else if (i <= 3) {
			$(this).find("img").attr("src", localStorage.getItem("ImgSrc" + srcIndex));
			$(this).find("img").attr("font", localStorage.getItem("font" + srcIndex));
			$(this).find("img").attr("danjia", localStorage.getItem("Danjia" + srcIndex));
			srcIndex++;
		} else {
			$(this).find("img").attr("src", localStorage.getItem("ImgSrc" + (srcIndex - 3)));
			$(this).find("img").attr("font", localStorage.getItem("font" + (srcIndex - 3)));
			$(this).find("img").attr("danjia", localStorage.getItem("Danjia" + (srcIndex - 3)));
			srcIndex++;
		}
	})
}

// 点击商家
$(".shangjia").click(function() {
	window.location.href = "#/sjia";
})