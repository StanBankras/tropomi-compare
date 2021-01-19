import { createStore } from "vuex";
import { measures } from '@/models/measures.js';
import { measuresPerCountryCode } from '@/models/countryMeasures.js';

import lookup from 'country-code-lookup';
import dayjs from 'dayjs';

const store = createStore({
  state() {
    return {
      coronaMeasures: [],
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
        { countryCode: 'LV', city: 'Riga' }
      ],
      no2PerCountry: {},
      measuresPerCountry: {},
      flightDataPerCountry: {},
      trafficDataPerCountry: {},
      stringencyIndexPerCountry: {},
      extremes: []
    }
  },
  getters: {
    coronaMeasures: state => state.coronaMeasures,
    measures: state => state.measures,
    measuresPerCountryCode: state => state.measuresPerCountryCode,
    measuresPerCountry: state => state.measuresPerCountry,
    no2PerCountry: state => state.no2PerCountry,
    flightDataPerCountry: state => state.flightDataPerCountry,
    trafficDataPerCountry: state => state.trafficDataPerCountry,
    stringencyIndexPerCountry: state => state.stringencyIndexPerCountry,
    extremes: state => state.extremes,
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
  },
  mutations: {
    SET_COVID_MEASURES(state, measures) {
      state.coronaMeasures = measures;
    },
    SET_COUNTRY_NO2(state, payload) {
      state.no2PerCountry[payload.countryCode] = payload.values;
    },
    SET_COUNTRY_MEASURES(state, payload) {
      state.measuresPerCountry[payload.countryCode] = payload.values;
    },
    SET_FLIGHT_DATA(state, payload) {
      state.flightDataPerCountry = payload;
    },
    SET_TRAFFIC_DATA(state, payload) {
      state.trafficDataPerCountry = payload;
    },
    SET_EXTREMES(state, payload) {
      state.extremes = payload;
    },
    SET_STRINGENCY_INDICES(state, payload) {
      state.stringencyIndexPerCountry = payload;
    }
  },
  actions: {
    setCovidMeasures: ({ commit }) => {
      fetch('./json/covidMeasures.json')
        .then(res => res.json())
        .then(res => {
          commit('SET_COVID_MEASURES', res);
        });
    },
    setExtremes: ({ commit }) => {
      fetch('./json/extremes.json')
        .then(res => res.json())
        .then(res => {
          commit('SET_EXTREMES', res);
        });
    },
    getNO2Data: ({ commit, state }) => {
      state.countries.forEach(country => {
        fetch(`./json/no2/${ country.city.toLowerCase().split(' ').join('-') }.json`)
          .then(res => res.json())
          .then(data => {
            commit('SET_COUNTRY_NO2', { countryCode: country.countryCode, values: data })
          });
      });
    },
    getStringencyIndices: ({ commit, state }) => {
      const indices = localStorage.getItem('stringencyIndices');
      if(indices) return commit('SET_STRINGENCY_INDICES', JSON.parse(indices));

      fetch(`./json/stringency_index.json`)
        .then(res => res.json())
        .then(data => {
          const countryCodes = state.countries.map(c => lookup.byIso(c.countryCode).iso3);
          const obj = {};

          countryCodes.forEach(code => {
            const countryData = data
              .filter(d => d.Code === code)
              .map(d => {
                return {
                  date: d.Date,
                  value: d.stringency_index
                }
              });

            const weeklyMapped = {};

            for(let i = 1; i < 53; i++) {
              const weekData = countryData.filter(c => dayjs(c.date).week() === i);
              weeklyMapped[i] = weekData.reduce((acc, curr) => acc + curr.value, 0) / weekData.length;
            }
            
            obj[lookup.byIso(code).iso2] = weeklyMapped;
          });
          
          commit('SET_STRINGENCY_INDICES', obj);
          localStorage.setItem('stringencyIndices', JSON.stringify(obj))
        });
    },
    getFlightData: ({ commit }) => {
      fetch(`./json/flightData.json`)
      .then(res => res.json())
      .then(data => {
        const obj = {};

        data.forEach(d => {
          let result = [];

          for(let i = 0; i < d.data.length - 1; i++) {
            let val = 5;
            if(i === 0 || i === 11) val = 6;

            for(let j = 0; j < val; j++) {
              result.push(d.data[i]);
            }
          }

          obj[d.countryCode] = result;
        });

        commit('SET_FLIGHT_DATA', obj);
      });
    },
    getTrafficData: ({ commit }) => {
      fetch(`./json/trafficData.json`)
      .then(res => res.json())
      .then(data => {
        const obj = {};

        data.forEach(d => {
          let result = [];

          for(let i = 0; i < d.data.length - 1; i++) {
            let val = 5;
            if(i === 0 || i === 11) val = 6;

            for(let j = 0; j < val; j++) {
              result.push(d.data[i]);
            }
          }

          obj[d.countryCode] = result;
        });

        commit('SET_TRAFFIC_DATA', obj);
      });
    },
    getMeasures: ({ commit, state }) => {
      state.countries.forEach(country => {
        fetch(`./json/measures/${ country.city.toLowerCase().split(' ').join('-') }.json`)
          .then(res => res.json())
          .then(data => {
            commit('SET_COUNTRY_MEASURES', { countryCode: country.countryCode, values: data })
          });
      });
    }
  }
});

export default store;