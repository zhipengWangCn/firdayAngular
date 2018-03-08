// 地址的书写
var addrObj = [{
	isDefalt: true,
	address: "杨阳洋 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589",
}, {
	isDefalt: false,
	address: "杨阳洋 北京 北京市 昌平区 天通苑明天第一城4号楼101 手机15032203562",
}, {
	isDefalt: false,
	address: "杨阳洋 北京 北京市 昌平区 天通苑明天第一城4号楼101 手机15032203562",
}, {
	isDefalt: false,
	address: "杨阳洋 北京 北京市 昌平区 天通苑明天第一城4号楼101 手机15032203562 固定电话010-21541589",
}];

function createAdrLi(obj) {
	$(".adrWrap").html("");
	for (i = 0; i < obj.length; i++) {
		if (obj[i].isDefalt == true) {
			$(".adrWrap").prepend('<li class="selAdr defAdrLi li' + i + '"><img src="../img/jifendingdan/circle1.png" alt="" class="circle grCircle" /><span class="mess">' + obj[i].address + '</span><span class="delete">删除</span><span class="xg">修改</span><span class="defaultAdr defSpan">默认地址</span></li>');
		} else {
			$(".adrWrap").append('<li class="nSelAdr nDefAdrLi li' + i + '"><img src="../img/jifendingdan/circle0.png" alt="" class="circle" /><span class="mess">' + obj[i].address + '</span><span class="delete">删除</span><span class="xg">修改</span><span class="setDefAdr defSpan">设置为默认地址</span></li>');
		}
	}

	// 地址的点击事件
	$(".adrWrap li").click(function() {
			$(".adrWrap li").removeClass("selAdr");
			$(".adrWrap li img").attr("src", "../img/jifendingdan/circle0.png");
			$(this).addClass("selAdr");
			$(this).find("img").attr("src", "../img/jifendingdan/circle1.png");
		})
		// 设置为默认地址
	$(".defSpan").click(function() {
		var indexDef = $(".defSpan").index($(this));
		$(".defSpan").text("设置为默认地址");
		$(".defSpan").removeClass("defaultAdr").addClass("setDefAdr");
		$(".defSpan").eq(indexDef).removeClass("setDefAdr").addClass("defaultAdr").text("默认地址");
		// 修改 addrArr
		var classArr = $(".adrWrap li").eq(indexDef).attr("class").split(" ");
		var classNum = classArr[1].substr(2, 1);
		chDefAddr(addrObj, classNum);
	})

	// 删除
	$(".delete").click(function() {
			var indexDel = $(".delete").index($(this));
			// 修改 addrArr
			var classArr = $(".adrWrap li").eq(indexDel).attr("class").split(" ");
			var classNum = classArr[1].substr(2, 1);
			addrObj.splice(classNum, 1);
			$(this).parents("li").animate({
				height: 0,
			}, 500, function() {
				$(this).remove();
				showOther();
			})
			
		})
		// 点击使用新地址按钮
	$('.newAdr').click(function() {
			$(".alertMask").css("display", "block");
			$(".alertAddrWrap").css("display", "block");
			$(".alertAddrWrap h5").attr("class", "addH5");
			$(".alertAddrWrap h5").text("添加地址");
			clear();
		})
		// 点击修改按钮
	$(".xg").click(function() {
		$(".alertMask").css("display", "block");
		$(".alertAddrWrap").css("display", "block");
		$(".alertAddrWrap h5").attr("class", "xgH5");
		$(".alertAddrWrap h5").text("修改地址");
		// 修改前的信息 传入到弹框中
		var xgIndex = $(".xg").index($(this));
		if ($(".defSpan").eq(xgIndex).hasClass("defaultAdr")) {
			$(".setAddrW img").attr("class", "selImg");
			$(".setAddrW img").attr("src", "../img/jifendingdan/circle1.png");
		} else {
			$(".setAddrW img").attr("class", "nSelImg");
			$(".setAddrW img").attr("src", "../img/jifendingdan/circle0.png");
		}
		var classArr = $(".adrWrap li").eq(xgIndex).attr("class").split(" ");
		classNum = classArr[2].substr(2);
		var oldxgAddr = $(".mess").eq(xgIndex).text();
		var oldxgArr = oldxgAddr.split(" ");
		$(".nameInpW input").val(oldxgArr[0]);
		$("#sheng span").text(oldxgArr[1]);
		$("#shi span").text(oldxgArr[2]);
		$("#xian span").text(oldxgArr[3]);
		$(".dzInpW input").val(oldxgArr[4]);
		$(".phInpW input").val("");
		$(".quhInpW input").val("");
		$(".dhInpW input").val("");
		// 手机号码的判断
		if (oldxgArr.length == 6) {
			if (oldxgArr[5].indexOf("-") == -1) {
				var oldsjNum = oldxgArr[5].substr(2, 11);
				$(".phInpW input").val(oldsjNum);
			} else {
				var oldQH = oldxgArr[5].substr(4, 3);
				$(".quhInpW input").val(oldQH);
				var oldDH = oldxgArr[5].substr(8);
				$(".dhInpW input").val(oldDH);
			}
		} else {
			var oldsjNum = oldxgArr[5].substr(2, 11);
			$(".phInpW input").val(oldsjNum);
			var oldQH = oldxgArr[6].substr(4, 3);
			$(".quhInpW input").val(oldQH);
			var oldDH = oldxgArr[6].substr(8);
			$(".dhInpW input").val(oldDH);
		}
	})
}
createAdrLi(addrObj);

