function firAjax() {
	$.ajax({
		type: "get",
		url: "../php/showgouwuche.php",
		data: {
			phone: localStorage.getItem("phone"),
		},
		dataType: "json",
		success: function(data) {
			var storeArr = [];
			for (var i = 0; i < data.length; i++) {
				if (storeArr.indexOf(data[i].store) == -1) {
					storeArr.push(data[i].store);
				}
			}

			for (var i = 0; i < storeArr.length; i++) {
				$(".quanXuanW").before('<div class="dianW dianW' + i + '"></div>');
				$(".dianW" + i).append('<div class="dianH clearfix dian' + storeArr[i] + '"><span class="xuankaung nhasSel"></span><span class="dianName">' + storeArr[i] + '</span><span class="guige">规格</span><span class="danjia">单价</span><span class="shuliang">数量</span><span class="jine">金额</span><span class="caozuo">操作</span></div>');

				$(".dianW" + i).append('<ul class="secDianW DianUl ul' + storeArr[i] + '"></ul>');
				$(".dianW" + i).append('<div class="AllMoney clearfix all' + storeArr[i] + '"><p class="aMNum">¥0.0</p><p class="aMF">商品总金额</p></div>');
			}
			for (var j = 0; j < data.length; j++) {
				$(".ul" + data[j].store).append('<li class="firDLi" paixu="' + data[j].id + '"><span class="xuankaung nhasSel"></span><div class="gwcDet"><img src="' + data[j].img + '" alt="" /><p class="yn8">' + data[j].font + '</p></div><p class="guiggeNum">' + data[j].guige + '</p><p class="danjiaNum">¥' + data[j].danjia + '</p><div class="jiajianW"><p class="fdR3-4-2 fdR3-4-2NS"><span></span></p><p class="fdR3-4-3">' + data[j].num + '</p><p class="fdR3-4-4"><span></span></p></div><p class="jineNum">¥' + data[j].num * data[j].danjia + '</p><p class="delete">删除</p></li>');
			}
			clickThing();
			$(".jineNum").each(function(i) {
				changeJine(i, $(this).siblings(".danjiaNum").text().substr(1), $(".fdR3-4-3").eq(i).text());
			})
			localStorage.setItem("dhk", $(".firDLi").length);
		}
	});

}


firAjax();

function clickThing() {
	// 加减
	$(".fdR3-4-2").click(function() {
		var indexJian = $(".fdR3-4-2").index($(this));
		if ($(".fdR3-4-3").eq(indexJian).text() == 1) {
			$(".fdR3-4-3").eq(indexJian).text("1");
		} else {
			$(".fdR3-4-3").eq(indexJian).text(parseInt($(".fdR3-4-3").eq(indexJian).text()) - 1);
		}
		var danjia = parseFloat($(".danjiaNum").eq(indexJian).text().substr(1));
		changeJine(indexJian, danjia, parseInt($(".fdR3-4-3").eq(indexJian).text()));
		eveDianJine();
		subThing(parseInt($(".fdR3-4-3").eq(indexJian).text()), indexJian);
	})
	$(".fdR3-4-4").click(function() {
		var indexJia = $(".fdR3-4-4").index($(this));
		$(".fdR3-4-3").eq(indexJia).text(parseInt($(".fdR3-4-3").eq(indexJia).text()) + 1);
		var danjia = parseFloat($(".danjiaNum").eq(indexJia).text().substr(1));
		changeJine(indexJia, danjia, parseInt($(".fdR3-4-3").eq(indexJia).text()));
		eveDianJine();
		subThing(parseInt($(".fdR3-4-3").eq(indexJia).text()), indexJia);
	})
	$(".fdR3-4-2").each(function(i) {
		subThing($(".fdR3-4-3").eq(i).text(), i);
	})
		// 点击 列表中 选框
	$("ul .xuankaung").click(function() {
		var liAllxz = true;
		if ($(this).hasClass("hasSel")) {
			$(this).removeClass().addClass("xuankaung").addClass("nhasSel");
			if ($(".dianH .xuankaung").eq($(".dianW ul").index($(this).parents("ul"))).hasClass("hasSel")) {
				$(".dianH .xuankaung").eq($(".dianW ul").index($(this).parents("ul"))).removeClass("hasSel").addClass("nhasSel");
			}
		} else {
			$(this).removeClass().addClass("xuankaung").addClass("hasSel");
			$(this).parents("ul").find(".xuankaung").each(function() {
				if ($(this).hasClass("nhasSel")) {
					liAllxz = false;
				}
			})
			if (liAllxz == true) {
				$(".dianH .xuankaung").eq($(".dianW ul").index($(this).parents("ul"))).removeClass().addClass("xuankaung").addClass("hasSel");
			}
		}
		eveDianJine();
		isQuanxuan();
	})

	// 点击头部的选框
	$(".dianH .xuankaung").click(function() {
		var index = $(".dianH").index($(this).parent());
		if ($(this).hasClass("hasSel")) {
			$(this).parents(".dianW").find(".xuankaung").removeClass().addClass("xuankaung").addClass("nhasSel");
		} else {
			$(this).parents(".dianW").find(".xuankaung").removeClass().addClass("xuankaung").addClass("hasSel");
		}
		eveDianJine();
		isQuanxuan();
	})

	// 删除
	$(".delete").click(function() {
		var deleteIndex = $(".delete").index($(this));
		$.ajax({
			type: "get",
			url: "../php/deletegouwuche.php",
			data: {
				id: $(this).parents("li").attr("paixu")
			},
			dataType: "json",
			success: function(data) {
				if (data.result) {
					$(".DianUl li").eq(deleteIndex).animate({
						height: 0,
					}, 500, function() {
						if ($(this).parents(".dianW").find(".delete").length == 1) {
							$(this).parents(".dianW").remove();
						}
						$(this).remove();
						eveDianJine();
						emptyGWC(); // 购物车删除时, 购物车为空
						
						if ($('.mi-d5 span').text() == 1) {
							$('.mi-d5 span').text(0);
							$(".mi-d5").hide();
						} else{
							$('.mi-d5 span').text(parseInt($('.mi-d5 span').text()) - 1);
						}
					});
				}
			}
		});

	})

	// 全选
	$(".quanXuanF").click(function() {
		if ($(this).text() == "全选") {
			$(this).text("取消全选")
			$(".xuankaung").removeClass().addClass("xuankaung").addClass("hasSel");
		} else {
			$(this).text("全选");
			$(".xuankaung").removeClass().addClass("xuankaung").addClass("nhasSel");
		}

		eveDianJine();
	})

	// 批量删除
	$(".plDelF").click(function() {
		var plArr = [];
		var iArr = [];
		$("li .xuankaung").each(function(i) {
			if ($(this).hasClass("hasSel")) {
				iArr.push(i);
				plArr.push($(this).parents("li").attr("paixu"));
			}		
		})
		$.ajax({
			type:"get",
			url:"../php/pldeletegouwuche.php",
			data: {
				id: plArr
			},
			dataType: "json",
			success: function(data) {
				if (data.result) {
					for (var i = 0; i < iArr.length; i++) {
						$(".DianUl li").eq(iArr[i]).animate({
							height: 0,
						}, 50, function() {
							if ($(this).parents(".dianW").find("li").length == 1) {
								$(this).parents(".dianW").remove();
							}
							$(this).remove();
							eveDianJine();
							emptyGWC(); // 购物车删除时, 购物车为空
							if ($('.mi-d5 span').text() == 1) {
								$('.mi-d5 span').text(0);
								$(".mi-d5").hide();
							} else{
								$('.mi-d5 span').text(parseInt($('.mi-d5 span').text()) - 1);
							}
						})
					}
				}
			}
		});
		
	})
}

