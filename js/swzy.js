jQuery(document).ready(function(){ 
	jQuery(".navzsz li").mouseover(function(){			 
		jQuery(this).find(".new").show();
	
	});	
	jQuery(".navzsz li").mouseout(function(){
		jQuery(this).find(".new").hide();
	});
	jQuery(".Leftpro li").find("#zkxz").click(function(){
			
		var sclass = $(this).attr("class");
		
		if(sclass == "icon-plus-square"){
			$(this).addClass("icon-minus-square").removeClass("icon-plus-square");
		}else{
			$(this).addClass("icon-plus-square").removeClass("icon-minus-square");
		}
	
		 $(this).siblings(".ultwo").toggle(300);	

	});	
	/*jQuery(".but-zsapds").click(function(){	
		var model = $("#model").val();
		var contacts = $("#contacts").val();
		var country = $("#country").val();
		var phonenumber = $("#phonenumber").val();
		var companyname = $("#companyname").val();
		var email = $("#email").val();
		var remark = $("#remark").val();
		var verifica = $("#verifi").val();
		
		$.post("/web/inquirymail/verifica",{
			model:model,
			contacts:contacts,
			country:country,
			phonenumber:phonenumber,
			companyname:companyname,
			email:email,
			remark:remark,
			verifica:verifica
					
		},
		function(data,status){
			
			if(data == 0){
				alert("Verification code error!");
				return false;
			
			}else if(data == 2){
				alert("fail in send!");
				return false;
//				
			}else{
				alert("Send success!");
				window.location.reload();
			}
		});
		
	})	*/
		
	
	jQuery(".tabsa").find("li").click(function(){//产品图片图纸3D切换按钮
			$(".tabsa").find("li").attr("class","");
			$(this).attr("class","active");
		
	})
		var numxhlist=jQuery('.xhlist1').length;
	jQuery('.xhs').html(numxhlist);
	
})