// 改变默认地址
function chDefAddr(addrObj, classNum) {
	for (var j = 0; j < addrObj.length; j++) {
		if (j == classNum) {
			addrObj[j].isDefalt = true;
		} else {
			addrObj[j].isDefalt = false;
		}
	}
}

// 清空信息
function clear() {
	$(".nameInpW input").val("");
	$("#sheng span").text("请选择市");
	$("#shi span").text("请选择市");
	$("#xian span").text("请选择县");
	$(".dzInpW input").val("");
	$(".phInpW input").val("");
	$(".quhInpW input").val("");
	$(".dhInpW input").val("");
	$(".setAddrW img").attr("class", "nSelImg");
	$(".setAddrW img").attr("src", "../img/jifendingdan/circle0.png")
}
// 展开其他地址
function showOther() {
	if ($(".adrWrap li").length > 3) {
		$(".showW").css("display", "block");
		for (var n = 0; n < $(".adrWrap li").length; n++) {
			if (n >= 3) {
				$(".adrWrap li").eq(n).hide();
			} else {
				$(".adrWrap li").eq(n).show();
			}
		}
	} else {
		$(".showW").css("display", "none");
	}
}
showOther();
$(".showW").click(function() {
	if ($(this).hasClass("ns")) {
		$(".showW p").text("收起地址");
		$(".showW img").attr("src", "../img/jifendingdan/hide.png");
		$(this).removeClass("ns");
		$(".adrWrap li").show();
	} else{
		$(".showW p").text("展开其他地址");
		$(".showW img").attr("src", "../img/jifendingdan/show.png");
		$(this).addClass("ns");
		for (var n = 0; n < $(".adrWrap li").length; n++) {
			if (n >= 3) {
				$(".adrWrap li").eq(n).hide();
			} else {
				$(".adrWrap li").eq(n).show();
			}
		}
	}
})

// 商品信息部分
var spMessObj = [
{
	img: "../img/jifendingdan/sp.png",
	jieshao: "云南蒙自石榴 8个装",
	guige: "8个装",
	shuliang: 1,
	jifen:60,
},
{
	img: "../img/jifendingdan/sp.png",
	jieshao: "云南蒙自石榴 8个装",
	guige: "8个装",
	shuliang: 2,
	jifen:120,
},
{
	img: "../img/jifendingdan/sp.png",
	jieshao: "福建琯溪白心蜜柚（大果） 2个装",
	guige: "8个装",
	shuliang: 3,
	jifen:180,
}
];

function createMesLi() {
	for (var i = 0; i < spMessObj.length; i++) {
		$(".spConW").append('<li><div class="spConLiW clearfix"><img src="' + spMessObj[i].img + '" alt="" /><p class="yn8">' + spMessObj[i].jieshao + '</p><p class="guige">' + spMessObj[i].guige + '</p><div class="jiajianW"><p class="fdR3-4-2 fdR3-4-2NS"><span></span></p><p class="fdR3-4-3">' + spMessObj[i].shuliang + '</p><p class="fdR3-4-4"><span></span></p></div><p class="jifen60">' + spMessObj[i].jifen + '积分</p></div></li>');
	}
}
createMesLi();
allyfJifen();
$(".fdR3-4-2").click(function() {
	var indexJian = $(".fdR3-4-2").index($(this));
	if ($(".fdR3-4-3").eq(indexJian).text() == 1) {
		$(".fdR3-4-3").eq(indexJian).text("1");
	} else {
		$(".fdR3-4-3").eq(indexJian).text(parseInt($(".fdR3-4-3").eq(indexJian).text()) - 1);
	}
	changeJifen(indexJian, 60, parseInt($(".fdR3-4-3").eq(indexJian).text()));
	allyfJifen();
	subThing(parseInt($(".fdR3-4-3").eq(indexJian).text()), indexJian);
})
$(".fdR3-4-4").click(function() {
	var indexJia = $(".fdR3-4-4").index($(this));
	$(".fdR3-4-3").eq(indexJia).text(parseInt($(".fdR3-4-3").eq(indexJia).text()) + 1);	
	changeJifen(indexJia, 60, parseInt($(".fdR3-4-3").eq(indexJia).text()));
	allyfJifen();
	subThing(parseInt($(".fdR3-4-3").eq(indexJia).text()), indexJia);
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
// 积分改变的函数
function changeJifen(index, step, num) {
	$(".jifen60").eq(index).text(step * num + "积分");
}
// 应付积分的函数
function allyfJifen() {
	var allYfMoney = 0;
	$(".jifen60").each(function(i) {
		allYfMoney += parseFloat($(".jifen60").eq(i).text().substr(0, $(".jifen60").eq(i).text().length - 2));
	})
	$(".yfMoney").text(allYfMoney + "积分");
}

// 点击确认兑换
$(".duihuanBtn").click(function() {
	window.location.href = "#/zfcg";
})
