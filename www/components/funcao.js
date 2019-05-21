// This is a JavaScript file

$(document).on("click", "#cadastrar", function(){
     var parametros = {
          "nome" : $("#nome").val(),
          "email": $("#email").val()
     };

     $.ajax({
          type: "post",
          url: "https://mobile2ds2-luizamaro11.c9users.io/webservice/cadastro.php",
          data:parametros,
          success:function(data){
               navigator.notification.alert(data);
               $("#nome").val("");
               $("#email").val("");
          },
          error: function(data){
               navigator.notification.alert(data);
          }
     });
});

$(document).on("click", "#listar", function(){
     $(location).attr("href" , "lista.html");
});

