$(".bm").change(function() {
    if(this.checked) {
        $(".bmlabel").removeClass().addClass('bmlabel glyphicon glyphicon-star');
    }
	else{
		$(".bmlabel").removeClass().addClass('bmlabel glyphicon glyphicon-star-empty');
	}
});