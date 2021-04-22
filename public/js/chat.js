document.querySelector("#start_chat").addEventListener("click", (event) => {
 const socket = io();
 //os chat de email e text de ajuda com conexão pelos id deles e dando value
 const chat_help = document.getElementById("chat_help");
 chat_help.style.display = "none";

 const chat_in_support = document.getElementById("chat_in_support");
 chat_in_support.style.display = "block"

 const email = document.getElementById("email").value;
 const text  = document.getElementById("txt_help").value;

 socket.on("connect",() => {//qnd eu tiver conectado ai sim vamos emitir nossos evento
 //vamos criar os paramentros que serão email e text agora
 const params = {
   email,
   text
 }

  socket.emit("client_first_acess", params, (call, err) => {//o nome que criamos no client vamos emitir um evento callback e error
   if(err) {
     console.err(err); //se der um erro
   }else {
     console.log(call); // se não da console.log com callback
   }
  });
 });
});
