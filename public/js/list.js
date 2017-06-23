$(function() {
    // $.getJSON('/js/employee.json', function(data) {
    // 	$('#editor').val($.toJSON(data));
    // });
    $('#saveBtn').on('click', function(event) {
        $.ajax({
            type: "POST",
            url: '/operate/add',
            data: { id: 2001, name: "ha员工A" },
            success: function(data) {
                if (data.success) {
                    console.log("save success....")
                }
            }
        });
    });
    // $('#findBtn').on('click',function(event){
    //     $.ajax({
    //         type: "POST",
    //         url: '/operate/find',
    //         data: {id: 2001},
    //         success: function (data) {
    //             if(data.success){
    //             console.log(data);
    //             } else {

    //             }
    //         }
    //     });
    // });

    // $('#findAllBtn').click(function(){
    //     $.post('/operate/findAll', null, function(data){
    //         if(data.success) {
    //             console.log(data);
    //         }
    //     });
    // });

    // $('#updateBtn').click(function(){
    //     $.post('/operate/update', {id: 2001}, function(data){
    //         if(data.success) {
    //             console.log(data);
    //         }
    //     });
    // });
});