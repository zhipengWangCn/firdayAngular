

// 手机号部分
$(".input-phone").change(function() {
	var str = $('.input-phone').val();
	var regExp1 = /^1[34578][0-9]{9}$/;
	if (regExp1.test(str) == false) {
		$(".phoneInput").css("margin-bottom", 0);
		showOrhide(0, false);
		bool = false;
	} else {
		$(".phoneInput").css("margin-bottom", "30px");
		showOrhide(0, true);
		bool = true;
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

// 我已阅读部分
$(".readedImg").click(function() {
	if ($(this).hasClass("readedImg1")) {
		$(this).removeClass("readedImg1").addClass("readedImg2");
	} else {
		$(this).removeClass("readedImg2").addClass("readedImg1");
	}
})

//  验证码部分
$(".codeInput").change(function() {
	if ($(this).val() == $("canvas").attr("class").toUpperCase() || $(this).val() == $("canvas").attr("class").toLowerCase()) {
		showOrhide(3, true);
		bool = false;
	} else {
		showOrhide(3, false);
		bool = true;
	}
})

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
	} else {
		showOrhide(index, false);
	}
})



// 正确和错误的隐藏, 显示
function showOrhide(index, bool) {
	if (!bool) {
		//		alert(1);
		$(".rightImg").eq(index).css("display", "none");
		$(".falsePhoneP").eq(index).css("display", "block");
	} else {
		$(".falsePhoneP").eq(index).css("display", "none");
		$(".rightImg").eq(index).css("display", "block");
	}
}

// 点击登录
$(".loginBtn").click(function() {
	window.location.href = "login.html";
});

//点击注册
$(".registerBtn").click(function() {
	var bool = true;
	$(".falsePhoneP").each(function() {
		if ($(this).css("display") == "block") {
			bool = false;
		}
	})
	if ($(".input-phone").val() == "" || $(".input-pass").val() == "" || $(".input-repass").val() == "" || $(".codeInput").val() == "" || $(".phonecodeInput").val() == "" || $(".readedImg").hasClass("readedImg1") || bool == false) {
		alert("请输入完整的信息才可进行注册!")
	} else {
		$.ajax({
			type: "get",
			url: "../php/register.php",
			data: {
				phone: $(".input-phone").val(),
				password: $(".input-pass").val()
			},
			dataType: "json",
			success: function(data) {
				if (data.result) {
					alert("注册成功!");
					window.location.href = "login.html";
				} else {
					alert("用户名已存在,请重新注册!");
				}
			}
		});
		$(".input-phone").val("");
		$(".input-pass").val("");
		$(".input-repass").val("");
		$(".codeInput").val("");
		$(".phonecodeInput").val("");
		$(".readedImg").removeClass("readedImg2").addClass("readedImg1");
	}
});