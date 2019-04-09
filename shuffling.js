$(function(){
	
		var index=1;
		//向右切换
		$("#prev").click(function(){
			$("#list").css({left:index*-1200+1200})
			if (index==1) {
				index=5;
			}
			index--
			move(index-1);

		});
		//向左切换
		$("#next").click(function(){
			index++
			$("#list").css({left:index*-1200});
			move(index-1);
			if (index==4) {
				index=0
			}
		});
		
		var time=setInterval(moveImg,1000);

		function move(index){
			$("#buttons span").css("background","#333");
			$("#buttons span")[index].style.background="orangered";
		}
		//移入暂停轮播，移出开始自动轮播
		$("#container #list").hover(function(){
			clearInterval(time);
		},function(){
			time=setInterval(moveImg,1000);
		});
		function moveImg(){
			index++
			$("#list").css({left:index*-1200});
			//$("img")[index].style.transition="all 2s ease .2";
			//$("img").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			//
           //$("img").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
			move(index-1);
			if (index==4) {
				index=0
			}
			
		}

		
	

		

		
		

		


	
});