var arrimg = ["../img/selfCenter/20.png", "../img/selfCenter/21.png"];
//调用
searchMG("sss");
//男女选框变换函数
function searchMG(img) {
	$("." + img).click(function() {
		if ($(this).hasClass("green")) {
			$(this).attr("src", arrimg[0]);
			$(this).parent().siblings().find("img").attr("src", arrimg[1]);
			$(this).removeClass("green");
			$(this).parent().siblings().find("img").addClass("green");
		} else {
			$(this).attr("src", arrimg[1]);
			$(this).parent().siblings().find("img").attr("src", arrimg[0]);
			$(this).addClass("green");
			$(this).parent().siblings().find("img").removeClass("green");
		}
	});
}

//年份的框 的 点击事件
var indexyear = $(".year p").text();
$(".year").click(function() {
	setYear();
	$(".year1").css("display", "block");
	changeColor("year1");
	$(".year1 option").click(function() {
		$(".year p").text($(this).val());
		indexyear = $(this).val();
		$(".year1").css("display", "none");
	});

});

//月份的框 的 点击事件
var indexmounth = $(".mounth p").text();
$(".mounth").click(function() {
	setMounth();
	$(".mounth1").css("display", "block");
	changeColor("mounth1");
	$(".mounth1 option").click(function() {
		$(".mounth p").text($(this).val());
		indexmounth = $(this).val();
		$(".mounth1").css("display", "none");
		setDay();
	});

});

//日子的框 的 点击事件
$(".day").click(function() {
	$(".day1").css("display", "block");
	changeColor("day1");
	$(".day1 option").click(function() {
		$(".day p").text($(this).val());
		$(".day1").css("display", "none");
	});
});

//点开下拉框 option 变色函数
function changeColor(aaa) {
	$("." + aaa + " option").hover(function() {
		$(this).addClass("pinkColor");
		$(this).siblings("option").removeClass("pinkColor");
	});
}

//给"年"下拉框赋内容  
function setYear() {
	var y = new Date().getFullYear();
	var str = "";
	for (var i = (y - 80); i < (y + 80); i++) //以今年为准，前80年，后80年  
	{
		str += "<option value='" + i + "'> " + i + "</option>";
	}
	$(".year1").html(str);
}

//给"月"下拉框赋内容
function setMounth() {
	var str = "";
	for (var i = 1; i < 13; i++) {
		str += "<option value='" + i + "'> " + i + "</option>";
	}
	$(".mounth1").html(str);
}

//给"日"下拉框赋内容
function setDay() {
	var str = "";
	if (1 == indexmounth || 3 == indexmounth || 5 == indexmounth || 7 == indexmounth || 8 == indexmounth || 10 == indexmounth || 12 == indexmounth) {
		for (var i = 1; i <= 31; i++) {
			str += "<option value='" + i + "'> " + i + "</option>";
		}
	} else if (4 == indexmounth || 6 == indexmounth || 9 == indexmounth || 11 == indexmounth) {
		for (var i = 1; i <= 30; i++) {
			str += "<option value='" + i + "'> " + i + "</option>";
		}
	} else if (2 == indexmounth) {
		if (0 == indexyear % 4 && (indexyear % 100 != 0 || indexyear % 400 == 0)) {
			for (var i = 1; i <= 29; i++) {
				str += "<option value='" + i + "'> " + i + "</option>";
			}
		} else {
			for (var i = 1; i <= 28; i++) {
				str += "<option value='" + i + "'> " + i + "</option>";
			}
		}
	}
	$(".day1").html(str);
}
setDay();

//更换手机部分的手机号验证
$(".huanphone").change(function() {
	var str = $(this).val();
	var regExp1 = /^1[34578][0-9]{9}$/;
	if (regExp1.test(str) == false) {
		alert("请确认手机号是否有误!")
	}
})


//确认提交按钮点击事件

$(".iaccziliao .qrtj").click(function() {
	var str = $(".huanphone").val();
	var regExp1 = /^1[34578][0-9]{9}$/;
	if (regExp1.test(str) == false) {
		alert("请确认手机号是否有误!")
	}else{
	alert($(".green").parent().find("p").text());
	$.ajax({
		type: "get",
		url: "../php/idetail2.php",
		data: {
			photo: $(".photo").attr("src"),
			nicheng: $(".nichenginp").val(),
			sex: $(".green").parent().find("p").text(),
			birthday: $(".biryear").text() + " " + $(".birmoun").text() + " " + $(".birday").text(),
			phone1: $(".huanphone").val(),
			phone2: localStorage.getItem("phone")
		},
		dataType: "json",
		success: function(data) {
			if (data.result) {
				alert("提交成功");
			} else {
				alert("提交失败");
			}
			localStorage.setItem("phone", data.phone);
			if (localStorage.getItem("phone")) {
				$(".iflogin-show").show();
				$(".iflogin-hide").hide();
				$(".mainphone").html(localStorage.getItem("phone"));
			} else {
				$(".iflogin-show").hide();
				$(".iflogin-hide").show();

			}
		}
	});
	}
});
//确认提交按钮点击事件结束


//点击修改头像事件
var arrphoto = ["../img/selfCenter/1.png", "../img/jifenDetail/photo.png", "../img/jifenDetail/hxm.png", "../img/jifenDetail/hxm.png", "../img/photo/1.jpg", "../img/photo/2.jpg", "../img/photo/3.jpg", "../img/photo/4.jpg", "../img/photo/5.jpg", "../img/photo/6.jpg"];
$(".xiugai").click(function() {
	$(".sec-fir .photo").attr("src", arrphoto[randomNum()]);
});

function randomNum() {
	return Math.floor(Math.random() * 10);
}

$.ajax({
	type: "get",
	url: "../php/idetail1.php",
	data: {
		phone: localStorage.getItem("phone")
	},
	dataType: "json",
	success: function(data) {
		$(".photo").attr("src", data.photo);
		$(".nichenginp").val(data.nicheng);
		$(".huanphone").val(data.phone);
		var arrbirth = data.birthday.split(" ");
		$(".biryear").text(arrbirth[0]);
		$(".birmoun").text(arrbirth[1]);
		$(".birday").text(arrbirth[2]);
		if (data.sex == "男") {
			$(".manimg").attr("src", "../img/selfCenter/21.png");
			$(".girlimg").attr("src", "../img/selfCenter/20.png");

		} else {
			$(".manimg").attr("src", "../img/selfCenter/20.png");
			$(".girlimg").attr("src", "../img/selfCenter/21.png");
		}
	}
});