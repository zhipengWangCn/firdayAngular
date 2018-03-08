$('.moren img').click(function(){
	if ($(this).hasClass('dz')) {
		$(this).removeClass('dz');
		$(this).attr('src','../img/placeOder/check1.png');
	}else{
		$(this).addClass('dz');
		$(this).attr('src','../img/placeOder/check2.png');
	}
});
