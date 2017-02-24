 var MenuO = true;//控制弹幕数量
 var wW = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
 var hW = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
function myContext($this,e){
	if(!MenuO)
	{
		
	}else
	{
		MenuO = true;
		var bodyD = $this.parentNode;
	    var  divM = document.createElement("div");
	         divM.id = "menu";
	    var items = document.createElement("ul"),
	        item1 = document.createElement("li"),
	        item2 = document.createElement("li");
	    var itemTextNode1 = document.createTextNode("Menu Item 1"),
	        itemTextNode2 = document.createTextNode("Menu Item 2");
	    item1.appendChild(itemTextNode1);
	    item2.appendChild(itemTextNode2);
	
	    items.appendChild(item1);
	    items.appendChild(item2);
	    divM.appendChild(items);
	
	    bodyD.appendChild(divM);
	    /**
	    divM.className = "menu";
	    divM.style.width = "400px";
	    divM.style.height="140px";
	    **/
	    var posA = positionM(e);
	    
	    
	    
	    if(wW-posA[0]<divM.offsetWidth)//控制X
	    {
	    	//divM.style.left=(wW-divM.offsetWidth)+"px";
	    	divM.style.right = "0px";
	    }else{
	    	divM.style.left = posA[0]+"px";
	    }
	    if(hW-posA[1]<divM.offsetHeight)//控制Y
	    {
	    	//divM.style.top = (hW-divM.offsetHeight)+"px";
	    	divM.style.bottom = "0px"
	    }else{
	    	divM.style.top = posA[1]+"px";
	    }
	    
	    
	}
	
	
}

function positionM(e)
{
	var evt = e||window.event;
	var posX = evt.pageX||evt.clientX||evt.offsetX||evt.x;
	var posY = evt.pageY||evt.clientY||evt.offsetY||evt.y;
	return [posX,posY];
}

window.onload =function()
{
	//查看body的宽高

	document.getElementsByTagName("body")[0].style.height=hW+"px";
	document.getElementsByTagName("body")[0].style.width = "100%";
	/**
	var divB = document.getElementById("context");
	divB.oncontextmenu = function(){
		return false;
	}
  document.getElementsByTagName("body")[0].addEventListener("mousedown",function(event){
  	
  	    var btnNum = event.button;

  	 	var divM = document.getElementById("menu");
  	 	//查看目标元素
  	 	event = window.event||event;
  	 	var tmpObj = event.srcElement||ee.target;
  	   //alert(tmpObj);
  	 	
  	 	
  	    if(MenuO&&divM!=undefined){
  	    	//判断是否是在menu上点击
  	    	var pos = positionM(event);
  	    	if(divM.offsetLeft<pos[0]&&pos[0]<(divM.offsetLeft+402)&&divM.offsetTop<pos[1]&&pos[1]<(divM.offsetTop+142))
  	    	{
  	    		alert(pos);
  	    	}else{
  	    		document.body.removeChild(divM);

  	    	}
  	      }

  })
  **/
}


function mouseDown(event){
	var btnNum = event.button;

  	 	var divM = document.getElementById("menu");
  	 	//查看目标元素
  	 	event = window.event||event;
  	 	var tmpObj = event.srcElement||ee.target;
  	   //alert(tmpObj);
  	 	
  	 	
  	    if(MenuO&&divM!=undefined){
  	    	//判断是否是在menu上点击
  	    	var pos = positionM(event);
  	    	if(divM.offsetLeft<pos[0]&&pos[0]<(divM.offsetLeft+402)&&divM.offsetTop<pos[1]&&pos[1]<(divM.offsetTop+142))
  	    	{
  	    		//alert(pos);
  	    	}else{
  	    		document.body.removeChild(divM);

  	    	}
  	      }
}