// 点击立即购买
$(".buy").click(function() {
	var iArr = [];
	var plArr = [];
	var buyObj = {};
	if ($(".qxAMNum").text() == "¥0.0") {
		alert("请选择您要购买的商品");
	} else {
		$("li .xuankaung").each(function(i) {
			if ($(this).hasClass("hasSel")) {				
				iArr.push(i);
				buyObj["id"] = $(this).parents("li").attr("paixu");
				buyObj["num"] = $(this).parents("li").find(".fdR3-4-3").text();
				plArr.push(buyObj);
			}		
		})
		console.log(plArr);
		localStorage.setItem("buy", plArr);
		window.location.href = "#/orderMessHas";
		$(window).scrollTop(0);
	}
		

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

// 金额改变的函数
function changeJine(index, step, num) {
	var newNumMo = parseInt(step * num * 10) / 10;
	if (newNumMo % 1 != 0) {
		$(".jineNum").eq(index).text("¥" + newNumMo);
	} else {
		$(".jineNum").eq(index).text("¥" + newNumMo + ".0");
	}
}

function twoNum() {
	$(".jineNum").toFixed(2);
}

function eveDianJine() {
	$(".aMNum").each(function(e) {
		var everyMoney = 0;
		$(this).parents(".dianW").find("ul .xuankaung").each(function(i) {
			if ($(this).hasClass("hasSel")) {
				everyMoney += parseFloat($(this).parents(".dianW").find("ul .jineNum").eq(i).text().substr(1));
			}
		});
		var everyMoney = parseInt(everyMoney * 10) / 10;
		if (everyMoney % 1 != 0) {
			$(this).text("¥" + everyMoney);
		} else {
			$(this).text("¥" + everyMoney + ".0");
		}
	})
	var allMoney = 0;
	$(".aMNum").each(function() {
		allMoney += parseFloat($(this).text().substr(1));
	})
	var allMoney = parseInt(allMoney * 10) / 10;
	if (allMoney % 1 != 0) {
		$(".qxAMNum").text("¥" + allMoney);
	} else {
		$(".qxAMNum").text("¥" + allMoney + ".0");
	}
}

// 购物车删除时, 购物车为空
function emptyGWC() {
	if ($(".dianW").length == 0) { // 所有的内容都删除时
		window.location.href = "#/gouwucheweikong";
	}
}

// 当选框全部选中时, 全选改为取消全选
function isQuanxuan() {
	var isqx = true;
	$(".xuankaung").each(function() {
		if ($(this).hasClass("nhasSel")) {
			isqx = false;
		}
	})
	if (isqx) {
		$(".quanXuanF").text("取消全选");
	} else {
		$(".quanXuanF").text("全选");
	}
};
