var now = new Date();

function createtime(timeDate, times) {
	var grt = new Date("3/03/2017 00:00:00");
	now.setTime(now.getTime() + 250);
	days = (grt - now) / 1000 / 60 / 60 / 24;
	dnum = Math.floor(days);
	hours = (grt - now) / 1000 / 60 / 60 - (24 * dnum);
	hnum = Math.floor(hours);
	if(String(hnum).length == 1) {
		hnum = "0" + hnum;
	}
	minutes = (grt - now) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
	mnum = Math.floor(minutes);
	if(String(mnum).length == 1) {
		mnum = "0" + mnum;
	}
	seconds = (grt - now) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
	snum = Math.round(seconds);
	if(String(snum).length == 1) {
		snum = "0" + snum;
	}
	$('.timeDate').text(dnum + "天") ;
	$('.timehour').text(hnum) ;
	$('.timemiute').text(mnum) ;
	$('.timesecond').text(snum) ;
	
}

setInterval("createtime('timeDate','times')", 250);
$('.fresh .a2').mouseenter(function(){
	var index = $('.fresh .a2').index($(this));
	$(".spwrap span").eq(index).addClass("select1");
	$(".spwrap span").eq(index).siblings().removeClass("select1");
});


// 点击图片跳转到详情页面
$(".a2 img").click(function() {
	var index = $(".a2 img").index($(this));
	$(this).parent().parent().find("img").each(function(i) {
		if (i == index) {
			localStorage.setItem("firstImgSrc", $(this).attr("src"));
		} else{
			localStorage.setItem("ImgSrc" + i, $(this).attr("src"));
		}
	})
	
	
	window.location.href = "#/fridayDetail";
})
