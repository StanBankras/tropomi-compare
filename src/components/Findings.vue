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