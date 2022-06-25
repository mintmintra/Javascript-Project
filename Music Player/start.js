(() => {
  const audioElem = document.querySelector('audio');
  const playBtnElem = document.querySelector('.play');
  const progressBarElem = document.querySelector('.progress-bar');
  const startTimeElem = document.querySelector('.start-time');
  const endTimeElem = document.querySelector('.end-time');

  function onClick(){
    audioElem.play();
  }
  
  function run(){
    playBtnElem.addEventListener('click', onClick);
  }
  run()

})();
