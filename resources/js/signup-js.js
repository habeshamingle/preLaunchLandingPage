'use strict';

$('#_button_join').click(function () {

//    var gender = $("#_gender").val();
//    var lookingFor = $("#_looking_for").val();
    var username = $("#_username").val();
    var email = $("#_email").val();
    var password = $("#_password").val();
    
    console.log(email);

    $.ajax({
        url: 'http://www.dalol.org/habesha-mingle/register/',
        type: 'post',
        cache: false,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: 'json', // this returns JSON
        data: {
            userName: username,
            email: email,
            password: password
        },
        success: function (response) {
            
            alert(response.status);
            //$("#result").text(response.response);


            console.log(response);
            
            if(response.code === 1) {
                window.location.href = "http://habeshamingle.com/profile.html"; 
            }
            
            //alert(response);
        },
        error: function (xhr, textStatus, error) {
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
            alert(error);
        }
    });

});

$("#_username").keyup(function (event) {
    //console.log($(this).val());
});