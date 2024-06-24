const form =document.querySelector('form');
const search =document.querySelector('#search');
const card = document.querySelector("#card");


form.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    axios(`http://api.weatherapi.com/v1/current.json?key=3fe4c4377a554e6684152455241406&q=${search.value}&aqi=no
    
    `)
    .then((res)=>{
    console.log(res.data);
    card.innerHTML=`
    <div class='bg-white border border-gray-800 shadow-lg ring ring-gray-700 ring-opacity-50 w-50 mx-auto mt-5 rounded-lg p-4 mb-5'>
            <h1 class='text-2xl'>${res.data.location.name}</h1>
            <p class="text-dark-500">${res.data.location.localtime} ,${res.data.location.country} </p>
             <div class='mt-5 d-flex justify-content-between align-items-center mx-5 pb-4'>
                 <h2 class='text-4xl md:text-7xl lg:text-8xl'>${res.data.current.temp_c}°C</h2>
                 <img width="160px" src=${res.data.current.condition.icon} alt='weatherImg' />
             </div>
            <h4>${res.data.current.condition.text}</h4>
         </div>
    
    `
    })
    .catch((err)=>{
        console.log(err);
    })

})


























