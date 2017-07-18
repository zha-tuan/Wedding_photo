window.onload=function(){
	function findid(id){
		return document.getElementById(id);
	}
//	最新样片部分
    var jsonnewsample=[{"photo":"img/main_style1.png","writingone":"笑魇绵绵-大理","writingtwo":"Travel wedding photograghy","date":"2016-6-03"},
    {"photo":"img/main_style2.png","writingone":"时光醉影-丽江","writingtwo":"Travel wedding photograghy","date":"2016-9-12"},
    {"photo":"img/main_style3.png","writingone":"大象寺庙-普吉岛","writingtwo":"Travel wedding photograghy","date":"2016-8-05"},
    {"photo":"img/main_style4.png","writingone":"古城风光-丽江","writingtwo":"Travel wedding photograghy","date":"2016-6-03"},
    {"photo":"img/main_style5.png","writingone":"爱情圣地-西藏","writingtwo":"Travel wedding photograghy","date":"2016-6-03"},
    {"photo":"img/main_style6.png","writingone":"清新耳语-三亚","writingtwo":"Travel wedding photograghy","date":"2016-6-03"},
    {"photo":"img/main_style7.png","writingone":"清新韩风-济州岛","writingtwo":"Travel wedding photograghy","date":"2016-6-03"},
    {"photo":"img/main_style8.png","writingone":"异国香颂-马尔代夫","writingtwo":"Travel wedding photograghy","date":"2016-6-03"}];
	var LFY_sub_newsample=findid('LFY_sub_newsample');
	var ul=LFY_sub_newsample.children[4];
	for (var i=0;i<8;i++) {
		var li=document.createElement('li');
		ul.appendChild(li);
		
		var row=i%4;
		var col=parseInt(i/4)
		li.style.left=row*303+"px";
		li.style.top=col*472+"px";
		
		var a=document.createElement('a');
		a.href="#";
		li.appendChild(a);
		
		var img=document.createElement('img');
		img.src=jsonnewsample[i].photo;
		a.appendChild(img);
		
		var p=document.createElement('p');
		p.innerHTML=jsonnewsample[i].writingone;
		a.appendChild(p);
		
		var span=document.createElement('span');
		span.innerHTML=jsonnewsample[i].writingtwo;
		a.appendChild(span);
		
		var h3=document.createElement('h3');
		h3.innerHTML=jsonnewsample[i].date;
		a.appendChild(h3);
		
	}
	
}
