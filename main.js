
//Retrieves name, subregion, population count and main capital of a given country
async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/alpha/be');
        let countryName = result.data.name;
        let subareaName = result.data.subregion;
        let amount = result.data.population;
        let capital = result.data.capital;

        console.log(result)
        console.log(`${countryName} is situated in ${subareaName}. It has a population of ${amount} people. The capital is ${capital}.`)
        getCurrency();
    } catch(error) {
        console.error(error);
    }
}

        //The fetchData function starts when someone clicks the button
        const dataFetchButton = document.getElementById('data-fetch-button');
        console.log(dataFetchButton);

        dataFetchButton.addEventListener('click', () => {
            fetchData();
        })

        //Not finished yet: inputfield where a country search can be done which will evoke the fetchData function
        const inputField = document.getElementById('input_field');
        console.log(inputField);

        inputField.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                fetchData();
                getCurrency();

            }
        })

    //Retrieves the kind of currencies you can pay with in a given country. This function gets evoked by the fetchData function.
    async function getCurrency() {
        try {
            const result = await axios.get('https://restcountries.eu/rest/v2/alpha/be');
            const currencies = result.data.currencies;
            let allCurrenciesArray = [];

            for (let i = 0; i < currencies.length; i++) {
                allCurrenciesArray.push(currencies[i].name);
            }

            if (currencies.length === 1) {
                console.log( `You can pay with ${currencies[0].name}'s`);
            } else if (currencies.length < 1) {
                const lastCurrency = allCurrenciesArray.pop()
                const allCurrencies = allCurrenciesArray.join(", ");
                console.log( `You can pay with ${allCurrencies} and ${lastCurrency}.`);
            } else {
                console.log(`You can't by anything here, use your skills and help each other out`);
            }

        } catch (error) {
            console.error(error);
        }
    }

