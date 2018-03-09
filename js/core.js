$(document).ready(function () {

	$('#calculate').click(function () {
		var val1 = $("#value1").val();
		var val2 = $("#value2").val();
		//alert('Hello ' + val1 + " , " + val2);


		$.post("http://www.dalol.org/user_info_handler.php",
			{
				value1: val1,
				value2: val2
			}
			, function (data, status) {
				alert(data);
			});
	});


});