
// 地址的书写addAddr.php
var addrObj = [{
	isDefalt: true,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}, {
	isDefalt: false,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}, {
	isDefalt: false,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}, {
	isDefalt: false,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}, {
	isDefalt: false,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}, {
	isDefalt: false,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}, {
	isDefalt: false,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}, {
	isDefalt: false,
	addrName: "杨阳洋",
	addrquxu: "北京 北京市 朝阳区",
	addrJiedao: "朝阳奥运媒体村(北苑天畅园)C3-2506室",
	phone: 18331205623,
	beizhu: "家里的地址"
}];
// 先判断对象是否为空
ifEmpty();

function createAdrLi(obj) {
	$(".adrWrap").html("");
	for (i = 0; i < obj.length; i++) {
		if (obj[i].isDefalt == false) {
			$(".adrWrap").append('<li class="nselAdr ndef-addr li' + i + '"><p class="shr-f">' + obj[i].addrName + '</p><p class="quyu-f">' + obj[i].addrquxu + '</p><p class="jiedao-f">' + obj[i].addrJiedao + '</p><p class="lianxi-f">' + obj[i].phone + '</p><p class="beizhu-f">' + obj[i].beizhu + '</p><p class="caozuo-f"><span class="set-def-btn">设为默认地址</span><span class="xg-btn">修改</span><span class="delete-btn">删除</span></p></li>');
		} else {
			$(".adrWrap").prepend('<li class="selAdr def-addr li' + i + '"><p class="shr-f">' + obj[i].addrName + '</p><p class="quyu-f">' + obj[i].addrquxu + '</p><p class="jiedao-f">' + obj[i].addrJiedao + '</p><p class="lianxi-f">' + obj[i].phone + '</p><p class="beizhu-f">' + obj[i].beizhu + '</p><p class="caozuo-f"><span class="set-def-btn noneshow">设为默认地址</span><span class="xg-btn">修改</span><span class="delete-btn">删除</span></p></li>');
		}
	}

	// 地址的点击事件
	$(".adrWrap li").click(function() {
		$(".adrWrap li").removeClass("selAdr").addClass("nselAdr");
		$(this).removeClass("nselAdr").addClass("selAdr");
	})

	// 设置为默认地址
	$(".set-def-btn").click(function() {
		$(".set-def-btn").removeClass("noneshow");
		$(this).addClass("noneshow");
	})

	// 删除
	$(".delete-btn").click(function() {
		var indexDel = $(".delete").index($(this));
		
		// 修改 addrArr
		var classArr = $(".adrWrap li").eq(indexDel).attr("class").split(" ");
		var classNum = classArr[2].substr(2, 1);
		addrObj.splice(classNum, 1);
		$(this).parents("li").animate({
			height: 0,
		}, 500, function() {
			$(this).remove();
			ifEmpty1();
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
	$(".xg-btn").click(function() {
		$(".alertMask").css("display", "block");
		$(".alertAddrWrap").css("display", "block");
		$(".alertAddrWrap h5").attr("class", "xgH5");
		$(".alertAddrWrap h5").text("修改地址");
		// 修改前的信息 传入到弹框中
		var xgIndex = $(".xg-btn").index($(this));
		if ($(".set-def-btn").eq(xgIndex).hasClass("noneshow")) {
			$(".setAddrW img").removeClass().addClass("selImg");
			$(".setAddrW img").attr("src", "../img/jifendingdan/circle1.png");			
		} else {
			$(".setAddrW img").removeClass().addClass("nSelImg");
			$(".setAddrW img").attr("src", "../img/jifendingdan/circle0.png");
		}
		var classArr = $(".adrWrap li").eq(xgIndex).attr("class").split(" ");
		classNum = classArr[2].substr(2);
		var shrstr = $(".quyu-f").eq(xgIndex + 1).text();
		var shrArr = shrstr.split(" ");
		$(".nameInpW input").val($(".shr-f").eq(xgIndex + 1).text());
		$("#sheng span").text(shrArr[0]);
		$("#shi span").text(shrArr[1]);
		$("#xian span").text(shrArr[2]);
		$(".dzInpW input").val($(".jiedao-f").eq(xgIndex + 1).text());
		$(".phInpW input").val($(".lianxi-f").eq(xgIndex + 1).text());		
	})
}
createAdrLi(addrObj);

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



//弹框部分
var sheng = document.getElementById('sheng');
var shi = document.getElementById('shi');
var xian = document.getElementById('xian');
var sh = document.getElementById('sh');
var cityY = document.getElementById('city');
var xi = document.getElementById('xi');
//	var n = localStorage.getItem("n");
//	var m = localStorage.getItem("m");

function shengFun() {
	var l = provinceList.length;
	var shtml = '';
	for (var i = 0; i < l; i++) {
		shtml += '<option value=' + i + '>' + provinceList[i].name + '</option>';
	}
	sh.innerHTML = shtml;
	//cityFun(n);
}

function cityFun(n) {
	var city = provinceList[n].cityList;
	var l = city.length;
	var shtml = '';
	for (var i = 0; i < l; i++) {
		shtml += '<option value=' + i + '>' + city[i].name + '</option>';
	}
	cityY.innerHTML = shtml;
	//xianFun(n,m);
}

function xianFun(n, m) {
	var city = provinceList[n].cityList[m].areaList;
	var l = city.length;
	var shtml = '';
	for (var i = 0; i < l; i++) {
		shtml += '<option>' + city[i] + '</option>';
	}
	xi.innerHTML = shtml;
}

//点击省市县下拉按钮
var ishide1 = true;
var ishide2 = true;
var ishide3 = true;
var shengzhi = 0;
var shizhi = 0;
var xianzhi = 0;
$("#sheng img").click(function() {
	shengFun();

	if (ishide1) {
		$("#sh").css("display", "block");
		ishide1 = false;
	} else {
		$("#sh").css("display", "none");
		ishide1 = true;
	}
	var n = 0;
	//将option值放在span中
	$('#sh option').click(function() {
		$("#sheng").find("span").text($(this).text());
		$("#sh").css("display", "none");
		n = $(this).attr('value');
		shengzhi = $(this).text();
		localStorage.setItem("shengzhi", shengzhi);
		var greenzhi = localStorage.getItem("shengzhi") + localStorage.getItem("shizhi") + localStorage.getItem("xianzhi");
		$(".green").html(greenzhi);

	});
	$('#shi img').click(function() {
		cityFun(n);
		if (ishide2) {
			$("#city").css("display", "block");
			ishide2 = false;
		} else {
			$("#city").css("display", "none");
			ishide2 = true;
		}
		var m = 0;
		//将option值放在span中
		$('#city option').click(function() {
			$("#shi").find("span").html($(this).text());
			$("#city").css("display", "none");
			m = $(this).attr('value');
			shizhi = $(this).text();
			localStorage.setItem("shizhi", shizhi);
			var greenzhi = localStorage.getItem("shengzhi") + localStorage.getItem("shizhi") + localStorage.getItem("xianzhi");
			$(".green").html(greenzhi);

		});
		$('#xian img').click(function() {
			xianFun(n, m);
			if (ishide3) {
				$("#xi").css("display", "block");
				ishide3 = false;
			} else {
				$("#xi").css("display", "none");
				ishide3 = true;
			}
			//将option值放在span中
			$('#xi option').click(function() {
				$("#xian").find("span").html($(this).text());
				$("#xi").css("display", "none");
				xianzhi = $(this).text();
				localStorage.setItem("xianzhi", xianzhi);
				var greenzhi = localStorage.getItem("shengzhi") + localStorage.getItem("shizhi") + localStorage.getItem("xianzhi");
				$(".green").html(greenzhi);
			});
		});
	});
});
// 设置为常用地址
$(".setAddrW img").click(function() {
		if ($(this).hasClass("nSelImg")) {
			$(this).attr("class", "selImg");
			$(this).attr("src", "../img/jifendingdan/circle1.png")
		} else {
			$(this).attr("class", "nSelImg");
			$(this).attr("src", "../img/jifendingdan/circle0.png")
		}
	})
	// 点击返回
$(".reSaW .return").click(function() {
		$(".alertMask").css("display", "none");
		$(".alertAddrWrap").css("display", "none");
	})
	// 点击保存 

var isDefalutAddr = false;
var justifySave = true;
$(".reSaW .save").click(function() {
	justifySave1();
	// 添加部分
	if (justifySave) {
		if ($(".alertAddrWrap h5").attr("class") == "addH5") {
			if ($(".setAddrW img").attr("class") == "nSelImg") { // 不是默认地址
				isDefalutAddr = false;
				addAddr(isDefalutAddr);
				
			} else { // 是默认地址
				isDefalutAddr = true;
				addAddr(isDefalutAddr);
				// 改变默认地址
				chDefAddr(addrObj, addrObj.length - 1);
			}

		} else { // 修改部分
			if ($(".setAddrW img").attr("class") == "nSelImg") { // 不是默认地址
				isDefalutAddr = false;
				xgSave(classNum, addrObj, isDefalutAddr);
			} else { // 是默认地址
				isDefalutAddr = true;
				xgSave(classNum, addrObj, isDefalutAddr);
				// 改变默认地址
				chDefAddr(addrObj, classNum);
			}
		}
		createAdrLi(addrObj);
		$(".alertMask").css("display", "none");
		$(".alertAddrWrap").css("display", "none");
	}
})

// 点击添加地址 信息存到 数组中的函数
function addAddr(bool) {
	addrObj.push({
		isDefalt: bool,
		addrName: $(".nameInpW input").val(),
		addrquxu: $(".sheng span").text() + " " + $(".shi span").text() + " " + $(".xian span").text(),
		addrJiedao: $(".dzInpW input").val(),
		phone: $(".phInpW input").val(),
		beizhu: "家里的地址"
	});
}

// 点击修改 保存时的函数
function xgSave(index, addrObj, bool) {
	addrObj[index] = {
		isDefalt: bool,
		addrName: $(".nameInpW input").val(),
		addrquxu: $(".sheng span").text() + " " + $(".shi span").text() + " " + $(".xian span").text(),
		addrJiedao: $(".dzInpW input").val(),
		phone: $(".phInpW input").val(),
		beizhu: "家里的地址"
	}
}

// 点击保存时, 判断内容是否填写完成
function justifySave1() {
	var regExp1 = /^1[34578][0-9]{9}$/;
	if ($(".nameInpW input").val() == "") {
		alert("请填写收货人姓名");
		justifySave = false;
	} else if ($("#sheng span").text() == "请选择市" || $("#shi span").text() == "请选择市" || $("#xian span").text() == "请选择县" || $(".dzInpW input").val() == "") {
		alert("请将地址填写完整");
		justifySave = false;
	} else if ($(".phInpW input").val() == "") {
		alert("请填写联系电话");
		justifySave = false;
	} else if ($(".phInpW input").val() != "" && !regExp1.test($(".phInpW input").val())) {
		alert("手机号码格式不对");
		justifySave = false;
	} else {
		justifySave = true;
	}
}

// 判断地址是否为空
function ifEmpty() {
	if (addrObj.length == 0) {
		$(".adrcon-w").css("display", "none");
		$(".addrempty").css("display", "block");
	} else{
		$(".adrcon-w").css("display", "block");
		$(".addrempty").css("display", "none");			
	}
}
function ifEmpty1() {
	if ($(".adrWrap li").length == 0) {
		$(".adrcon-w").css("display", "none");
		$(".addrempty").css("display", "block");
	} else{
		$(".adrcon-w").css("display", "block");
		$(".addrempty").css("display", "none");			
	}
}
// 点击地址为空时的添加新地址
$(".addfiraddr").click(function() {
	window.location.href = "#/tjxdz";
})
