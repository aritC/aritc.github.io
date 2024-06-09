$( document ).ready(function() {
    console.log( "Loaded!" );
    
    // Salutations List
    const salutationsList = [
      "Hi!👋 My name is",
      "नमस्ते!👋 मेरा नाम है",
      "হ্যালো!👋 আমার নাম",
      "¡Hola!👋 Mi nombre es",
      "ہیلو!👋 میرا نام ہے۔",
      "Salut!👋 Je m'appelle",
      "Ciao!👋 Mi chiamo",
      "Oi!👋 Meu nome é",
      "안녕하세요!👋 내 이름은",
      "வணக்கம்!👋 என் பெயர்",
      "Olá!👋 Meu nome é",
      "你好👋 我的名字是",
      "こんにちは👋 私の名前は",
      "Hallo!👋 Mein Name ist",
      "Привет!👋 Меня зовут",
    ];
    const salutation = $("#salutation");
    let index = 1;
    const intervalId = setInterval(() => {
      salutation.text(salutationsList[index]);
      index = (index+1) % salutationsList.length;
      clearInterval();
    }, 2000);


    // Mousemovement Tracker
    $(document).mousemove(function(e) {
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      $("#blob").css({top: mouseY, left: mouseX, position:'absolute'});
    })

});