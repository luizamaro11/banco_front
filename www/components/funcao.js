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

function listarPessoas(){
     $.ajax({
          type: "post", //como enviar
          url: "https://mobile2ds2-luizamaro11.c9users.io/webservice/lista.php", // para onde enviar
          dataType: "json",
          // se der certo
          success: function(data){
               var itemlista = "";
               $.each(data.pessoas, function(i, dados){
                    itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>";
               });
          $("#lista").html(itemlista);
          },
          // se der errado
          error: function(data){
               navigator.notification.alert(data);
          }
     });
}

$(document).on("change", "#lista", function(){
     var codigoescolhido = $("option:selected", ("#lista")).val();
     $.ajax({
          type: "get", //como enviar
          url: "https://mobile2ds2-luizamaro11.c9users.io/webservice/lista-um.php", // para onde enviar
          data: "id = " + codigoescolhido,
          dataType: "json",
          // se der certo
          success: function(data){
               $("#codigo").val(data.pessoas.codigo);
               $("#nome").val(data.pessoas.nome);
               $("#email").val(data.pessoas.email);
          },
          // se der errado
          error: function(data){
               navigator.notification.alert(data);
          }
     });
});

$(document).on("click", "#salvar", function(){
     var parametros = {
          "codigo": $("#codigo").val(),
          "nome": $("#nome").val(),
          "email": $("#email").val(),
     }
     $.ajax({
          type: "post",
          url: "",
          data: parametros,
          success: function(data){
               navigator.notification.alert(data);
               location.reload();
          },
          error: function(data){
               navigator.notification.alert(data);
          }
     });
});

$(document).on("click", "#excluir", function(){
     $.ajax({
          type: "post",
          url: "",
          data: "id = " + $("#codigo").val(data),
          success: function(data){
               navigator.notification.alert(data);
               location.reload();
          },
          error: function(data){
               navigator.notification.alert(data);
          }
     });
});