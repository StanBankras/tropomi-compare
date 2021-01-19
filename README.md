# TROPOMI compare
_Compare the measures taken during the COVID-19 crisis in different capital cities to see what effect they had (if any) on the NO2 (nitrogen dioxide) emmissions in that area._

![Product](https://tropomi.netlify.app/img/github-gif.gif)
## [View the live app](https://tropomi.netlify.app/#/)

-----

## Table of contents
* Concept
* Getting started
  	* Prerequisites
    * Installation
* Usage
* Contributors
* License
* Acknowledgements

## Concept
The corona virus has caused humans in cities across the world to behave differently due to measures that were taken to limit the spread. There is a possibility that some of the taken measures have reduced the NO2 concentrations in the air. This tool can compair two cities at a time, with a chart that shows the difference between 2019 and 2020 in NO2 emission. Underneath this, measures that were taken are shown. The aim is that this allows the user to discover interesting patterns in the data.

## Getting started
This example shows how to setup this project locally. Follow the steps below.

### Prerequisites
* NPM or YARN to install packages

### Installation
1. Clone the repo
```
git clone git@github.com:StanBankras/tropomi-compare.git
```
2. Install NPM packages
```
npm install
// or
yarn install
```
3. Run the setup
```
npm run serve
// or
yarn serve
```

## Usage
The charts are based on data that is collected manually. New datapoints can be added to for example add measures or add new countries to the tool.

All JSON files can be found in `public/json` and can be edited to add new items.

This is an example of a category of measures:
```json
    "movementRestrictions": {
      "measures": [
        {
          "startDate": "03-20-2020",
          "endDate": "03-21-2020",
          "goal": "Keep cases to a minimum from outside sources.",
          "measure": "Beijing is directing some inbound flights from their capital airport to other airports."
        },
        {
          "startDate": "03-21-2020",
          "endDate": "03-24-2020",
          "goal": "Keep cases to a minimum from outside sources.",
          "measure": "Beijing is now diverting all flights to fight the virus."
        },
        {
          "startDate": "03-24-2020",
          "endDate": "03-29-2020",
          "goal": "Keep cases to a minimum from outside sources.",
          "measure": "Beijing is asking people who are flying into Beijing to fill in a health declaration form. Also the flights will be diverted to other cities."
        }
      ]
    }
```
If a new country is added to the project, it is required to add this country to the list of countries in `src/store/store.js` like so:
```js
  countries: [
    { countryCode: 'CN', city: 'Beijing' },
    { countryCode: 'NL', city: 'Amsterdam' },
    { countryCode: 'IN', city: 'New Delhi' },
    { countryCode: 'KR', city: 'Seoul' },
    { countryCode: 'IT', city: 'Milan' },
    { countryCode: 'GB', city: 'London' },
    { countryCode: 'JP', city: 'Tokyo' },
    { countryCode: 'LV', city: 'Riga' }
  ]
```

## Contributors
* Chun Xiao - [process](https://www.dropbox.com/scl/fi/fwvnjz2bk71rxzdgr9goe/Processboek-Chun-Hui-Xiao-KNMI-project.paper?dl=0&rlkey=bg0wjegcb8n2j7zb2quccjqql) (Dutch)
* Denise Mori - [process](https://denise-mori1996.gitbook.io/information-design/) (Dutch)
* Jordi Sahit - [process](https://www.notion.so/Procesboek-a32fde15151c4266b093b7d3942dfb06) (Dutch)
* Stan Bankras  - [process](https://stanbankras.gitbook.io/information-design-knmi/) (Dutch)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Acknowledgements
