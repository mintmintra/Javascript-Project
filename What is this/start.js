(() => {

  // 1. Lexical scope & Dynamic scope
  function printName() {
    console.log(this);
  }
  
  // 2. How to know what is "this"?
  const varayut = { name: 'Varayut', printName };
  const jane = { name: 'Jane', printName };
  varayut.printName()
  jane.printName()
  //// 2.1 Invoker object
  //// 2.2 Global object (window, global)
  //// 2.3 Constructor function
  // 3. call(), apply(), and bind()
})();
