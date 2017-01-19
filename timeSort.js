
 function timeSort(){
	var now = new Date(); //当前日期
	var nowYear = now.getFullYear(); //当前年
	var nowMonth = now.getMonth() ; //当前月
	var nowDay = now.getDate(); //当前日
	var nowDayOfWeek = now.getDay(); //今天本周的第几天

	var getCurrentDate = new Date(nowYear, nowMonth, nowDay);
	 var getCurrentDate = formatDate(getCurrentDate);//今天
   //  console.log(getCurrentDate +'今天'); //当前日期
     var today ="'"+ getCurrentDate+"','"+getCurrentDate+"'";;

     var getWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
    var getWeekStartDate = formatDate(getWeekStartDate);
    var getWeekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
    var getWeekEndDate = formatDate(getWeekEndDate);
	//   console.log(getWeekStartDate+'本周,'+getWeekEndDate);//本周
	   var thisweek = "'"+getWeekStartDate+"','"+getWeekEndDate+"'";

	  var getUpWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek -7);
	  var getUpWeekStartDate = formatDate(getUpWeekStartDate);
	  var getUpWeekEndDate = new Date(nowYear, nowMonth, nowDay + (- nowDayOfWeek - 1));
	  var getUpWeekEndDate = formatDate(getUpWeekEndDate);
	//  console.log(getUpWeekStartDate+',上周'+getUpWeekEndDate); //上周
	  var lastweek = "'"+getUpWeekStartDate+"','"+getUpWeekEndDate+"'";

      var getMonthStartDate = new Date(nowYear, nowMonth, 1);
      var getMonthStartDate = formatDate(getMonthStartDate);
      var getMonthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
      var getMonthEndDate = formatDate(getMonthEndDate);
   //   console.log(getMonthStartDate+',本月'+getMonthEndDate);//本月
      var thismonth = "'"+getMonthStartDate+"','"+getMonthEndDate+"'";


       now.setMonth(now.getMonth()-1);
      var lastMonth = now.getMonth();
      if(lastMonth == 11){
      	
      	var getLastMonthStartDate = new Date(nowYear-1, lastMonth, 1);
      var getLastMonthStartDate = formatDate(getLastMonthStartDate);
      var getLastMonthEndDate = new Date(nowYear-1, lastMonth, getMonthDays(lastMonth));
      var getLastMonthEndDate = formatDate(getLastMonthEndDate);
   //  console.log(getLastMonthStartDate+'上月'+getLastMonthEndDate);
      }else{
      	var getLastMonthStartDate = new Date(nowYear, lastMonth, 1);
	      var getLastMonthStartDate = formatDate(getLastMonthStartDate);
	      var getLastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
	      var getLastMonthEndDate = formatDate(getLastMonthEndDate);
	  //   console.log(getLastMonthStartDate+'上月'+getLastMonthEndDate);
      }
      
      var lastmonth = "'"+getLastMonthStartDate+"','"+getLastMonthEndDate+"'";
      
                  
      now.setMonth(now.getMonth()+1);
      var nextMonth = now.getMonth()
      if(now.getMonth() == 11){
      	var getnextMonthStartDate = new Date(nowYear+1, 0, 1);
      	var getnextMonthEndDate = new Date(nowYear+1, 0, getMonthDays(0));
      }else{
      	var getnextMonthStartDate = new Date(nowYear, nextMonth+1, 1);
      	var getnextMonthEndDate = new Date(nowYear, nextMonth+1, getMonthDays(nextMonth+1));
      }
      var getnextMonthStartDate = formatDate(getnextMonthStartDate);
      var getnextMonthEndDate = formatDate(getnextMonthEndDate);
     // console.log(getnextMonthStartDate+'下月'+getnextMonthEndDate);
      var nextmonth = "'"+getnextMonthStartDate+"','"+getnextMonthEndDate+"'";

      var QuarterStartMonth = getQuarterStartMonth(nowMonth);
    
      var getQuarterStartDay = new Date(nowYear, QuarterStartMonth, 1);
       getQuarterStartDay = formatDate(getQuarterStartDay);
      var getQuarterEndtDay = new Date(nowYear, (QuarterStartMonth+2), getMonthDays(QuarterStartMonth+2));
       getQuarterEndtDay = formatDate(getQuarterEndtDay);
   //   console.log(getQuarterStartDay+'本季度'+getQuarterEndtDay);//本季度
      var thisquar = "'"+getQuarterStartDay+"','"+getQuarterEndtDay+"'";
      
		
       var lastQuarterStartMonth = getQuarterStartMonth(nowMonth-3);
       if(lastQuarterStartMonth ==9){
       	var getLastQuarterStartDay = new Date(nowYear-1, lastQuarterStartMonth, 1);
	      getLastQuarterStartDay = formatDate(getLastQuarterStartDay);
	      var getLastQuarterEndtDay = new Date(nowYear-1, (lastQuarterStartMonth+2), getMonthDays(lastQuarterStartMonth+2));
	       getLastQuarterEndtDay = formatDate(getLastQuarterEndtDay);
	  //   console.log(getLastQuarterStartDay+'上季度'+getLastQuarterEndtDay);//上季度
       }else{
       	var getLastQuarterStartDay = new Date(nowYear, lastQuarterStartMonth, 1);
	       getLastQuarterStartDay = formatDate(getLastQuarterStartDay);
	      var getLastQuarterEndtDay = new Date(nowYear, (lastQuarterStartMonth+2), getMonthDays(lastQuarterStartMonth+2));
	       getLastQuarterEndtDay = formatDate(getLastQuarterEndtDay);
	  //   console.log(getLastQuarterStartDay+'上季度'+getLastQuarterEndtDay);//上季度
       }
      
      var lastquar = "'"+getLastQuarterStartDay+"','"+getLastQuarterEndtDay+"'";

          //今年
          var thisYearStart = new Date(nowYear,0, 1);
              thisYearStart = formatDate(thisYearStart);
          var  thisYearEnd = new Date(nowYear,11, 31);
          	  thisYearEnd = formatDate(thisYearEnd);
        //  console.log(thisYearStart+'今年'+thisYearEnd); //今年
          var thisyear =  "'"+thisYearStart+"','"+thisYearEnd+"'";

          //上一年
          var lastYearStart = new Date(nowYear-1,0, 1);
              lastYearStart = formatDate(lastYearStart);
          var  lastYearEnd = new Date(nowYear-1,11, 31);
          		lastYearEnd = formatDate(lastYearEnd);
        //  console.log(lastYearStart+'上一年'+lastYearEnd); //今年
          var lastyear = "'"+lastYearStart+"','"+lastYearEnd+"'";
          
          //获得本季度的开始月份
          function getQuarterStartMonth(nowMonth){
	          var quarterStartMonth = 0;

	          if(nowMonth>=0 && nowMonth <= 2){
	          quarterStartMonth = 0;
	          }else if( nowMonth >= 3 && nowMonth <=5){
	          quarterStartMonth = 3;
	          }else if(nowMonth >=6 && nowMonth <= 8){
	          quarterStartMonth = 6;
	          }else{
	          quarterStartMonth = 9;
          }
          return quarterStartMonth;
          }
      	 //获得某月的天数
          function getMonthDays(mm){
          var monthStartDate = new Date(nowYear, mm, 1);
          var monthEndDate = new Date(nowYear, mm + 1, 1);
          var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);
          return days;
          }
        //当前日期
          function formatDate(date) {
	          var yy = date.getFullYear();
	          var mm = date.getMonth()+1;
	          var dd = date.getDate();
	          return (yy+"-"+adjust(mm) + "-" + adjust(dd));
            }

          function adjust(num){
            if(num<10){
            return "0"+num;
            }else{
            return ""+num;
            }
           }

          
          var timelist = ['',today,thisweek,lastweek,thismonth,lastmonth,nextmonth,thisquar,lastquar,thisyear,lastyear];
          //console.log();
          return timelist;
	}
 
 

export default timeSort;