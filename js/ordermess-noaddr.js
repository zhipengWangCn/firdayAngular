

$(".dianW").each(function() {
	var eveMon = 0;
	$(this).find(".jineNum").each(function() {
		eveMon += parseFloat($(this).text().substr(1));
	})
	$(this).find(".aMNum").text("¥" + point(eveMon));
	$(this).find(".heji-num").text("¥" + point(eveMon + parseFloat($(this).find(".yunfeinum").text().substr(1))));
})
allMon();

// 数量加减
$(".fdR3-4-2").click(function() {
	var indexJian = $(".fdR3-4-2").index($(this));
	if ($(".fdR3-4-3").eq(indexJian).text() == 1) {
		$(".fdR3-4-3").eq(indexJian).text("1");
	} else {
		$(".fdR3-4-3").eq(indexJian).text(parseInt($(".fdR3-4-3").eq(indexJian).text()) - 1);
	}

	changeJifen(indexJian, parseInt($(".fdR3-4-3").eq(indexJian).text()));
	allyfJifen(".fdR3-4-2", indexJian);
	subThing(parseInt($(".fdR3-4-3").eq(indexJian).text()), indexJian);
	allMon();
})
$(".fdR3-4-4").click(function() {
	var indexJia = $(".fdR3-4-4").index($(this));
	$(".fdR3-4-3").eq(indexJia).text(parseInt($(".fdR3-4-3").eq(indexJia).text()) + 1);
	changeJifen(indexJia, parseInt($(".fdR3-4-3").eq(indexJia).text()));
	allyfJifen(".fdR3-4-4", indexJia);
	subThing(parseInt($(".fdR3-4-3").eq(indexJia).text()), indexJia);
	allMon();
})

// 加减颜色部分
function subThing(num, index) {
	if (num <= 1) {
		$(".fdR3-4-2").eq(index).removeClass().addClass("fdR3-4-2").addClass("fdR3-4-2NS");
		$(".fdR3-4-2").eq(index).css("cursor", "auto");
	} else {
		$(".fdR3-4-2").eq(index).removeClass().addClass("fdR3-4-2").addClass("fdR3-4-2S");
		$(".fdR3-4-2").eq(index).css("cursor", "pointer");
	}
}

$(".fdR3-4-2").each(function(i) {
	subThing($(".fdR3-4-3").eq(i).text(), i);
})

// 单个金额改变的函数
function changeJifen(index, num) {
	// 单价
	var danjia = parseFloat($(".danjiaNum").eq(index).text().substr(1));
	$(".jineNum").eq(index).text("¥" + point(danjia * num));
}

// 小数点的函数
function point(num) {
	var num = parseInt(num * 10) / 10;
	if (num % 1 == 0) {
		return num + ".0";
	} else{
		return num;
	}
}


// 每个店金额改变的函数
function allyfJifen(claname, index) {
	var dianw = $(claname).eq(index).parents(".dianW").find(".jineNum");
	var everyMoney = 0;
	dianw.each(function() {
		everyMoney += parseFloat($(this).text().substr(1));
	})
	$(claname).eq(index).parents(".dianW").find(".aMNum").text("¥" + point(everyMoney));
	$(claname).eq(index).parents(".dianW").find(".heji-num").text("¥" + point(everyMoney + parseFloat($(claname).eq(index).parents(".dianW").find(".yunfeinum").text().substr(1))));
}

// 实付金额
function allMon() {
	var allMoney = 0;
	$(".heji-num").each(function() {
		allMoney += parseFloat($(this).text().substr(1));
	})
	$(".shifu-num").text("¥" + point(allMoney));
}


// 开发票
$(".is-needkp div").click(function() {
	$(this).parent().find("div img").attr("src", "../img/jifendingdan/circle0.png");
	$(this).find("img").attr("src", "../img/jifendingdan/circle1.png");
	if ($(this).parent().find("div").index($(this)) == 0) {
		$(this).parents(".kaipiao-wrap").find(".fp-top").css("display", "none");
	} else {
		$(this).parents(".kaipiao-wrap").find(".fp-top").css("display", "block");
	}
})
