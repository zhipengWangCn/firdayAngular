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
		$("#sheng").find("span").html($(this).text());
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
				isDefalutAddr = 0;
				addAddr(isDefalutAddr);
			} else { // 是默认地址
				isDefalutAddr = 1;
				addAddr(isDefalutAddr);
			}
		} else { // 修改部分
			if ($(".setAddrW img").attr("class") == "nSelImg") { // 不是默认地址
				isDefalutAddr = 0;
				xgSave(classNum1, isDefalutAddr);
			} else { // 是默认地址
				isDefalutAddr = 1;
				xgSave(classNum1, isDefalutAddr);
			}
		}		
		
	}
})

// 点击添加地址 信息存到 数组中的函数
function addAddr(bool) {
	getAlertAddr(bool);
	$.ajax({
		type: "get",
		url: "../php/addAddr.php",
		data: {
			phone: localStorage.getItem("phone"),
			isDefault: isDefalt,
			address: address
		},
		dataType: "json",
		success: function(data) {
			if (data.result) {
				$(".alertMask").css("display", "none");
				$(".alertAddrWrap").css("display", "none");
				firThing();
			}
		}
	});
}

// 点击修改 保存时的函数
function xgSave(index, bool) {
	getAlertAddr(bool);
	$.ajax({
		type: "get",
		url: "../php/xgAddr.php",
		data: {
			id: index,
			isDefault: isDefalt,
			address: address,
			phone: localStorage.getItem("phone")
		},
		dataType: "json",
		success: function(data) {
			if (data.result) {
				$(".alertMask").css("display", "none");
				$(".alertAddrWrap").css("display", "none");
				firThing();
				showOther();
			}
		}
	});
}

// 获取添加, 修改后的信息
function getAlertAddr(bool) {
	if ($(".quhInpW input").val() == "") {
		isDefalt = bool;
		address =  $(".nameInpW input").val() + " " + $(".sheng span").text() + " " + $(".shi span").text() + " " + $(".xian span").text() + " " + $(".dzInpW input").val() + " " + "手机" + $(".phInpW input").val();

	} else if ($(".phInpW input").val() == "") {

		isDefalt = bool;
		address = $(".nameInpW input").val() + " " + $(".sheng span").text() + " " + $(".shi span").text() + " " + $(".xian span").text() + " " + $(".dzInpW input").val() + " " + "固定电话" + $(".quhInpW input").val() + "-" + $(".dhInpW input").val();

	} else {

		isDefalt = bool;
		address = $(".nameInpW input").val() + " " + $(".sheng span").text() + " " + $(".shi span").text() + " " + $(".xian span").text() + " " + $(".dzInpW input").val() + " " + "手机" + $(".phInpW input").val() + " " + "固定电话" + $(".quhInpW input").val() + "-" + $(".dhInpW input").val();

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
	} else if ($(".phInpW input").val() == "" && $(".dhInpW input").val() == "" && $(".quhInpW input").val() == "") {
		//		!regExp1.test($(".phInpW input").val()) || 
		alert("请填写联系电话");

		justifySave = false;
	} else if ($(".phInpW input").val() != "" && !regExp1.test($(".phInpW input").val())) {
		alert("手机号码格式不对");
		justifySave = false;
	} else {
		justifySave = true;
	}
}