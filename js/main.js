app.controller("myCtrlCover", function($scope) {
	var obj = [{
		left: "应季鲜果",
		right1: "草莓",
		right2: "葡萄",
		right3: "香蕉",
		right4: "苹果"
	}, {
		left: "应季鲜果",
		right1: "草莓",
		right2: "葡萄",
		right3: "香蕉",
		right4: "苹果"
	}, {
		left: "应季鲜果",
		right1: "草莓",
		right2: "葡萄",
		right3: "香蕉",
		right4: "苹果"
	}, {
		left: "应季鲜果",
		right1: "草莓",
		right2: "葡萄",
		right3: "香蕉",
		right4: "苹果"
	}, {
		left: "应季鲜果",
		right1: "草莓",
		right2: "葡萄",
		right3: "香蕉",
		right4: "苹果"
	}, {
		left: "应季鲜果",
		right1: "草莓",
		right2: "葡萄",
		right3: "香蕉",
		right4: "苹果"
	}]
	$scope.fruit = obj;

	//全部分类下面的隐藏部分
	$(".cover1 li").mouseenter(function() {
		$(this).css("background-color", "#ebffe7")
		$(this).siblings().css("background-color", "#fff");
	});

	$(".bottom .two").click(function() {
		$(".bottom .two").removeClass("color1");
		$(this).addClass("color1");
	});

	var a = $(".bottom").offset().left + "px";
	var b = $(".bottom").offset().left + 169 + "px";
	$(window).resize(function() {
		a = $(".bottom").offset().left;
		b = $(".bottom").offset().left + 169 + "px";
		$(".cover1").css("left", a);
		$(".cover2").css("left", b);
	});
	$(".cover1").css("left", a);
	$(".cover2").css("left", b);

	$(".cover1").hide();
	$(".cover2").hide();


	$(".bo-span1").click(function() {
		if ($(".cover1").css("display") == "none") {
			$(".cover1").show();
			$(".cover1").css("display", "block");
		} else {
			$(".cover1").hide();
			$(".cover1").css("display", "none");
		}
	});
	$(".cover1").mouseenter(function() {
		$(".cover1").show();
		$(".cover2").show();
		$(".cover2").css("display", "block");
	});
	$(".father").mouseleave(function() {
		$(".cover1").hide();
		$(".cover2").hide();
	});

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
	}

	function cityFun(n) {
		var city = provinceList[n].cityList;
		var l = city.length;
		var shtml = '';
		for (var i = 0; i < l; i++) {
			shtml += '<option value=' + i + '>' + city[i].name + '</option>';
		}
		cityY.innerHTML = shtml;
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
		
	//点击提交按钮
	$(".back button").click(function() {
		$(".tankuang").css("display", "none");
		$(".back").css("display", "none");
		var greenzhi = localStorage.getItem("shengzhi") + localStorage.getItem("shizhi") + localStorage.getItem("xianzhi");
		$(".l-span2").html(greenzhi);
	});
	//点击头部的所在城市 出现蒙板
	$(".l-span2").click(function() {
		$(".tankuang").css("display", "block");
		$(".back").css("display", "block");
	});
	
	// 点击首页时
	$(".homefir-f").click(function() {
		$(".cover1").css("display", "none");
		window.location.href = "#/";
	});
	
	// 点击同城时
	$(".tongchengfir-f").click(function() {
		$(".cover1").css("display", "none");
		window.location.href = "#/tongcheng";
	});
	
	// 点击优先保障时
	$(".freshfir-f").click(function(){
		$(".cover1").css("display", "none");
		window.location.href = "#/freshbaozhang";
	});
	
	// 点击积分商城
	$(".jifenfir-f").click(function() {
		$(".cover1").css("display", "none");
		window.location.href = "#/jifenshangcheng";
	});
	$.ajax({
		type: "get",
		url: "../php/showgouwuche.php",
		data: {
			phone: localStorage.getItem("phone"),
		},
		dataType: "json",
		success: function(data) {
			if (data.length) {
				$('.mi-d5').show();
				$('.mi-d5 span').text(data.length);
			} else{
				$('.mi-d5').hide();
			}
		}
	});

	$scope.show = false;
	// 点击购物车时	
	$(".mi-d4").click(function() {
		$(".cover1").css("display", "none");
		
		if (localStorage.getItem("phone")) {
			$.ajax({
				type:"get",
				url:"../php/addr1.php",
				data:{
					phone: localStorage.getItem("phone")
				},
				dataType: "json",
				success: function(data) {
					if (data.result) {
						window.location.href = "#/gouwuche";
					} else{
						window.location.href = "#/gouwucheweikong";
					}
				}
			});
		}else{
			$scope.show = true;
//			alert("请先登录!");
		}
		
	});

	//搜索框
	$('.mi-d21 img').click(function(){
		if ($('.mi-d21 input').val().length>0) {
			window.location.href = "#/ssjg";
		}else {
			
			window.location.href = "404.html";
		}
		$('.mi-d21 input').val('');
	});
	
	//点击礼拜五
	$('.fridayfir-f').click(function(){
		window.location.href = "#/aboutFiriday";
	});
	
	//点击导航+
	$('.daohangfir-f').click(function(){
			window.location.href = "#/daohang";
	});
	
	//根据本地存储的电话号码   将页面头部的 "登录注册" 修改为 "你好+电话号码"
	if (localStorage.getItem("phone")) {
		$(".iflogin-show").show();
		$(".iflogin-hide").hide();
		$(".mainphone").html(localStorage.getItem("phone"));
	}else{
		$(".iflogin-show").hide();
		$(".iflogin-hide").show();
	};
	
	//点击退出按钮 清除登录时存储到本地的电话号码  并返回到登录页面
	$(".tuichu").click(function(){
		localStorage.removeItem("phone");
		localStorage.removeItem("dhk");
		window.location.href = "login.html";
		
	});
	
	//点击头部的我的订单
	$(".iordertou").click(function(){
		yanzheng("selfCenter.html#/iorder");
	});
	
	//点击头部的我的消息
	$(".imess").click(function(){
		yanzheng("selfCenter.html#/iMessage");
	});
	
	//点击个人中心时,需要先登录,才能查看个人中心
	$(".icenter").click(function(){
		yanzheng("selfCenter.html#/iAccount");
	});
	
	//先判断是否登录才能进行页面跳转的函数
	function yanzheng(url){
		if (localStorage.getItem("phone")) {
			window.location.href = url;
		}else{
			alert("请先登录!");
		}
	}
	
});

