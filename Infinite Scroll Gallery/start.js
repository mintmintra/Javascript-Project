(() => {
 const KEY = 'p3Sm0W3ROuxjmk5a9GuC-3WZHC3TDDMfLX4zuPN-slQ';
 let page = 1;
 
 async function disolayImages(){
    const result =  await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
    console.log(result)
 }

 function run(){
    disolayImages();
 }
 run();
})();
