//Target an element
let  row=document.querySelector(".row");
let btn=document.querySelector("btn");

// calling api
let url="https://restcountries.com/v3.1/all"
fetch(url).then((res)=>res.json()).then((data)=>{
    data.forEach(element => {

    let div=document.createElement("div");
    div.className="col-sm-4 col-1g-4 alert alert-primary"
    let fileLoad=   template(element);
    div.innerHTML=fileLoad;
    row.appendChild(div)
});

})

let template=(country)=>{
let temp=`

        <!-- CARD -->
        
            <div class="card">
                <div class="card-header">${country.name.common}</div>
                <div class="card-body">
                    <img class="flag1"f src="${country.flags.png}" alt="">
                    <p class="card-text"><b>Capital:</b>${country.capital[0]}</p>
                    <p class="card-text"><b>Region:</b>${country.region}</p>
                    <p class="card-text"><b>Country Code :</b> ${(country.fifa!=undefined)?country.fifa:country.cca3}</p>
                    <button class="btn btn-primary" onclick="weatherBtn(${country.latlng})">weather</button>
                    </div>
                    </div>
                    `;
   
return temp
}


//to show weather message
let weatherBtn=(lat,lon)=>{
   //fetching weather api
   let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9bf59c67c0d408cc5e1c4877f3e4d9d5`
   fetch(url).then((res)=>res.json()).then((data)=>{
      
        
        //weather msg template
        let weatherMsg=`
        Countrty : ${data.name}
        latiture :  ${lat}   longiture :${lon}
        Weather  :  ${data.weather[0].description}
        Wind speed : ${data.wind.speed}
        temperature : ${data.main.temp} 
        `
        
        //we are going to show weather report via alert.
        alert(weatherMsg);
    })
}