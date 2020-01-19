 /*获取span下标*/
var aA1Span = document.getElementById('Type_Class_A').getElementsByTagName('span');
var aB1Span = document.getElementById('Type_Class_B_Trailer').getElementsByTagName('span');
var aB2Span = document.getElementById('Type_Class_B_Enterprise').getElementsByTagName('span');
var aB3Span = document.getElementById('Type_Class_B_Program').getElementsByTagName('span');
var aB4Span = document.getElementById('Type_Class_B_Curriculum').getElementsByTagName('span');
var aB5Span = document.getElementById('Type_Class_B_Game').getElementsByTagName('span');
var aSSpan  = document.getElementById('Shot').getElementsByTagName('span');
var aDSpan  = document.getElementById('Dubbing').getElementsByTagName('span');
var aTSpan  = document.getElementById('Time').getElementsByTagName('span');

/*返回当前点击span的父节点*/
var aSpan = document.getElementsByTagName('span');

/*改变内容状态时，调用计算价格函数*/
var bA1State  = document.getElementById('Type_Class_A');
var bB1State  = document.getElementById('Type_Class_B_Trailer');
var bB2State  = document.getElementById('Type_Class_B_Enterprise');
var bB3State  = document.getElementById('Type_Class_B_Program');
var bB4State  = document.getElementById('Type_Class_B_Curriculum');
var bB5State  = document.getElementById('Type_Class_B_Game');
var bSState   = document.getElementById('Shot');
var bDState   = document.getElementById('Dubbing');	
var bTState   = document.getElementById('Time');	
var bPOPState = document.getElementById('price_Original_Price');
var bPDState  = document.getElementById('price_Discount');

var phone = document.getElementById("Input_Phone");

var os_A = 0;
var os_B = 'null';
var os_S = 0;
var os_D = 0;
var os_T = 0;

var price_sum = 0;
var price_sum_discount = 0;

/*初始选中状态*/
aA1Span[0].className = 'on';
aSSpan[0].className = 'on';
aB1Span[0].className = '';

/*初始选中状态*/
$("#Type_Class_B_Trailer").show();
$("#Type_Class_B_Enterprise").hide();
$("#Type_Class_B_Program").hide();
$("#Type_Class_B_Curriculum").hide();
$("#Type_Class_B_Game").hide();	

function Button_Phone_Information(){

	/*Server酱 两个参数*/
	var text = 0;
	var desp = 0;

	if (phone.value == "")
		alert('填写手机号，立享8.8折限时优惠！')
	if(!(/^1[3456789]\d{9}$/.test(phone.value))){
		alert("手机号码有误，请重填");  
	}
	else{
		var xhr = new XMLHttpRequest () ;
		xhr.onreadystatechange=function(){}
		xhr.open('post','https://sc.ftqq.com/SCU45731Tfbd23a5b5e4781768d128c5e6d4ea1265c7e0631d457e.send',true);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		
		var text = 'text=' + '【推送通知】 有新的客户需求' + '&';
		var desp = 'desp=' + '### 客户需求：\n' + 
				   '- 类型：' + os_A + '\n' +
				   '- 细分：' + os_B + '\n' +
				   '- 拍摄：' + os_S + '\n' +
				   '- 配音：' + os_D + '字' + '\n' +
				   '- 时长：' + os_T + '秒' + '\n' +
				   '- 系统报价：' + '**' + price_sum.toFixed(2) + '元' + '**' + '\n' +
				   '- 折扣报价：' + '**' + price_sum_discount.toFixed(2) + '元' + '**' + '\n' +
				   '- 客户联系方式：' + '**' + phone.value  + '**' + '\n\n' +
				   '*请尽快联系客户对接需求~~*';

		var data = text + desp;
		
		xhr.send(data);
		alert('视频需求信息已发送，一个工作日内电话联系您。\n如需加急，可致电：13439023158')
	}
}

for (var i = 0; i < aSpan.length; i++)
{
	/*span的点击事件*/
	aSpan[i].onclick = function()
	{
		var siblings = this.parentNode.children;
		
		/*当前点击的font有几个span*/
		for (var j = 0; j < siblings.length; j++)
		{
			siblings[j].className = '';
		}

		if ( this.parentNode == bB1State  || 
			 this.parentNode == bB2State  || 
			 this.parentNode == bB3State  || 					 
			 this.parentNode == bB4State  || 
			 this.parentNode == bB5State)
		{
			for (var k1 = 0; k1 < aB1Span.length; k1++)
				aB1Span[k1].className = '';
			for (var k2 = 0; k2 < aB2Span.length; k2++)
				aB2Span[k2].className = '';
			for (var k3 = 0; k3 < aB3Span.length; k3++)
				aB3Span[k3].className = '';
			for (var k4 = 0; k4 < aB4Span.length; k4++)
				aB4Span[k4].className = '';
			for (var k5 = 0; k5 < aB5Span.length; k5++)
				aB5Span[k5].className = '';
			price();
		}

		/*将当前点击的span标记为选中状态*/
		this.className = 'on';

		/*有任何点击事件，都调用计算价格函数*/
		if ( this.parentNode == bA1State  ||
			 this.parentNode == bSState   || 
			 this.parentNode == bDState   || 
			 this.parentNode == bTState   || 
			 this.parentNode == bPOPState || 
			 this.parentNode == bPDState)
		{
			price();
		}
	};
};

