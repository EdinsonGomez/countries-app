export const getAllCountries = () => {
  return fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
}

export const getCountriesByRegion = (region) => {
  return fetch(`https://restcountries.com/v3.1/region/${region}`, { cache: "no-store" })
    .then(res => res.json())
}

export const getCountriesByName = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`, { cache: "no-store" })
    .then(res => res.json())
}

export const getCountryByCode = (code) => {
  return fetch(`https://restcountries.com/v3.1/alpha/${code}`, { cache: "no-store" })
    .then(res => res.json())
}