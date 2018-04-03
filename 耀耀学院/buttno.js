var btn=document.getElementById('btn');
var user=document.getElementById('user');
btn.onclick=function(){
	var text=user.value;
	var span=document.getElementById('span')
	// alert(text);
	var getLen=function(text){
		if(text==null){
			return 0;
		}
		if(typeof text!="string"){
			text+="";
		}
		return text.replace(/[^\x00-\xff]/g,"01").length;
	}(text);
	// alert(getLen);
	
	if(getLen==0){
		span.innerHTML="名称不能为空！";
		span.style.color="#f00";
		user.style.borderColor="#f00";
	}else if(getLen<4){
		span.innerHTML="名称字符长度不能小于4！";
		span.style.color="#f00";
		user.style.borderColor="#f00";
	}else if(getLen>16){
		span.innerHTML="名称字符长度不能大于16！";
		span.style.color="#f00";
		user.style.borderColor="#f00";
	}else{
		span.innerHTML="名称格式正确";
		span.style.color="#3cf";
		user.style.borderColor="#3cf";

	}
}

