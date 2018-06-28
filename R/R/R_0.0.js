
//常用函数开始

//时间函数开始
    
function getDate(date) {
	var dates = new Date(date);
	dateMonth = "-";
	dateDate = "-";
	if((dates.getMonth() + 1) < 9) {
		dateMonth = "-0";
	}
	if(dates.getDate() < 9) {
		dateDate = "-0";
	}
	return dates.getFullYear() + dateMonth + (dates.getMonth() + 1) + dateDate + dates.getDate();
}

//时间函数结束

// var R = {
// 	getNowDate : function (type) {
		
// 	}
// }
    
//限制数字输入函数开始
    
function lmt_num(input){
	$(input).keyup(function() { //只能输入数字
		var pagetingtext = $(this).val();
		$(this).val(pagetingtext.replace(/\D|^0/g, ''));
	}).bind("paste", function() {
		var pagetingtext = $(this).val();
		$(this).val(pagetingtext.replace(/\D|^0/g, ''));
	}).css("ime-mode", "disabled");
}

//限制数字输入函数结束
    
//限制输入长度函数开始

function lmt_l(input,l){
	$(input).on("input propertychange",function(){
	    if($(this).val().length>l){
	        $(this).val($(this).val().slice(0,l));	
	    }
    });
}
    
//限制输入长度函数结束
    
//身份证判断开始
    
function est_idcard(input){
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if(reg.test($(input).val()) === false){
       alert("身份证输入不合法");  
       return  false;  
    }else{
        return true;	
    } 
	
}

//身份证判断结束
    
//电话号码判断开始
    
function est_phone(input){
	var reg= /^1\d{10}$/;
	if(reg.test($(input).val())==false){
	    alert("电话号码输入不合法");
	    return false;
	}else{
        return true;	
    }
	
}

//电话号码判断结束
    
//邮箱判断开始

function est_email(input){
    var reg= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if(reg.test($(input).val())==false){
    	alert("邮箱输入不合法");
    	return false;
    }else{
        return true;	
    }
}

//邮箱判断结束
    
//判断是否为空开始
    
function est_empty(input){
	if($(input).val()==null||$(input).val()==""){
	    return false;	
	}else{
	    return true;	
	}
	
}

//判断是否为空结束
    
//常用函数结束


//常用函数：事件函数，限制数字输入函数，限制输入长度函数，身份证判断函数,电话号码判断函数，邮箱判断函数，判断是否为空函数
