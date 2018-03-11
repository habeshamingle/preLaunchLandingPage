$('#calculate').click(function () {

		//alert("Hello world 1");

		var val1 = $("#value1").val();
		var val2 = $("#value2").val();

		//alert('Hello ' + val1 + " , " + val2);

		$.ajax({
			url: 'http://www.dalol.org/user_info_handler.php',
			type: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			dataType: 'json', // this returns JSON
			data: {
				value1: val1,
				value2: val2
			},
			success: function(response) {

				$("#result").text(response.response);
				

				console.log(response);
				//alert(response);
			},
			error: function(xhr, textStatus, error){
				console.log(xhr.statusText);
				console.log(textStatus);
				console.log(error);
			}
		});


		// $.post("http://www.dalol.org/user_info_handler.php",
		// 	{
		// 		value1: val1,
		// 		value2: val2
		// 	}
		// 	, function (data, status) {
		// 		alert(data);
		// 		alert("Hello world 2");
		// 	});


});