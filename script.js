let apiData;
const countriesList= document.querySelector("#countriesList")

async function setUp(){
    fetchCountries();
    countriesList.innerHTML = "";
    apiData = await fetchCountries()
    apiData.map(country => {
        createNewCountryElement(country)
    
    })
}


const fetchCountries = async () => { 
    const repsonse = await fetch("https://restcountries.com/v3.1/all");
    const data = await repsonse.json();
    return data;
}

setUp();


function createNewCountryElement (country){
   const newListItem = document.createElement("li");
   newListItem.innerText = `${country.name.common} population: ${country.population}`;
   countriesList.appendChild(newListItem);
}


//console.log("Testing, testing, 1 2 3 ...")
