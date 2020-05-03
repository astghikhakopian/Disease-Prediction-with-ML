$("document").ready(function(){
    $("#send").click(function(){
        var symptoms = $("#symptoms").val();
        $.ajax({
            url: "http://192.168.0.102:5001/",
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: { "symptoms": symptoms }
        }).done(function(data) {
            $("#disease").html(data['data']);
            // console.log(data);
        });
    });
});