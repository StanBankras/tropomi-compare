<template>
  <div id="findings">
    <h2>Our most notable findings</h2>
    <div class="finding">
      <h3>Severity of lockdown greatly matters in NO<sub>2</sub> reduction</h3>
      <div class="wrap">
        <div>
          <img src="@/assets/img/findings/amsterdam_lockdown.png" alt="">
          <img src="@/assets/img/findings/amsterdam_lockdown_measures.png" alt="">
          <p>
            In Amsterdam, the severity of the lockdown was a lot less than in New Delhi. As you can see, there is no clear downtrend visible in NO<sub>2</sub>.
            Near the end of the year, a more severe lockdown was put into place. There is a clear drop in NO<sub>2</sub>, which might be the result of the more strict rules
            (as can be seen from the rising stringency index).
          </p>
        </div>
        <div>
          <img src="@/assets/img/findings/new_delhi_lockdown.png" alt="">
          <img src="@/assets/img/findings/new_delhi_lockdown_measures.png" alt="">
          <p>
            In New Delhi, the lockdown was quite intense in March already. The trend at the start of the measures is clearly down, indicating that strict lockdown measures 
            in which only agriculture and companies around agriculture could continue to operate has a strong effect on NO<sub>2</sub> emissions.
          </p>
        </div>
      </div>
    </div>
    <div class="finding">
      <h3>Black lives matter protests</h3>
      <div class="wrap">
        <div>
          <img src="@/assets/img/findings/london.png" alt="">
          <img src="@/assets/img/findings/london_measures.png" alt="">
          <p>
            In London, while a lot of measures were still active, were big Black lives matter protests going on in August 2020. This is the only reason
            this dramatic increase in NO<sub>2</sub> emission can be explained by. The protests must have caused a lot of people to travel towards London, which caused
            extra emissions.
          </p>
        </div>
        <div>
          <img src="@/assets/img/findings/riga.png" alt="">
          <img src="@/assets/img/findings/riga_measures.png" alt="">
          <p>
            In Riga there was only a small increase in NO<sub>2</sub> compared to London, although a 50% increase in comparison to previous year is still high.
            The reason for the increase might have been less COVID infections and more cars on the road again.
          </p>
        </div>
      </div>
    </div>
    <div class="finding">
      <h3>No measures, but a strong decrease in NO<sub>2</sub></h3>
      <div class="wrap">
        <div>
          <img src="@/assets/img/findings/amsterdam.png" alt="">
          <p>
            In Amsterdam, there were barely any measures, but the NO<sub>2</sub> values did go down dramatically. The reason for this is unclear, because we did not
            find any major events that might have caused these changes.
          </p>
        </div>
        <div>
          <img src="@/assets/img/findings/riga2.png" alt="">
          <p>
            In Riga, same as in Amsterdam, the NO<sub>2</sub> values decreased a lot at the start of the year compared to 2019. Because it's a comparison between
            two years, the reason cannot simply be winter time, because this happens in every year.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#findings {
  width: 100%;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5em;
    color: var(--text-box);
    font-weight: 600;
  }
  .finding {
    margin-bottom: 3rem;
    h3 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.25em;
      color: var(--text-box);
      font-weight: 600;
    }
    .wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      @media(max-width: 1030px) {
        grid-template-columns: 1fr;
      }
      img {
        width: 100%;
      }
      p {
        margin-top: 1rem;
      }
    }
  }
}
</style>