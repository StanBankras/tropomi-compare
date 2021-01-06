// const fs = require('fs')

export async function coronaMeasures() {
    const data = await fetch('./json/covidMeasures.json').then(res => res.json());
    return data;
}
    // .filter(getCountries) //filter only the countries we need
    // .map(countryInfo) //map only the values we need of each key

// convertJSON(coronaMeasures)

// function convertJSON(data) {
//     const convert = JSON.stringify(data)
//     fs.writeFile('countries.json', convert, () => {
//         console.log('saved')
//     })
// }

// function getCountries(data) {
//     if (
//         data.COUNTRY_TERRITORY_AREA == 'Japan' ||
//         data.COUNTRY_TERRITORY_AREA == 'China' ||
//         data.COUNTRY_TERRITORY_AREA == 'United Kingdom' ||
//         data.COUNTRY_TERRITORY_AREA == 'Italy' ||
//         data.COUNTRY_TERRITORY_AREA == 'India' ||
//         data.COUNTRY_TERRITORY_AREA == 'Iceland' ||
//         data.COUNTRY_TERRITORY_AREA == 'Latvia' ||
//         data.COUNTRY_TERRITORY_AREA == 'South-Korea' ||
//         data.COUNTRY_TERRITORY_AREA == 'Netherlands'
//     ) {
//         return data
//     }
// }

// function countryInfo(data) {
//     return {
//         name: data.COUNTRY_TERRITORY_AREA,
//         country_name: data.COUNTRY_CODE,
//         country_code: data.ISO_3166_1_NUMERIC,
//         who_category: data.WHO_CATEGORY,
//         who_subcategory: data.WHO_SUBCATEGORY,
//         who_measure: data.WHO_MEASURE,
//         targeted: data.TARGETED,
//         comments: data.COMMENTS
//     }
// }