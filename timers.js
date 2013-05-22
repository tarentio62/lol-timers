$(document).ready(function() {
  $("#Nashor").click(function () {
  var inter = setInterval( function ()
  {
  var n = parseInt($("#lblNashor").text());
	if (n > 1){
	n--;
	$("#lblNashor").text(n);
	}
	else
	{
        navigator.notification.beep(3);
		navigator.notification.vibrate(2000);
	clearInterval(inter);
	} 
},1000);
});
});