function price(){

	var price_aA1Span = 0; 
	var price_aSSpan = 0;

	var price1 = 0;
	var price2 = 0;

	//var x = document.getElementById("myRange").value;

	var dInput = document.getElementById("Input_Dubbing");
	var dInput_value = 0;
	var tInput = document.getElementById("Input_Time");

	os_T = tInput.value;

	for (var i = 0; i < aA1Span.length; i++)
	{
		if (aA1Span[i].className == 'on')
		{
			switch ( i )
			{
				case 0:
					$("#Type_Class_B_Trailer").show();
						$("#Type_Class_B_Enterprise").hide();
					$("#Type_Class_B_Program").hide();
						$("#Type_Class_B_Curriculum").hide();
						$("#Type_Class_B_Game").hide();
					price_aA1Span = 20;	
					os_A = '宣传片';						
					break;
				case 1:
					$("#Type_Class_B_Trailer").hide();
						$("#Type_Class_B_Enterprise").show();
					$("#Type_Class_B_Program").hide();
						$("#Type_Class_B_Curriculum").hide();
						$("#Type_Class_B_Game").hide();	
						price_aA1Span = 5;
						os_A = '企业';	
					break;
				case 2:
					$("#Type_Class_B_Trailer").hide();
						$("#Type_Class_B_Enterprise").hide();
					$("#Type_Class_B_Program").show();
						$("#Type_Class_B_Curriculum").hide();
						$("#Type_Class_B_Game").hide();	
					price_aA1Span = 35;
					os_A = '节目';	
					break;
				case 3:
					$("#Type_Class_B_Trailer").hide();
						$("#Type_Class_B_Enterprise").hide();
					$("#Type_Class_B_Program").hide();
						$("#Type_Class_B_Curriculum").show();
						$("#Type_Class_B_Game").hide();	
					price_aA1Span = 1;
					os_A = '课程';	
					break;
				case 4:
					$("#Type_Class_B_Trailer").hide();
						$("#Type_Class_B_Enterprise").hide();
					$("#Type_Class_B_Program").hide();
						$("#Type_Class_B_Curriculum").hide();
						$("#Type_Class_B_Game").show();	
					price_aA1Span = 1;
					os_A = '游戏';	
					break;
			}
		};
	};

	for (var i = 0; i < aB1Span.length; i++)
	{
		if (aB1Span[i].className == 'on')
		{
			switch ( i )
			{
				case 0:	
					os_B = '活动宣传片';		
					break;
				case 1:
						os_B = '产品宣传片';	
					break;
				case 2:
					os_B = '企业宣传片';	
					break;
				case 3:
					os_B = '概念宣传片';	
					break;
			}
		};
	};

	for (var i = 0; i < aB2Span.length; i++)
	{
		if (aB2Span[i].className == 'on')
		{
			switch ( i )
			{
				case 0:	
					os_B = '年会';		
					break;
				case 1:
						os_B = '团建';	
					break;
				case 2:
					os_B = '展会';	
					break;
				case 3:
					os_B = '营销活动';	
					break;
			}
		};
	};

	for (var i = 0; i < aB3Span.length; i++)
	{
		if (aB3Span[i].className == 'on')
		{
			switch ( i )
			{
				case 0:	
					os_B = 'vlog';		
					break;
				case 1:
						os_B = '专题片';	
					break;
			}
		};
	};

	for (var i = 0; i < aB4Span.length; i++)
	{
		if (aB4Span[i].className == 'on')
		{
			switch ( i )
			{
				case 0:	
					os_B = '录屏课';		
					break;
				case 1:
						os_B = '直播课';	
					break;
				case 2:
					os_B = '录制课';	
					break;
			}
		};
	};

	for (var i = 0; i < aB5Span.length; i++)
	{
		if (aB5Span[i].className == 'on')
		{
			switch ( i )
			{
				case 0:	
					os_B = 'QQ飞车';		
					break;
				case 1:
						os_B = '王者荣耀';	
					break;
				case 2:
					os_B = '绝地求生';	
					break;
				case 3:
					os_B = '英雄联盟';	
					break;
			}
		};
	};

	for (var i=0;i<aSSpan.length;i++ )
	{
		if ( aSSpan[i].className == 'on' )
		{
			switch ( i )
			{
				case 0:
					price_aSSpan = 0;
					os_S = '无'
					break;
				case 1:
					price_aSSpan = 800;
					os_S = '拍摄'
					break;
			}
		}
	};
	/*
	for (var i=0;i<rSpan.length;i++ )
	{
		if ( rSpan[i].className == 'on' )
		{
			switch ( i )
			{
				case 0:
					price1 = 5;
					break;
				case 1:
					price1 = 10;
					break;
				case 2:
					price1 = 15;
					break;
			}
		}
	};
	for (var i=0;i<bSpan.length;i++ )
	{
		if ( bSpan[i].className == 'on' )
		{
			switch ( i )
			{
				case 0:
					price2 = 1;
					break;
				case 1:
					price2 = 2;
					break;
			}
		}
	};
	*/
	//document.getElementById("demo").innerHTML = x;

	if (dInput.value > 0) 
	{
		dInput_value = (parseInt(dInput.value / 100) + 1) * 30;
		os_D = dInput.value;
	} else {
		dInput_value = 0;
		os_D = dInput.value;
	}

	price_sum = parseFloat((price_aA1Span * tInput.value) + price_aSSpan + dInput_value); 
	price_sum_discount = parseFloat(price_sum * 0.88);

	price_Original_Price.innerHTML = price_sum.toFixed(2);
	price_Discount.innerHTML = price_sum_discount.toFixed(2);
};