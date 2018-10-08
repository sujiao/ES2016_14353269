window.onload = function(){
	//获取元素
	var music = document.getElementById("music");
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var audio = document.getElementsByTagName("audio")[0];

//当音乐停止时，自动停止光盘旋转效果
	audio.addEventListener("ended", function(event) {
		music.setAttribute("class","");
	},false);

	//点击音乐图标，控制音乐播放效果
    music.addEventListener("touchstart",function() {   //touch
    	if(audio.paused) {
    		audio.play();
    		this.setAttribute("class","play");
    		//this.style.webkitanimationPlayState = "running";  //兼容性
    	}
        else {
        	audio.pause();
        	this.setAttribute("class","");
        	//this.style.webkitanimationPlayState = "paused";
        }
    },false);

	//点击屏幕，开始好运2016（跳到第二页，过渡到第三页）
    page1.addEventListener("touchstart",function() {   //touch
    	page1.style.display = "none";
    	page2.style.display = "block";
    	page3.style.display = "block";
		page3.style.top = "100%";

    	setTimeout(function(){
    		page2.setAttribute("class","page fadeOut");
    		page3.setAttribute("class","page fadeIn");
    	},4500)
    },false);

}
