$(function () {
    $('#fetch-button').click(function () {
        var apikey = "" // object to hold the api key
        apikey = "Bearer " + $('#api-key').val()
        $('#fetch-results').empty()
        console.log(apikey)
        //var body = JSON.stringify(data)
        $.ajax({
            url: "https://lms.griffith.edu.au:443/api/v1/courses/1184/modules",
            //contentType: "application/json",
            //"headers": {"accept": "application/json",
            //            "Access-Control-Allow-Origin":"*"
            //           },
            //data: body,
            Authorization: apikey,
            jsonp: 'OnJsonPLoad',
            dataType: "jsonp",            
            crossDomain: true,
            type: 'GET',
            success: function (response) {
                $('#fetch-results').val(response.data)
                console.log(data)
            }
        });
    });
});