var sayHello = (function () {
  var speakWord = "Hello";
  return {
    execute: function speak(name) {
      console.log(speakWord + " " + name);
    },
  };
})();
