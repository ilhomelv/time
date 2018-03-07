//get current time and display on page
//window.onload = function(){
var time = function(){
//add zero to the front of digit if the digit is less than 10
  function addZero(i){
        if(i<10) {
              i = "0" + i;
        } return i;
  }

//display time
  function displayTime(){
      var today = new Date();
      var hr = addZero(today.getHours());
      var min = addZero(today.getMinutes());
      var sec = addZero(today.getSeconds());
      document.getElementById('clock').innerHTML = hr + ":" + min +  ":" + sec;
  }
//updates every minut
  setInterval( displayTime  , 1000);
};
time();
