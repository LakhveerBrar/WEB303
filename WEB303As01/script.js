/*
	WEB 303 Assignment 1 - jQuery
	{Lakhveer Singh}
*/
$(document).ready(function() {
	$("#yearly-salary, #percent").keyup(function(){

		let income = parseFloat($("#yearly-salary").val());

	    let percentage = parseFloat($("#percent").val());

		if (!isNaN(income) || !isNaN (percentage)){
			let money = (income * (percentage / 100)).toFixed(2);

			 $("#amount").text("$" + money);
		}
	});
});

