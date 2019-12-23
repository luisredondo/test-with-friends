var helloButton = document.getElementById('hello-button');
var messageInput = document.getElementById('message-input');

helloButton.addEventListener('click', () => {
  alert(
    (messageInput.value == '')
      ?  '¡No escribiste nada!'
      : onMessage()
  );

  function onMessage(){
    document.body.innerHTML +=
    ` 
      <h1 class='center'>JESUS IS WATCHING YOU</h1>
      <img src="https://i.giphy.com/media/ibGFpMv1Uoais/giphy.webp" alt="">
    `
    return messageInput.value;
  }

});