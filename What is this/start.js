(() => {

  // 1. Lexical scope & Dynamic scope
  function printName() {
    console.log(this);
    console.log(`My name is ${this.name}`);
  }
  // 2. How to know what is "this"?
  //// 2.1 Invoker object
  //// 2.2 Global object (window, global)
  //// 2.3 Constructor function
  // 3. call(), apply(), and bind()
})();
