/*
var base = {
	getId:function(id){
		return document.getElementById(id);

	},
	getName:function(name){
		return document.getElementsByName(name);

	},

	getTag:function(tag){
		return document.getElementsByTagName(tag);

	}


}

*/
var $=function(){
	return new Base();
}

function Base(){		
	//创建一个数组来保存获取的节点和节点数组
	this.elements=[];

	//获取ID节点，并且保留到elements数组中，并且返回一个Base对象
	this.getId=function(id){
		this.elements.push(document.getElementById(id));
		return this;
	};




	//获取元素节点
	this.getTag=function(tag){
		var tags=document.getElementsByTagName(tag);
		for (var i = 0; i < tags.length; i++) {
			this.elements.push(tags[i]);
		}

		return this;
	};



};

//为Base对象增添一个原型方法，CSS方法，此处必须要在原型上增加方法，不然无法渗入到function base（）的内部

Base.prototype.css = function(attr,value) {

	// body...
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style[attr]=value;
	};
	
	return this;
};


//设置innerHTML
Base.prototype.html=function(str){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].innerHTML=str;
	}
	return this;

}



//设置触发点击事件
Base.prototype.click= function(fn) {
	// body...
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onclick=fn;
	}
};