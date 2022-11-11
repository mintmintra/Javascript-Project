(() => {
    const KEY = '7597e3f9-1258-4d43-91a9-86a68bc71ed6';

    async function getAirQuality({ city, state, country}){
        const response = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`)
        const result = await response.json();
        console.log(result)
    }


    function run(){
        const city = 'Sathon';
        const state = 'Bangkok';
        const country = 'Thailand';

        getAirQuality({ city, state, country})
    }

    run();
})();
