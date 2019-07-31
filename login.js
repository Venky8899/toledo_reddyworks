
var csrftoken=$('input[name="csrfmiddlewaretoken"]').val()

$(document).ready( function(){

      $("#txtBtn").on("click", function() {
            event.preventDefault();
            handelsubmit()
         

      });
      function handelsubmit(){
            var _data = {
            'username': $('#username').val(),
            'password': $('input[name="password"]').val()
                 
              }
      //console.log("_data...............",_data)
      $.ajax({
            type: "POST",
            url: '/login/',
            async:false,
            data: _data,
            success: function(data){
                 window.location.href="/emp/details/"
             },
             error: function (textStatus, errorThrown) {
                  success = false;
              },
            beforeSend: function (xhr) {
                  xhr.setRequestHeader('X-CSRFToken', csrftoken)}
          });
      }

      });
