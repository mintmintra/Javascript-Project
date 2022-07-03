(() => {
    const carBrands = [
        'BMW',
        'Maserati',
        'Mercedes Benz',
        'Ferrari',
        'Toyota',
        'Honda',
        'Hyundai'
    ];

    const searchElem = document.querySelector('.search');

    function onInput(event){
        const x = event.target.value;
        console.log(x)
    }

    function run(){
        searchElem.addEventListener('input', onInput);
    }
    run();
})();
