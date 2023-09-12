/*
	WEB 303 Assignment 1 - jQuery
	{Maksym Shatylo}
*/
$(document).ready(function () {
	$("input").change(function () {
		var total = 0
		var salary = $("#yearly-salary").val()
		var percent = $("#percent").val()
		total = salary * percent / 100
		console.log(total)
		$("#amount").text('$' + total.toFixed());
	});
});


