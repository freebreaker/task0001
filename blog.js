
/*
window.onload=function(){
	alert(document.getElementById('box').innerHTML);
	alert(document.getElementsByName('sex')[0].value);
}


window.onload=function(){
	alert(base.$('box').innerHTML);
	alert(base.$$('sex')[0].value);
	alert(base.$$$('p')[0].innerHTML)
};


//alert(base.getId('box').innerHTML);
	base.getId('box').css('color','red').css('background','black').html('pox').click(function(){
		alert('a');
	});


	为了添加css功能，要将base.getId('box')返回一个base对象，再在base对象中添加一个css方法，HTML方法。click方法。


	

*/

window.onload=function(){
	
	$().getId('box').css('backgroundColor','black');
	
	$().getTag('p').html('前端').css('color','red').css('background','yellow');
	$().getTag('p').click(function() {
		alert('a');
	});
}; 



