// 点击账户或手机验证部分
$(".loginP2").click(function() {
	if ($(this).hasClass("codeloginP2")) {
		$(this).text("手机验证码登录");
		$(this).removeClass("codeloginP2").addClass("phoneloginP2");
		$(".passWrap").css("display", "block");
		$(".phoneCodeWrap").css("display", "none");
		$(".loginImg").removeClass("codeloginImg").addClass("phoneloginImg");
		$(".inputCom").val("");
		$(".rightImg").css("display", "none");
		$(".falsePhoneP").css("display", "none");
		$(".phoneInput").css("margin-bottom", "30px");
	} else{
		$(this).text("账号密码登录");
		$(this).removeClass("phoneloginP2").addClass("codeloginP2")
		$(".passWrap").css("display", "none");
		$(".phoneCodeWrap").css("display", "block");
		$(".loginImg").removeClass("phoneloginImg").addClass("codeloginImg");
		$(".inputCom").val("");
		$(".rightImg").css("display", "none");
		$(".falsePhoneP").css("display", "none");
		$(".phoneInput").css("margin-bottom", "30px");
	}
})

$(".login-wrap").hover(function() {
	if ($(".loginX").css("display") == "none") {
		$(".loginX").css("display", "block");
	} else{
		$(".loginX").css("display", "none");
	}
})
$(".loginX").click(function() {
	$(".mask-login").css("display", "none");
	$(".login-wrap").css("display", "none");
})
// 自动登录部分
$(".autoLoW img").click(function() {
	if ($(this).hasClass("autoImg1")) {
		$(this).removeClass("autoImg1").addClass("autoImg2");
		$(this).attr("src", "../img/login/checkbox1.png");
	} else{
		$(this).removeClass("autoImg2").addClass("autoImg1");
		$(this).attr("src", "../img/login/checkbox2.png");
	}
//	flag = $(".autoLoW img").hasClass("autoImg2")?0:1;
})

// 手机号部分
$(".input-phone").change(function() {
	var str = $('.input-phone').val();
	var regExp1 = /^1[34578][0-9]{9}$/;
	if (regExp1.test(str) == false) {
		$(".phoneInput").css("margin-bottom", 0);
		showOrhide(0, false);
	} else {
		$(".phoneInput").css("margin-bottom", "30px");
		showOrhide(0, true);
	}
	
	if (localStorage.getItem("password") && localStorage.getItem("password").split(" ")[0] == $(this).val()) {
		$(".input-pass").val(localStorage.getItem("password").split(" ")[1]);
		$(".autoLoW img").removeClass("autoImg2").addClass("autoImg1");
		$(".autoLoW img").attr("src", "../img/login/checkbox2.png");
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

//  验证码部分
$(".codeInput").change(function() {
	if ($(this).val() == $("canvas").attr("class").toUpperCase() || $(this).val() == $("canvas").attr("class").toLowerCase()) {
		showOrhide(1, true);
	} else{
		showOrhide(1, false);
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

// 点击注册
$(".registerBtn").click(function() {
	window.location.href = "#/register";
})

//点击登录 发起ajax请求
$(".loginBtn").click(function(){
	alert(111);
	var bool = true;
	$(".falsePhoneP").each(function() {
		if ($(this).css("display") == "block") {
			bool = false;
		}
	})
	if ($(".passWrap").css("display") == "none") {
		if($(".input-phone").val() == "" || bool == false){
			alert("请输入完整信息");
		}else{
			$.ajax({
				type:"get",
				url:"../php/login.php",
				data:{
					phone:$(".input-phone").val()
				},
				dataType:"json",
				success:function(data){
					if(data.result){
						alert("登录成功!");
						localStorage.setItem("phone",$(".input-phone").val());
						$(".mask-login").css("display", "none");
						$(".login-wrap").css("display", "none");
						location.reload();
					}else{
						alert("登录失败,请检查!")
					}
					$(".input-phone").val("");
					$(".codeInput").val("");
					$(".phonecodeInput").val("");
				}
			});
			
		}
	}else if($(".passWrap").css("display") == "block"){//密码登录
				if($(".input-phone").val() == "" || $(".input-pass").val() == "" ||  $(".codeInput").val() == "" || bool == false){
			alert("请输入完整信息");
		}else{
			$.ajax({
				type:"get",
				url:"../php/login2.php",
				data:{
					phone:$(".input-phone").val(),
					password:$(".input-pass").val()
				},
				dataType:"json",
				success:function(data){
					if(data.result){
						alert("登录成功!")
						localStorage.setItem("phone",$(".input-phone").val());
						if ($(".autoLoW img").hasClass("autoImg1")) {
							localStorage.setItem("password",$(".input-pass").val());
						}else{
							localStorage.removeItem("password");
						}
						$(".mask-login").css("display", "none");
						$(".login-wrap").css("display", "none");
						location.reload();
					}else{
						alert("登录失败,请检查!")
					}
					$(".input-phone").val("");
					$(".codeInput").val("");
					$(".input-pass").val("");
				}
			});
		}
	}
	
});


