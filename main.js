async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/alpha/be');
        let countryName = result.data.name;
        let subareaName = result.data.subregion;
        let amount = result.data.population;
        let capital = result.data.capital;

        console.log(result)
        console.log(`${countryName} is situated in ${subareaName}. It has a population of ${amount} people. The capital is ${capital}.`)
    } catch(error) {
        console.error(error);
    }
}

const dataFetchButton = document.getElementById('data-fetch-button');
console.log(dataFetchButton);

dataFetchButton.addEventListener('click', fetchData)

// const inputField = document.getElementById('input');
// console.log(inputField);

// async function getCurrency() {
//     try {
//         let currencyOne = await axios.get('https://restcountries.eu/rest/v2/name/belgium?data.currency=true');
//         return currencyOne;
//         // let currencyTwo = info.currencies.name;
//         // if (currencyTwo = null) {
//         //     return currencyOne;
//         // } else {
//         //     return `${currencyOne} and ${currencyTwo}.`
//         // }
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// getCurrency();