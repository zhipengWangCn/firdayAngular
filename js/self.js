app.controller("myCtrlCover", function($scope) {
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
	},{
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

	$(".bottom .two").mouseenter(function() {
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

	var isShow = false;
	$(".bo-span1").click(function() {
		if (!isShow) {
			$(".cover1").show();
			$(".cover1").css("display", "block");
			isShow = true;
		} else {
			$(".cover1").hide();
			$(".cover1").css("display", "none");
			isShow = false;
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


	$(".left ul li").click(function() {
		$(".left ul li").removeClass("li-select");
		$(this).addClass("li-select");
	});

	//点击个人中心中所对应的项,跳转到对应的页面(路由)
	$(".zhanghu").click(function() {
		window.location.href = "#/iAccount";
	});
	$(".message").click(function() {
		window.location.href = "#/iMessage";
	});
	$(".fankui").click(function() {
		window.location.href = "#/ifankui";
	});
	$(".liulan").click(function() {
		window.location.href = "#/look";
	});
	$(".shoucang").click(function() {
		window.location.href = "#/icollect";
	});
	$(".dingdan").click(function() {
		window.location.href = "#/iorder";
	});
	$(".jifen").click(function() {
		window.location.href = "#/iscore";
	});
	$(".jifendingdan").click(function() {
		window.location.href = "#/scoreOrder";
	});
	$(".mima").click(function() {
		window.location.href = "#/changePassword";
	});
	$(".ziliao").click(function() {
		window.location.href = "#/iziliao";
	});
	$(".address").click(function() {
		window.location.href = "#/iaddr";
	});
	$(".qianbao").click(function() {
		window.location.href = "#/changePhone1";
	});

	//我的消息部分
	var obj2 = [{
		send: "您的货物已发货您的货物已发货您的货物已发货",
		clock: "2017年4月1日15:25:07",
		nofind: "未查看",
		find: "查看",
		delete: "删除"
	}, {
		send: "您的货物已发货您的货物已发货您的货物已发货",
		clock: "2017年4月1日15:25:07",
		nofind: "未查看",
		find: "查看",
		delete: "删除"
	}, {
		send: "您的货物已发货您的货物已发货您的货物已发货",
		clock: "2017年4月23日15:25:07",
		nofind: "未查看",
		find: "查看",
		delete: "删除"
	}, {
		send: "您的货物已发货您的货物已发货您的货物已发货",
		clock: "2017年4月1日15:25:07",
		nofind: "未查看",
		find: "查看",
		delete: "删除"
	}, {
		send: "您的货物已发货您的货物已发货您的货物已发货",
		clock: "2017年4月1日15:25:07",
		nofind: "未查看",
		find: "查看",
		delete: "删除"
	}];

	$scope.myMessage = obj2;

	$scope.findclick = function() {
		window.location.href = "#/find";
	}
	$scope.deleteclick = function() {
			obj2.splice(1, 1);
		}
	//我的消息部分结束


	//我的订单部分
	$scope.arrlist = [{
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "关闭",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}, {
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "待付款",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}, {
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "待发货",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}, {
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "已发货",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}, {
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "已收货",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}, {
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "申请退款中",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}, {
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "退款中",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}, {
		"number": "150319690000",
		"data": "2017.04.09 18:06:06",
		"shop": "爱果果水果店",
		"state": "退款失败",
		"small": [{
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}, {
			"smallimg": "../img/selfCenter/12.png",
			"smalltype": "云南昭通丑苹果",
			"smallnum": "6个装",
			"smallprice": "¥35.0*1"
		}],
		"total": "¥105",
		"yunfei": "¥8"
	}];

	$scope.shownum = "";

	$scope.showNum = function(str) {
		$scope.shownum = str;
	};

	$scope.smalldelete = function(n){
		$scope.arrlist.splice(n,1);
	}

	$scope.pingjia = function() {
		window.location.href = "#/ddpingjia";
	};

	$scope.lookdetail = function() {
		window.location.href = "#/orderDetail";
	};
	//我的订单部分结束
	
	//点击退出按钮
	$(".tuichu").click(function(){
		localStorage.removeItem("phone");
		window.location.href = "login.html";
	});

	//登录之后,页面头部的登录注册改为你好+账户名
	if (localStorage.getItem("phone")) {
		$(".iflogin-show").show();
		$(".iflogin-hide").hide();
		$(".mainphone").html(localStorage.getItem("phone"));
	} else {
		$(".iflogin-show").hide();
		$(".iflogin-hide").show();
	}
	
	//搜索框
	$('.mi-d21 img').click(function(){
		if ($('.mi-d21 input').val().length>0) {
			window.location.href = "route.html#/ssjg";
		}else {
			window.location.href = "404.html";
		}
		$('.mi-d21 input').val('');
	});
	
});