function xunjia(proid){//
	$.post("/web/inquirymail/xunjxhao",{
		proid:proid
		
	},
	function(data,status){
		window.location.href="/cn/request?cur_name="+data
	});
	
	
}
function xunjia2(proname){//

		$("#model").val(proname);
		$('.intxuja').slideDown(200);
}
function xunjia3(proid){//
	$.post("/web/inquirymail/xunjxhao",{
		proid:proid
		
	},
	function(data,status){
		var cur_name=data;
		window.location.href='/web/request?cur_name='+cur_name;
	});
	
	
}
function dizs(s){//产品图片图纸3D切换
	$(".dizse3").hide();
	$(".dizse2").hide();
	$(".dizse1").hide();
	$("."+s).show();
}
//提交询价
function tjForm(){
	 var model=jQuery('#nums').val();
	if(model==''){			
			alert('请输入型号！');
			jQuery('#nums').focus();
			return false;
		}
	var quatity=jQuery('#quatity').val();
	if(quatity==''){			
			alert('请输入信号！');
			jQuery('#quatity').focus();
			return false;
		}
	var names=jQuery('#name').val()
	    if(names==''){			
			alert('请输入联系人');
			jQuery('#name').focus();
			return false;
		}
	var email=jQuery('#email').val()
		if(email==''){	
			alert('请输入邮箱');
			jQuery('#email').focus();
			return false;
		}
		else{
			 var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		    if(!filter.test(email)) {
			 alert('请输入正确的邮箱格式');
			 return false;
			 }
		}
	var telephone=jQuery('#telephone').val()
		if(telephone==''){	
			alert('请输入联系方式');
			jQuery('#telephone').focus();
			return false;
		}
	var contents=jQuery('#contents').val();
	if(contents==''){	
			alert('请输入内容');
			jQuery('#contents').focus();
			return false;
		}
	var froms=jQuery('#froms').val();
    var Company=jQuery('#Company').val();
	var Address=jQuery('#Address').val();
	var fax=jQuery('#fax').val();
		jQuery.ajax({
		url: "/cn/web/ajax/tjForm"
	   ,type: 'POST'
	  , context: "application/json;gb2312"
	  ,cache: false  
	  ,data: {"contacts":names,"email":email,"phonenumber":telephone,"quatity":quatity,"remark":contents,"froms":froms,"Company":Company,"Address":Address,"fax":fax,"model":model} 
	  , success: function(msg){
		// alert(msg)
			if(msg=="1"){
			alert("提交成功");
			return;
			}
			else{
				 alert("提交失败");
				 return false;
			}
	   }
	});	
}
function tjXj(){
	var contacts=jQuery('#name').val()
	    if(contacts==''){			
			alert('请输入联系人');
			jQuery('#name').focus();
			return false;
		}
	var email=jQuery('#email').val()
		if(email==''){	
			alert('请输入邮箱');
			jQuery('#email').focus();
			return false;
		}
		else{
			 var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		    if(!filter.test(email)) {
			 alert('请输入正确的邮箱格式');
			 return false;
			 }
		}
	var phonenumber=jQuery('#Phone').val()
		if(phonenumber==''){	
			alert('请输入联系方式');
			jQuery('#Phone').focus();
			return false;
		}
	var remark=jQuery('#Details').val();
	if(remark==''){	
			alert('请输入内容');
			jQuery('#Details').focus();
			return false;
		}
	var model=jQuery('#model').val();
	var froms=jQuery('#froms').val();
	var companyname=jQuery('#company_name').val();
	var verifi=jQuery('#verifi').val();
	var address=jQuery('#address').val();
	var countrys=jQuery("#countrys").val();
	var fax=jQuery("#fax").val();
	var title=jQuery("#title").val();
	if(verifi==''){	
			alert('Please input the Verification!');
			jQuery('#verifi').focus();
			return false;
	}
		jQuery.ajax({
		url: "/cn/web/ajax/tjXj"
	   ,type: 'POST'
	  , context: "application/json;gb2312"
	  ,cache: false  
  ,data: {"contacts":contacts,"email":email,"phonenumber":phonenumber,"remark":remark,"model":model,"froms":froms,"address":address,"companyname":companyname,"verifi":verifi,"title":title,"country":countrys,"fax":fax} 
	  , success: function(msg){
		  //alert(msg)
			if(msg=="1"){
			alert("提交成功");
			window.history.go(-1);
			return;
			}
			else if(msg=="2"){
				alert("验证码错误");
			return false;
			}
			else{
				 alert("提交失败");
				 return false;
			}
	   }
	});	
}
function checkbox(url,model){
	var ids = document.getElementsByName("chkItemGroup");              
                var flag =0;  var id="";            
                for(var i=0;i<ids.length;i++){
                    if(ids[i].checked){
                        flag++ ;
						id=id+ids[i].value+",";
                    }
                }
				if(model=="request"){
					if(flag<1 || flag>5){
					   alert("请选择1到5项！");
					} 
					else{
						window.location.href=url+"&id="+id;
					}
				}
				if(model=="compare"){
					if(flag<2 || flag>5){
					   alert("请选择2到5项！");
					} 
					else{
						window.location.href=url+"&id="+id;
					}
				}
}
function checkbox2(url,model){
	var ids = document.getElementsByName("chkItemGroup");              
                var flag =0;  var id="";            
                for(var i=0;i<ids.length;i++){
                    if(ids[i].checked){
                        flag++ ;
						id=id+ids[i].value+",";
                    }
                }
				if(model=="request"){
					if(flag<1 || flag>5){
					   alert("请选择1到5项！");
					} 
					else{
						window.location.href=url+"?classidnames="+id;
					}
				}
				if(model=="compare"){
					if(flag<2 || flag>5){
					   alert("请选择2到5项！");
					} 
					else{
						window.location.href=url+"&id="+id;
					}
				}
}
function checkform2(){
	var reemail=document.getElementById("reemail").value;
	if(reemail==""){
		alert("收件箱为空！");
		document.getElementById("reemail").focus();
		return false;
	}
	var email=document.getElementById("email").value;
	if(email==""){
		alert("Email为空！");
		document.getElementById("email").focus();
		return false;
	}
	
}
function checkform(){
	var name=document.getElementById("name").value;
	if(name==""){
		alert("联系人为空！");
		document.getElementById("name").focus();
		return false;
	}
	var email=document.getElementById("email").value;
	if(email==""){
		alert("Email为空！");
		document.getElementById("email").focus();
		return false;
	}
	var comments=document.getElementById("comments").value;
	if(comments==""){
		alert("内容为空！");
		document.getElementById("comments").focus();
		return false;
	}
	var vcode=document.getElementById("vCode").value;
	if(vcode==""){
		alert("验证码为空！");
		document.getElementById("vCode").focus();
		return false;
	}
	
}
function cleartop(){
	jQuery("select").val("no");
	jQuery('input:checkbox').attr("checked",false);
}

function selectAll(Obj)
{
 var collid = document.getElementById("checkall")
 var coll = document.getElementsByName(Obj)
 if (collid.checked){
   for(var i = 0; i < coll.length; i++)
    coll[i].checked = true;
 }else{
   for(var i = 0; i < coll.length; i++)
    coll[i].checked = false;
 }
}
	