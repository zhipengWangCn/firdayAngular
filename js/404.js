$('.head').hide();
$('.foot').hide();
$('.pic4 span').eq(0).click(function(){
	history.go(-1);
});
$('.pic4 span').eq(1).click(function(){
	alert('ww');
	window.location.href = "#/first";
});