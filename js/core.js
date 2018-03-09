$(document).ready(function () {

	$('#calculate').click(function () {


		alert("Hello world 1");

		var val1 = $("#value1").val();
		var val2 = $("#value2").val();
		alert('Hello ' + val1 + " , " + val2);


		$.post("http://www.dalol.org/user_info_handler.php",
			{
				value1: val1,
				value2: val2
			}
			, function (data, status) {
				alert(data);
				alert("Hello world 2");
			});
	});


});