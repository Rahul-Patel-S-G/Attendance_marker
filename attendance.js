$(document).ready(function(){


	
	var jsonArray = [
    { "id": "#12345", "name": "Rahul Patel S G" ,"from": "06:00","to": "07:00","left":88,"width":44,"status":"present" },
    { "id": "#12346", "name": "Riyaz" ,"from": "06:00","to": "07:00","left":0,"width":66,"status":"present" },
    { "id": "#12347", "name": "Bhargav " ,"from": "06:00","to": "07:00","left":66,"width":66,"status":"present" },
    { "id": "#12347", "name": "Naveen " ,"from": "06:00","to": "07:00","left":00,"width":820,"status":"absent" },
    { "id": "#12347", "name": "Saurav" ,"from": "06:00","to": "07:00","left":500,"width":44,"status":"present" },
    { "id": "#12348", "name": "Subin" ,"from": "06:00","to": "07:00","left":88,"width":44,"status":"present" }
 
];

var len=Object.keys(jsonArray).length;
if(len<22)
{
len=22;
}
for(var j=0;j<len+4;j++){
var class_name= "line"+j;
	$(".attendance-line").append("<div class='col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none "+class_name+"'></div>");
	$("."+class_name+"").append("<span class='first-hour' >&nbsp;</span>");
	for(var i=0;i<18;i++)
	$("."+class_name+"").append("<span class='half-hour'>&nbsp;</span><span class='one-hour'>&nbsp;</span>");
	$("."+class_name+"").append("<span class='half-hour'>&nbsp;</span>");
}
$.each(jsonArray,function(i,value){
	if(value.status=="present"){
		
		$(".mark-attendance").append('<div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none "><div style="width:'+value.width+'px;margin-left:'+value.left+'px" class="fill-attendance"></div>	</div><div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none ">&nbsp;</div>');
		
		$(".mark-name").append('<div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none "><div class="col-md-2 col-sm-2 col-lg-2 col-xs-2 font-black  font-14 customer-id">'+value.id+'</div><div class="col-md-2 col-sm-2 col-lg-2 col-xs-2 font-black  font-14 " style="width:12%;padding:0px;">'+value.name+'<div></div><div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none attendance-gap" >&nbsp;</div>');
		
		}
	else if(value.status=="absent"){
	$(".mark-attendance").append('<div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none "><div style="width:'+value.width+'px;margin-left:'+value.left+'px" class="fill-attendance-absent"></div>	</div><div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none ">&nbsp;</div>');
	
		$(".mark-name").append('<div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none "><div class="col-md-2 col-sm-2 col-lg-2 col-xs-2 font-black  font-14 customer-id">'+value.id+'</div><div class="col-md-2 col-sm-2 col-lg-2 col-xs-2 font-black  font-14 " style="width:12%;padding:0px;">'+value.name+'<div></div><div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 padding-none attendance-gap" >&nbsp;</div>');
	}
	
});

});