import { createStore } from "vuex";
import { measures } from '@/models/measures.js';
import { measuresPerCountryCode } from '@/models/countryMeasures.js';
import { coronaMeasures } from '@/models/coronaMeasures.js'

import lookup from 'country-code-lookup';

const store = createStore({
  state() {
    return {
      coronaMeasures: coronaMeasures,
      measures: measures,
      measuresPerCountryCode,
      countries: [
        { countryCode: 'CN', city: 'Beijing' },
        { countryCode: 'NL', city: 'Amsterdam' },
        { countryCode: 'IN', city: 'New Delhi' },
        { countryCode: 'KR', city: 'Seoul' },
        { countryCode: 'IT', city: 'Milan' },
        { countryCode: 'GB', city: 'London' },
        { countryCode: 'JP', city: 'Tokyo' },
        { countryCode: 'IS', city: 'Reykjavík' },
        { countryCode: 'LV', city: 'Riga' }
      ],
      selectedCountry: undefined
    }
  },
  getters: {
    coronaMeasures: state => state.coronaMeasures,
    measures: state => state.measures,
    measuresPerCountryCode: state => state.measuresPerCountryCode,
    countries: state => {
      return state.countries.map(country => {
        const details = lookup.byIso(country.countryCode);
        return {
          city: country.city,
          country: details ? details.country : '',
          continent: details ? details.continent : '',
          countryCode: country.countryCode
        }
      })
    }
  }
});

export default store;