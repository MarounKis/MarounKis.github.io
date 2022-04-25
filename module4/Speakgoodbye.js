var sayBye = (function () {
  var speakWord = "Good Bye";
  return {
    execute: function speak(name) {
      console.log(speakWord + " " + name);
    },
  };
})();
