$(document).ready(function() {
    $("#myModal").modal('show');
  });
$(".navbar a").click(function(){
	$("body,html").animate({
		scrollTop:$("#"+$(this).data('value')).offset().top
	},1000)
})
$('.carousel').carousel({
  interval: 9000
});