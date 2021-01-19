<template>
  <div class="flex-container">
    <div class="sourceSize">
      <h2>Reference list</h2>
      <h3>Satellite information</h3>
      <p>
        KNMI R&amp;D Satellite Observations. (n.d.). Home. Tropomi. Retrieved 7
        December 2020, from http://www.tropomi.eu/
      </p>
      <h3>NO<sub>2</sub> metrics</h3>
      <p>
        Google. (n.d.). Google Earth Engine. Google Earth Engine. Retrieved 7
        December 2020, from https://earthengine.google.com/
      </p>
      <h3>Data COVID-19 measures</h3>
      <p>
        BBC News. (2020, April 7). Coronavirus: The world in lockdown in maps
        and charts. https://www.bbc.com/news/world-52103747
      </p>
      <p>
        Wikipedia contributors. (2021, January 9). National responses to the
        COVID-19 pandemic. Wikipedia.
        https://en.wikipedia.org/wiki/National_responses_to_the_COVID-19_pandemic
      </p>
      <p>
        COVID-19 Government Measures Dataset. (2020, December 10). ACAPS.
        https://www.acaps.org/covid-19-government-measures-dataset
      </p>
      <p>
        Drury, C. (2020, August 29). Anti-lockdown, anti-vaccine and anti-mask
        protesters crowd London’s Trafalgar Square. Independent.
        https://www.independent.co.uk/news/uk/home-news/coronavirus-anti-lockdown-protest-trafalgar-square-anti-vaccine-mask-hoax-a9695561.html
      </p>
      <p>
        Stubley, P. (2020, August 31). Hundreds of anti-racism protesters join
        Million People March in Notting Hill. The Independent.
        https://www.independent.co.uk/news/uk/home-news/million-people-march-protest-racism-notting-hill-blm-a9696506.html
      </p>
      <h3>Air traffic metrics</h3>
      <p>
        NARITA INTERNATIONAL AIRPORT CORPORATION. (2020a). NARITA AIRPORT
        TRAFFIC STATISTICS -2019(JAN-DEC). NARITA AIRPORT TRAFFIC STATISTICS -
        2019(JAN-DEC). https://www.naa.jp/en/airport/pdf/statistics20200326.pdf
      </p>
      <p>
        Incheon Airport. (2020). Incheon International Airport Statistics.
        https://www.airport.kr/co/en/cpr/statisticCategoryOfDay.do
      </p>
      <p>
        STATISTICS REPORT 2019. (2020).
        https://www.riga-airport.com/uploads/files/Statistika/12_RIX_Statistics%202019_DEC.pdf
      </p>
      <p>
        Isavia. (n.d.). Passenger statistics. Retrieved 11 January 2021, from
        https://www.isavia.is/en/corporate/about-isavia/reports-and-statistics/passenger-statistics/passenger-statistics
      </p>
      <p>
        Heathrow Airport. (2020). Traffic Statistics | Heathrow.
        https://www.heathrow.com/company/investor-centre/reports/traffic-statistics
      </p>
      <p>
        Airports Authority Of India. (n.d.). AAI TRAFFIC NEWS. Retrieved 6
        January 2021, from
        https://www.aai.aero/en/business-opportunities/aai-traffic-news
      </p>
      <p>
        NARITA INTERNATIONAL AIRPORT CORPORATION. (2020b). NARITA AIRPORT
        TRAFFIC STATISTICS -2020(JAN-DEC).
        https://www.naa.jp/en/airport/pdf/statistics20201224.pdf
      </p>
      <p>
        Riga Airport. (2020). STATISTICS REPORT 2020.
        https://www.riga-airport.com/uploads/statistika/9_RIX_Statistics%202020_Okt.pdf
      </p>
      <p>
        Wikipedia contributors. (2021b, January 19). COVID-19 lockdown in India.
        Wikipedia. https://en.wikipedia.org/wiki/COVID-19_lockdown_in_India
      </p>
      <p>
        Wikipedia contributors. (2021b, January 15). Timeline of the COVID-19
        pandemic in Japan. Wikipedia.
        https://en.wikipedia.org/wiki/Timeline_of_the_COVID-19_pandemic_in_Japan
      </p>
      <p>
        NOS. (2020, November 23). NOS Archief: Nieuws.
        https://nos.nl/nieuws/archief/2020-11-23/
      </p>
      <p>
        Time and date. (n.d.). Weather in november 2020 in Amsterdam,
        Netherlands. Retrieved 19 January 2021, from
        https://www.timeanddate.com/weather/netherlands/amsterdam/historic?month=11&amp;year=2020
      </p>
      <p>
        Simon Harris. (2020, December 14). itv News London Week 50 2020 [Video].
        YouTube.
        https://www.youtube.com/watch?v=jlO4yuLDV50&amp;t=209s&amp;ab_channel=SimonHarris
      </p>
      <p>
        Simon Harris. (2020a, August 17). itv News London Week 32 2020 [Video].
        YouTube.
        https://www.youtube.com/watch?v=VWQPgRsRLRc&amp;t=11s&amp;ab_channel=SimonHarris
      </p>
      <p>
        Shin, H. (2020, October 11). South Korea eases social distancing curbs
        amid COVID-19 downtrend. Reuters.
        https://www.reuters.com/article/health-coronavirus-southkorea-idUSKBN26W094
      </p>
      <p>
        Roser, M. (2020, May 26). South Korea: Coronavirus Pandemic Country
        Profile. Our World in Data.
        https://ourworldindata.org/coronavirus/country/south-korea?country=KOR%7EJPN
      </p>
      <h3>Traffic congestion data</h3>
      <p>
        TomTom. (n.d.). TomTom | Home. Retrieved January 18, 2021, from
        https://www.tomtom.com/nl_nl/
      </p>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  align-content: center;
  flex-direction: column;
  background-color: var(--text-box);
}

h2,
h3,
p {
  color: white;
}

h2 {
  font-size: 3.75rem;
  margin-bottom: 1em;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

p {
  font-size: 1rem;
  margin-bottom: 1em;
  line-height: 1.2em;
  word-break: normal;
  font-weight: 400;
}

.sourceSize {
  margin: 5em 15em 5em 15em;
}

@media only screen and (max-width: 320px) {
  h2 {
    /* margin-top: 1.5em; */
    font-size: 2.75em;
    margin-bottom: 1em;
  }

  .sourceSize {
    margin: 2em 1em 1em 2em;
  }

  h3 {
    font-size: 1.2em;
    font-weight: 600;
  }

  p {
    font-size: 0.5em;
  }
}
</style>
