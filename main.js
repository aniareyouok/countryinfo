async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium?fullText=true');
        console.log(result.data);
    } catch(error) {
        console.error(error)
    }
}

const dataFetchButton = document.getElementById('data-fetch-button');
console.log(dataFetchButton);

dataFetchButton.addEventListener('click', fetchData)