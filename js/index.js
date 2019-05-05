(function(){
	function socll(name,canshu){
		var fuji = document.getElementsByClassName(name)[0],jici=0,kon=[" "];      
		// var arr = document.getElementsByClassName("picture"); 
		var arr = fuji.firstElementChild.children;
		// var i=0;
		// var arr=[""];
		// for(var o=0;o<nod.length;o++){//遍历元素获取有用的对象
		// 	if(nod[o].nodeType==1){
		// 		arr[i]=nod[o];
		// 		i++;
		// 	}
		// }
		var jiaodian = document.getElementsByClassName(canshu.Dot);
		var rightarrow = document.getElementsByClassName(canshu.rightarrow)[0],
		leftarrow = document.getElementsByClassName(canshu.leftarrow)[0];
		var dian = "<div></div>";
		for(var i=0;i<arr.length;i++){
			if(i==0){
				jiaodian[0].innerHTML="<div class='current_yuan'></div>"
			}else{
				jiaodian[0].innerHTML +=dian;//设置圆点
			}
			
			// arr[i].style.zIndex = arr.length-i;//重新排序图片叠加循序
			// //获取已经设置好的样式添加到数组
			// var prop = arr[i].style[0];
			// var svlaue = arr[i].style.getPropertyValue(prop);
			// kon[i]=prop+":"+svlaue;
		}
		// 设置圆点  和箭头在最高层
		// jiaodian[0].style.zIndex  = 6;
		// rightarrow.style.zIndex =  6;
		// leftarrow.style.zIndex =  6;
		// jiaodian[0].childNodes[0].className="current_yuan";
		// -----------------------------------------------------------------
		// 播放方法
		function xia(){	
			if(jici<arr.length-1){
				jici++
				for(var r=0;r<arr.length;r++){
					arr[r].setAttribute("style",'opacity:0;transition: 1s;');
					jiaodian[0].childNodes[r].className=" ";
				}
				arr[jici].setAttribute("style",'opacity:1;transition: 1s;');
				jiaodian[0].childNodes[jici].className="current_yuan";
			}else {
				jici=0;
				for(var r=0;r<arr.length;r++){
					arr[r].setAttribute("style",'opacity:0;transition: 1s;');
					jiaodian[0].childNodes[r].className=" ";
				}
				arr[jici].setAttribute("style",'opacity:1;transition: 1s;');
				jiaodian[0].childNodes[jici].className="current_yuan";
			}
		}
		// 倒回播放方法
		function xiab(){	
			if(0<jici){
				jici--
				for(var r=0;r<arr.length;r++){
					arr[r].setAttribute("style",'opacity:0;transition: 1s;');
					jiaodian[0].childNodes[r].className=" ";
				}
				arr[jici].setAttribute("style",'opacity:1;transition: 1s;');
				jiaodian[0].childNodes[jici].className="current_yuan";
			}else {
				jici=arr.length-1;
				for(var r=0;r<arr.length;r++){
					arr[r].setAttribute("style",'opacity:0;transition: 1s;');
					jiaodian[0].childNodes[r].className=" ";
				}
				arr[jici].setAttribute("style",'opacity:1;transition: 1s;');
				jiaodian[0].childNodes[jici].className="current_yuan";
			}
		}
	var set = setInterval(xia,canshu.time);
		fuji.onmouseover=function(){//鼠标经过停止
			set = clearInterval(set);
		}
		fuji.onmouseout=function(){//鼠标移开继续播放
			set = setInterval(xia,canshu.time);
		}
		// 点击圆点切换图片
		for(var f= 0;f<jiaodian[0].childNodes.length;f++){
			jiaodian[0].childNodes[f].index = f;
			jiaodian[0].childNodes[f].onclick=function(){
				for(var j=0;j<jiaodian[0].childNodes.length;j++){
					jiaodian[0].childNodes[j].className=" ";
				}
				this.className="current_yuan";
				jici=this.index-1;
				xia()
			}
		}
		// 点击右边箭头
		if(rightarrow!=undefined&&leftarrow!=undefined){
			rightarrow.onclick=function(){
				xia();
			}
			// 点击左箭头
			leftarrow.onclick=function(){
				xiab()
			}
		}
	}
	this.socll = socll;
})();