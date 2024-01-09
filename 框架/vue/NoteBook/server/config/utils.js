
const formattedDate = (currentDate) => {
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // 月份是从0开始的，所以要加1
  var day = currentDate.getDate();
  if(month < 10){
    month = "0" + month;
  }
  if(day < 10){
    day = "0" + day;
  }
  return year + "年" + month + "月" + day + "日";
};

//向外抛出
module.exports = {
  formattedDate
}



