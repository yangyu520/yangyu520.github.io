function getData(url){
	var data="";
	$.ajax({
		url:url,
		type:"get",
		async:false,
		dataType:"json",
		success:(res)=>{
			data=res;
		}
	})
	return data;
}

function ItemDatas(arr){
	arr.forEach(function(val,index){
			var lis=`<li style="padding:10px 0;position:relative;cursor:pointer"><img width="153" height="206" src="${val.poster}" />
				<span style="font-size:18px;position:absolute;top:20px;left:160px;">【${val.city}】${val.title}</span>
				<span style="font-size:13px;position:absolute;top:60px;left:170px;">${val.address}</span>
				<span style="font-size:13px;position:absolute;top:85px;left:170px;">${val.releasetime.toString().substring(0,10)}</span>
				<span style="font-size:14px;position:absolute;top:110px;left:170px;font-weight:700;color:red;">${val.price.toString().replace("￥","")}</span>
			</li>`
			$("#origin").append(lis);
			
			
	});

		
	arr.forEach(function(val,index){
				var lis=`<li style="display: none;margin:0 20px;float:left;position:relative;height:344px;cursor:pointer"><img width="180" height="245" src="${val.poster}"  />
				<span style="position:absolute;font-size:12px">【${val.city}】${val.title}</span>
				<span style="font-size:12px;position:absolute;top:280px;">${val.releasetime.toString().substring(0,10)}</span>
				<span style="font-size:14px;position:absolute;top:300px;font-weight:700;color:red;">${val.price.toString().replace("￥","")}</span>
				</li>`
				$("#newStyle").append(lis);
			// 	function getType(did){
			// 	console.log(did);
			// 			//通过did确定跳转到商品详情页
			// 	location.href="productDetail.html?cid="+did;
			// }
	});
	
	
}
function iclick(){
	$('#one').on('click',function () {
			$("#origin>li").css("display","none");
			$("#newStyle>li").css("display","block");
			$("#two").css("background","none");
			$("#one").css("background","#ed0a75");
			$("#two").css("background-position","10px 10px");
			
		});
		$('#two').on('click',function () {
			$("#origin>li").css("display","block");
			$("#newStyle>li").css("display","none");
			$("#one").css("background","none");
			$("#two").css("background","#ed0a75");
			$("#one").css("background-position","-125px 10px");
		});
}
function getKeyword(){
		var keyword=$("#keyword").val().trim();
		if (keyword=="") {
			alert("请输入搜索关键字")
		}else{
			location.href="typeItems.html?keyword="+keyword;
		}
	}