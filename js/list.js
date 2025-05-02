$(function(){
	setAddCommaListInit()
});

/* --------------------------------------------------

addComma

-------------------------------------------------- */
function addListComma(target){
	var num = target.text();
	var s = String(num).split('.');
	var ret = String(s[0]).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	if (s.length > 1) {
			ret += '.' + s[1];
	}
	target.html(ret)
}
function setAddCommaListInit(){
	$('.mod_item_area .mod_item .price').each(function () {
		addListComma($(this));
	});
}