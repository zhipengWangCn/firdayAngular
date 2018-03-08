var nored1 = true;
$(".yihang div").click(function() {
	if (nored1) {
		var index = $(".yihang").find("div").index($(this));
		for (var i = 0; i <= index; i++) {
			$(".yihang").find("div").eq(i).removeClass("backpic").addClass("backchange");
		}
		nored1 = false;
	} else {
		var index = $(".yihang").find("div").index($(this));
		for (var m = 0; m < 5; m++) {
			$(".yihang").find("div").eq(m).removeClass("backchange").addClass("backpic");
		}
		for (var k = 0; k < index; k++) {
			$(".yihang").find("div").eq(k).removeClass("backpic").addClass("backchange");
		}
		nored1 = true;
	}

});

var nored2 = true;
$(".erhang div").click(function() {
	if (nored2) {
		var index11 = $(".erhang").find("div").index($(this));
		for (var i = 0; i <= index11; i++) {
			$(".erhang").find("div").eq(i).removeClass("backpic").addClass("backchange");
		}
		nored2 = false;
	} else {
		var index22 = $(".erhang").find("div").index($(this));
		for (var m = 0; m < 5; m++) {
			$(".erhang").find("div").eq(m).removeClass("backchange").addClass("backpic");
		}
		for (var k = 0; k < index22; k++) {
			$(".erhang").find("div").eq(k).removeClass("backpic").addClass("backchange");
		}
		nored2 = true;
	}
});

var nored3 = true;
$(".fuwubufen div").click(function() {
	if (nored3) {
		index1 = $(".fuwubufen").find("div").index($(this));
		if (index1 < 5) {
			for (var i = 0; i <= index1; i++) {
				$(".fuwubufen").find("div").eq(i).removeClass("backpic2").addClass("backchange2");
			}
		} else {
			for (var i = 5; i <= index1; i++) {
				$(".fuwubufen").find("div").eq(i).removeClass("backpic2").addClass("backchange2");
			}
		}
		nored3 = false;
	} else {
		index2 = $(".fuwubufen").find("div").index($(this));
		if (index2 < 5) {
			for (var n = 0; n < 5; n++) {
				$(".fuwubufen").find("div").eq(n).removeClass("backchange2").addClass("backpic2");
			}
			for (var j = 0; j < index2; j++) {
				$(".fuwubufen").find("div").eq(j).removeClass("backpic2").addClass("backchange2");
			}
		} else {
			for (var n = 5; n < 10; n++) {
				$(".fuwubufen").find("div").eq(n).removeClass("backchange2").addClass("backpic2");
			}
			for (var j = 5; j < index2; j++) {
				$(".fuwubufen").find("div").eq(j).removeClass("backpic2").addClass("backchange2");
			}
		}
		nored3 = true;
	}
});

$(".ddpingjia .tjpj").click(function(){
	window.location.href = "#/iorder";
});



