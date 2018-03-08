//订单状态 关闭
$(".second").append('<div class="second-sec second1 comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>关闭</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p><button class="delete">删除订单</button></div></div></div>');

var arrImgClose = ["../img/selfCenter/12.png","../img/selfCenter/12.png","../img/selfCenter/12.png"];

for (var i = 0; i < arrImgClose.length; i++) {
	$(".second1 .sec-2").append('<div class="sec-21 com"><img src="' + arrImgClose[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}

var closeLenght = getHeight(arrImgClose);
$(".second1 .sec-3").css("height",closeLenght);
$(".second1 .sec-31").css("margin-top",(closeLenght-60)/2);
$(".second1 .sec-41").css("margin-top",(closeLenght-90)/2);
$(".second1 .sec-21").eq(arrImgClose.length-1).css("border-bottom","none");
$(".second1 .money").text(arrImgClose.length*35.0 + 8);

//订单状态 待付款(DFK)
$(".second").append('<div class="second-sec third1 comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>待付款</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p><button class="sec-41-bott1">去支付</button><button class="sec-41-bott2 delete">删除订单</button></div></div></div>');

var arrImgDFK = ["../img/selfCenter/12.png","../img/selfCenter/12.png"];
for (var i = 0; i < arrImgDFK.length; i++) {
	$(".third1 .sec-2").append('<div class="sec-21 com"><img src="' + arrImgDFK[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}
var dfkLenght = getHeight(arrImgDFK);
$(".third1 .sec-3").css("height",dfkLenght);
$(".third1 .sec-31").css("margin-top",(dfkLenght-60)/2);
$(".third1 .sec-41").css("margin-top",(dfkLenght-120)/2);
$(".third1 .iorder .sec-2 .sec-21").eq(arrImgDFK.length-1).css("border-bottom","none");
$(".third1 .money").text(arrImgDFK.length*35.0 + 8);


//订单状态  待发货(DFH)
$(".second").append('<div class="second-sec fourth1 comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>待发货</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p><button>申请退款</button></div></div></div>');
var arrImgDFH = ["../img/selfCenter/12.png","../img/selfCenter/12.png"];
for (var i = 0; i < arrImgDFH.length; i++) {
	$(".fourth1 .sec-2").append('<div class="sec-21 com"><img src="' + arrImgDFH[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}
var dfhLenght = getHeight(arrImgDFH);
$(".fourth1 .sec-3").css("height",dfhLenght);
$(".fourth1 .sec-31").css("margin-top",(dfhLenght-60)/2);
$(".fourth1 .sec-41").css("margin-top",(dfhLenght-90)/2);
$(".fourth1 .iorder .sec-2 .sec-21").eq(arrImgDFH.length-1).css("border-bottom","none");
$(".fourth1 .money").text(arrImgDFH.length*35.0 + 8);


//订单状态 已发货(YFH)
$(".second").append('<div class="second-sec fifth1 comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>已发货</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p><button class="sec-41-bott1">确认收货</button><button class="wuliu">查看物流</button></div></div></div>');

var arrImgYFH = ["../img/selfCenter/12.png","../img/selfCenter/12.png"];
for (var i = 0; i < arrImgYFH.length; i++) {
	$(".fifth1 .sec-2").append('<div class="sec-21 com"><img src="' + arrImgYFH[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}
var yfhLenght = getHeight(arrImgYFH);
$(".fifth1 .sec-3").css("height",yfhLenght);
$(".fifth1 .sec-31").css("margin-top",(yfhLenght-60)/2);
$(".fifth1 .sec-41").css("margin-top",(yfhLenght-120)/2);
$(".fifth1 .iorder .sec-2 .sec-21").eq(arrImgYFH.length-1).css("border-bottom","none");
$(".fifth1 .money").text(arrImgYFH.length*35.0 + 8);

//订单状态 已收货(YSH)
$(".second").append('<div class="second-sec sixth comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>已收货</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p><button class="sec-41-bott1">申请退款</button><button class="jiaoyi qpj">去评价</button><button class="jiaoyi">交易完成</button></div></div></div>');

var arrImgYSH = ["../img/selfCenter/12.png","../img/selfCenter/12.png"];
for (var i = 0; i < arrImgYSH.length; i++) {
	$(".sixth .sec-2").append('<div class="sec-21 com"><img src="' + arrImgYSH[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}
var yshLenght = getHeight(arrImgYSH);
$(".sixth .sec-3").css("height",yshLenght);
$(".sixth .sec-31").css("margin-top",(yshLenght-60)/2);
$(".sixth .sec-41").css("margin-top",(yshLenght-170)/2);
$(".sixth .iorder .sec-2 .sec-21").eq(arrImgYSH.length-1).css("border-bottom","none");
$(".sixth .money").text(arrImgYSH.length*35.0 + 8);

//订单状态 申请退款中 (SQTUZ)
$(".second").append('<div class="second-sec seventh1 comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>申请退款中</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p></div></div></div>');

var arrImgSQTUZ = ["../img/selfCenter/12.png","../img/selfCenter/12.png","../img/selfCenter/12.png"];

for (var i = 0; i < arrImgSQTUZ.length; i++) {
	$(".seventh1 .sec-2").append('<div class="sec-21 com"><img src="' + arrImgSQTUZ[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}

var sqtkzLenght = getHeight(arrImgSQTUZ);
$(".seventh1 .sec-3").css("height",sqtkzLenght);
$(".seventh1 .sec-31").css("margin-top",(sqtkzLenght-60)/2);
$(".seventh1 .sec-41").css("margin-top",(sqtkzLenght-60)/2);
$(".seventh1 .sec-21").eq(arrImgSQTUZ.length-1).css("border-bottom","none");
$(".seventh1 .money").text(arrImgSQTUZ.length*35.0 + 8);

//订单状态 退款中 (TUZ)
$(".second").append('<div class="second-sec eighth1 comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>退款中</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p></div></div></div>');

var arrImgTUZ = ["../img/selfCenter/12.png","../img/selfCenter/12.png","../img/selfCenter/12.png"];

for (var i = 0; i < arrImgTUZ.length; i++) {
	$(".eighth1 .sec-2").append('<div class="sec-21 com"><img src="' + arrImgTUZ[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}

var tkzLenght = getHeight(arrImgTUZ);
$(".eighth1 .sec-3").css("height",tkzLenght);
$(".eighth1 .sec-31").css("margin-top",(tkzLenght-60)/2);
$(".eighth1 .sec-41").css("margin-top",(tkzLenght-60)/2);
$(".eighth1 .sec-21").eq(arrImgTUZ.length-1).css("border-bottom","none");
$(".eighth1 .money").text(arrImgTUZ.length*35.0 + 8);

//订单状态  退款失败(TKSB)
$(".second").append('<div class="second-sec ninth1 comall"><div class="sec-1"><span>订单号：150319690000</span><span>下单日期：2017.04.09  18:06:06</span><span>爱果果水果店</span><span>订单状态：</span><span>退款失败</span></div><div class="sec-2 disp"></div><div class="sec-3 disp"><div class="sec-31"><p><span>店铺合计:</span><span class="money">¥105.0</span></p><p>(含运费:¥8.0)</p></div></div><div class="sec-4 disp"><div class="sec-41"><p class="lookdetail">查看详情</p><button>申请平台介入</button></div></div></div>');
var arrImgTKSB = ["../img/selfCenter/12.png","../img/selfCenter/12.png"];
for (var i = 0; i < arrImgTKSB.length; i++) {
	$(".ninth1 .sec-2").append('<div class="sec-21 com"><img src="' + arrImgTKSB[i] + '" alt="" /><span class="sec-21-sp1">云南昭通丑苹果</span><span class="sec-21-sp2">6个装</span><span class="sec-21-sp3">￥35.0 x 1</span></div>');
}
var tksbLenght = getHeight(arrImgTKSB);
$(".ninth1 .sec-3").css("height",tksbLenght);
$(".ninth1 .sec-31").css("margin-top",(tksbLenght-60)/2);
$(".ninth1 .sec-41").css("margin-top",(tksbLenght-90)/2);
$(".ninth1 .iorder .sec-2 .sec-21").eq(arrImgTKSB.length-1).css("border-bottom","none");
$(".ninth1 .money").text(arrImgTKSB.length*35.0 + 8);


//删除订单
var arrindex = [ ];
$(".delete").click(function() {
	$(this).parent().parent().parent().hide();
	index = $(".delete").index($(this));
	arrindex.push(index);
});

$(".huishou").click(function(){
	for (var i = 0; i < arrindex.length; i++) {
		$(".delete").eq(arrindex[i]).parent().parent().parent().show();
		$(".delete").eq(arrindex[i]).parent().parent().parent().siblings().hide();
		$(".second-fir").show();
	}

});
$(".iorder span").click(function() {
	$(this).addClass("sp");
	$(this).siblings().removeClass("sp");
	$(".huishou").removeClass("sp");
});

//动态获取高度的函数
function getHeight(arr){
	 var arrNum = arr.length;
//	 var listlength = $(".sec-21").eq(0).height();
	 var closeHeight = arrNum * 121;
	 return closeHeight;
}

$(".all").click(function(){
	$(".comall").show();
});
$(".guanbi").click(function(){
	$(".second1").show();
	$(".second1").siblings(".comall").hide();
});
$(".daifu").click(function(){
	$(".third1").show();
	$(".third1").siblings(".comall").hide();
});
$(".daifa").click(function(){
	$(".fourth1").show();
	$(".fourth1").siblings(".comall").hide();
});
$(".daishou").click(function(){
	$(".fifth1").show();
	$(".fifth1").siblings(".comall").hide();
});

$(".daiping").click(function(){
	$(".sixth").show();
	$(".sixth").siblings(".comall").hide();
});

$(".shouhou").click(function(){
	$(".seventh1").show();
	$(".seventh1").siblings(".comall").hide();
});

$(".qpj").click(function(){
	window.location.href = "#/ddpingjia";
});

$(".lookdetail").click(function(){
	window.location.href = "#/orderDetail";
});





