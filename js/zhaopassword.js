

// 手机号部分
$(".input-phone").change(function() {
	var str = $('.input-phone').val();
	var regExp1 = /^1[34578][0-9]{9}$/;
	if (regExp1.test(str) == false) {
//		phoneF = false;
		$(".phoneInput").css("margin-bottom", 0);
		var index = $(".inputCom").index($(this));
		showOrhide(index, false);
	} else {
		$(".phoneInput").css("margin-bottom", "30px");
		var index = $(".inputCom").index($(this));
		showOrhide(index, true);
	}
})

// 手机验证码部分
$('.getCode').click(function() {
	var a = Math.floor(Math.random() * 9);
	var b = Math.floor(Math.random() * 9);
	var c = Math.floor(Math.random() * 9);
	var d = Math.floor(Math.random() * 9);
	var num = String(a) + String(b) + String(c) + String(d);
	$('.phonecodeInput').val(num);
});

// 密码部分
$(".input-pass").change(function() {
	var str = $(this).val();
	var index = $(".inputCom").index($(this));
	var regExp1 = /^[^\s]{6,20}$/;
	if (regExp1.test(str) == false) {
		showOrhide(index, false);
	} else {
		showOrhide(index, true);
	}
})

// 再次输入密码部分
$(".input-repass").change(function() {
	var index = $(".inputCom").index($(this));
	if ($(".input-pass").val() == $(this).val()) {
		showOrhide(index, true);
	} else{
		showOrhide(index, false);
	}
})

//  验证码部分
$(".codeInput").change(function() {
	var index = $(".inputCom").index($(this));
	alert($("canvas").attr("class"));
	if ($(this).val() == $("canvas").attr("class").toUpperCase() || $(this).val() == $("canvas").attr("class").toLowerCase()) {
		alert(1);
		showOrhide(index, true);
	} else{
		showOrhide(index, false);
	}
})
// 正确和错误的隐藏, 显示
function showOrhide(index, bool) {
	if (!bool) {
		$(".rightImg").eq(index).css("display", "none");
		$(".falsePhoneP").eq(index).css("display", "block");
	} else{
		$(".falsePhoneP").eq(index).css("display", "none");
		$(".rightImg").eq(index).css("display", "block");
	}
}



