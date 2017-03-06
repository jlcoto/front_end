

var clicks = 0;
$('#my-elem').click(function(e) {
	clicks += 1;
  	$("#number").val(clicks);
});