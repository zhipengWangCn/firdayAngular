
firThing();
function firThing() {
	$.ajax({
		type: "get",
		url: "../php/addr2.php",
		data: {
			phone: localStorage.getItem("phone")
		},
		dataType: "json",
		success: function(data) {
			console.log(data);
			console.log(data.length);
			createAdr(data);
			showOther();
		}
	});
}


function createAdr(obj) {
	$(".adrWrap").html("");
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].isDefault == 1) {
			$(".adrWrap").prepend('<li class="selAdr defAdrLi li" paixu="' + obj[i].id + '"><img src="../img/jifendingdan/circle1.png" alt="" class="circle grCircle" /><span class="mess">' + obj[i].address + '</span><span class="delete">删除</span><span class="xg">修改</span><span class="defaultAdr defSpan">默认地址</span></li>');
		} else {
			$(".adrWrap").append('<li class="nSelAdr nDefAdrLi li" paixu="' + obj[i].id + '"><img src="../img/jifendingdan/circle0.png" alt="" class="circle" /><span class="mess">' + obj[i].address + '</span><span class="delete">删除</span><span class="xg">修改</span><span class="setDefAdr defSpan">设置为默认地址</span></li>');
		}
	}

	// 地址的点击事件
	$(".adrWrap li").click(function() {
		$(".adrWrap li").removeClass("selAdr").addClass("nSelAdr");
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
		var classNum = $(".adrWrap li").eq(indexDef).attr("paixu");
		chDefAddr(classNum, indexDef);
	})
		
	// 删除
	$(".delete").click(function() {
		var indexDel = $(".delete").index($(this));
		// 修改 addrArr
		var classNum = $(".adrWrap li").eq(indexDel).attr("paixu");
		deleteLi(classNum, indexDel);			
		
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
		classNum1 = $(".adrWrap li").eq(xgIndex).attr("paixu");
		alert(classNum1);
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



// 改变默认地址
function chDefAddr(classNum, indexDef) {
	$.ajax({
		type: "get",
		url: "../php/changeDefault.php",
		data: {
			id: classNum,
			phone: localStorage.getItem("phone")
		},
		dataType: "json",
		success: function(data) {
			if (data.result) {
				$(".defSpan").text("设置为默认地址");
				$(".defSpan").removeClass("defaultAdr").addClass("setDefAdr");
				$(".defSpan").eq(indexDef).removeClass("setDefAdr").addClass("defaultAdr").text("默认地址");
			}
		}
		
	});
}

// 点击删除
function deleteLi(classNum, indexDel) {
	$.ajax({
		type: "get",
		url: "../php/deleteAddr.php",
		data: {
			id: classNum
		},
		dataType: "json",
		success: function(data) {
			if (data.result) {
				$(".adrWrap li").eq(indexDel).remove();
				showOther();
			}
		}
		
	});
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
	if ($(".showW").hasClass("ns")) {
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
			$(".adrWrap li").show();
		}
	}
}

$(".showW").click(function() {
	if ($(this).hasClass("ns")) {
		$(".showW p").text("收起地址");
		$(".showW img").attr("src", "../img/jifendingdan/hide.png");
		$(this).removeClass("ns");
		$(".adrWrap li").show();
	} else {
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

// 点击使用新地址按钮
$('.newAdr').click(function() {
	$(".alertMask").css("display", "block");
	$(".alertAddrWrap").css("display", "block");
	$(".alertAddrWrap h5").attr("class", "addH5");
	$(".alertAddrWrap h5").text("添加地址");
	clear();
})

// 提交订单
$(".order-btn").click(function() {
	if (($(".adrWrap .selAdr").find(".mess").text().split(" ")[1]) == "新疆") {
		$(".order-mask").css("display", "block");
		$(".tishi-w").css("display", "block");
	} else {
		window.location.href = "#/placeOrder";
	};
	if ($('.adrWrap li').hasClass('selAdr')) {
		localStorage.setItem("text1",$('.selAdr').find('.mess').text());
		localStorage.setItem("text2",$('.shifu-num').text());	
	}
})

$(".tishi-w").hover(function() {
	if ($(".loginX").css("display") == "none") {
		$(".loginX").css("display", "block");
	} else {
		$(".loginX").css("display", "none");
	}
})
$(".loginX").click(function() {
		$(".order-mask").css("display", "none");
		$(".tishi-w").css("display", "none");
	})
	// 修改配送区域
$(".xg-tis").click(function() {
		$(".order-mask").css("display", "none");
		$(".tishi-w").css("display", "none");
	})
	// 返回购物车修改
$(".return-tis").click(function() {
	window.location.href = "#/gouwuche";
})