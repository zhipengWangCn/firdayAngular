$('.pj input').on('input', function() {
	if($('.pj input').val() > 5) {
		alert('请输入0-5的数!');
		$(this).val('');
	} else if($('.pj input').val() > 0) {

		$('.rt .div2 .jdu2').width(0);
		val = 0;
		$('.pj input').each(function() {
			if($(this).val() != '') {
				val += parseFloat($(this).val());
			}
		});
		$('.jdua').val((val / 3).toFixed(1));
		var w = $('.jdu1').width() * $('.jdua').val() / 5;
		$('.rt .div2 .jdu2').width(w);
	}
});

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
		if(xNum <= 0) {
			xNum = 0;
		} else if(xNum >= $(".smallImgW").width() - $(".maskFd").width()) {
			xNum = $(".smallImgW").width() - $(".maskFd").width()
		}
		// 垂直方向
		if(yNum <= 0) {
			yNum = 0;
		} else if(yNum >= $(".smallImgW").height() - $(".maskFd").height()) {
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
	$(".maskFd").css("display", "none");
	$(".bigImgW").css("display", "none");
});
// 放大镜轮播部分
// 左边点击事件
var index = 0;
$(".fdLunL").click(function() {
		index--;
		if(index <= -4) {
			index = 0;
		}
		$(".scrollfd").css("left", index * 110 + "px");
	})
	// 右边点击事件
$(".fdLunR").click(function() {
		index++;
		if(index >= 1) {
			index = -3;
		}
		$(".scrollfd").css("left", index * 110 + "px");
	})
	// 点击轮播图片
$(".fdLunC li").click(function() {
	var liIndex = $(".fdLunC li").index($(this));
	$(".fdLunC li").removeClass("selefdLImg");
	$(this).addClass("selefdLImg");
	if(liIndex <= 3) {
		$(".fdLunC li").eq(4 + liIndex).addClass("selefdLImg");
	} else {
		$(".fdLunC li").eq(liIndex - 4).addClass("selefdLImg");
	}
	$(".smallImg img").attr("src", $(".fdLunC li img").eq(liIndex).attr("src"));
	$(".bigImgW img").attr("src", $(".fdLunC li img").eq(liIndex).attr("src"));
})

// 图片路径
needBigImg();
// 需放大的图片
function needBigImg() {
	var srcIndex = 0;
	$(".scrollfd li").each(function(i) {
		if($(this).hasClass("selefdLImg")) {
			$(this).find("img").attr("src", localStorage.getItem("firstImgSrc"));
			$(".smallImg img").attr("src", $(this).find("img").attr("src"));
			$(".bigImgW img").attr("src", $(this).find("img").attr("src"));
		} else if(i <= 3) {
			$(this).find("img").attr("src", localStorage.getItem("ImgSrc" + srcIndex));
			srcIndex++;
		} else {
			$(this).find("img").attr("src", localStorage.getItem("ImgSrc" + (srcIndex - 3)));
			srcIndex++;
		}
	})
}

// 点击图片跳转到详情页面
$(".a2 img").click(function() {
	localStorage.setItem("firstImgSrc", $(this).attr("src"));
	window.location.href = "#/fridayDetail"
})

$(".tx1").text(localStorage.getItem("storeName").substr(0, 2) + "旗舰店");