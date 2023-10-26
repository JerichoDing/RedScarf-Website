$(function(){

    // 获取年月日
    window.onload = function showTime(){
        var now=new Date(); 
        var year=now.getFullYear(); 
        var month=now.getMonth(); 
        var date=now.getDate(); 
        var day=now.getDay(); 
        var hours=now.getHours();
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
        var week;
        month=month+1;
        var arr_week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
        week=arr_week[day]; 
        document.getElementById("show").innerHTML=year+"年"+month+"月"+date+"日 "+week; 
        // var timeID=setTimeout(showTime,1000);
    }



});