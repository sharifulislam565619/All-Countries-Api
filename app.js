const loadData = async () => {
    const url = `https://restcountries.eu/rest/v2/all`
    const res = await fetch(url);
    const data = await res.json();
    showData(data)
}


const showData = countries => {
    // console.log(countries[18])
    const countriesContainer = document.getElementById("countries")

    const result = countries.map(country => {
        return countryData(country)
    })

    countriesContainer.innerHTML = result.join(" ")

}


const countryData = country => {

    const {
        capital,
        name,
        population,
        flag,
        area
    } = country
    return `
     <div class="country">
     <img src="${flag}"/>
     <h2>Name: ${name}</h2>
     <p><b>Capital</b>: ${capital}</p>
     <p><b>Language</b>: ${country.languages[0].nativeName}</p>
     <span><b>Population</b>: ${population} </span>
     <p><b>Aria</b>: ${area} Skm</p>
     </div>
     `

}

loadData()