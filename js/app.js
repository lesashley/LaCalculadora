
var screenVal = $("input:text");
$(function (){
  $("input:button").on("click",function() {
    var eachNumber = $(this).val();
    var currentScreen = screenVal.val();
    currentScreen += eachNumber;
    screenVal.val(currentScreen);
    if ($(this).val()=="C") {
      screenVal.val("");
    }
  })
  $("button").on("click",(e)=>{
    e.preventDefault();
    screenVal.val(eval(screenVal.val()));
  })
})
