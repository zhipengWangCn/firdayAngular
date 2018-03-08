// 放大部分
// 放大移动蒙版部分
$(".smallImgW").mouseenter(function() {
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
		});
			// 大图移动
		var scaleX = $(".bigImgW img").width() / $(".smallImg img").width();
		var scaleY = $(".bigImgW img").height() / $(".smallImg img").height();
		$(".bigImgW").css({
			width: scaleX * $(".maskFd").width() + "px",
			height: scaleY * $(".maskFd").height() + "px",
		});

		$(".bigImgW img").css({
			left: -scaleX * xNum + "px",
			top: -scaleY * yNum + "px",
		});
	});
});
$(".smallImgW").mouseleave(function() {
	$(".maskFd").css("display", "none");
	$(".bigImgW").css("display", "none");
});
// 放大镜轮播部分
// 左边点击事件
var index = 0;
$(".fdLunL").click(function() {
		index--;
		console.log(index);
		if (index <= -3) {
			index = 0;
		}
		$(".scrollfd").css("left", index * 110 + "px");
});
	// 右边点击事件
$(".fdLunR").click(function() {
		index++;
		console.log(index);
		if (index >= 0) {
			index = -3;
		}
		$(".scrollfd").css("left", index * 110 + "px");
});
	// 点击轮播图片
$(".fdLunC li").click(function() {
	var liIndex = $(".fdLunC li").index($(this));
	$(".fdLunC li").removeClass("selefdLImg");
	$(this).addClass("selefdLImg");

	$(".smallImg img").attr("src", $(".fdLunC li img").eq(liIndex).attr("src"));
	$(".bigImgW img").attr("src", $(".fdLunC li img").eq(liIndex).attr("src"));
});

// 右侧的 选择规格部分
$(".numG").click(function() {
		$(".numG").removeClass("selStan");
		$(this).addClass("selStan");
});
	// 右侧的 数量的加减

$(".fdR3-4-2").click(function() {
	if ($(".fdR3-4-3").text() == 1) {
		$(".fdR3-4-3").text("1");
	} else {
		$(".fdR3-4-3").text(parseInt($(".fdR3-4-3").text()) - 1);
	}
	subThing(parseInt($(".fdR3-4-3").text()));
});

$(".fdR3-4-4").click(function() {
	$(".fdR3-4-3").text(parseInt($(".fdR3-4-3").text()) + 1);
	subThing(parseInt($(".fdR3-4-3").text()));
});

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
});

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
});

// 图片路径
$(".scrollfd img").attr("src", localStorage.getItem("firstImgSrc"));
needBigImg();
// 需放大的图片
function needBigImg() {
	$(".scrollfd li").each(function() {
		if ($(this).hasClass("selefdLImg")) {
			$(".smallImg img").attr("src", $(this).find("img").attr("src"));
			$(".bigImgW img").attr("src", $(this).find("img").attr("src"));
		}
	});
}

// 点击立即兑换
$(".fdR3-4-6").click(function() {
	if(localStorage.getItem("phone")){
		window.location.href = "#/jifendingdan";
	}else{
		alert("请先登录!")
	}
	
});
