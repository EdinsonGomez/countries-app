export const getAllCountries = () => {
  return fetch('https://restcountries.com/v3.1/all', { cache: "no-store" })
    .then(res => res.json())
}