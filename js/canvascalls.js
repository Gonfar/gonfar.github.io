$(function () {
    $('#fetch-button').click(function () {
        var data = {} // object to hold the user input data
        data['access_token'] = $('#api-key').val()
        $('#fetch-results').empty()
        console.log(data)
        var body = JSON.stringify(data)
        $.ajax({
            url: "https://lms.griffith.edu.au:443/api/v1/courses/1184/modules",
            contentType: "application/json",
            data: body,
            dataType: "json",
            type: 'GET',
            success: function (response) {
                $('#fetch-results').val(response.data)
            }
        });
    });
});