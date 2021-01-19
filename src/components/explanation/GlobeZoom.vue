<template>
  <div class="container">
    <div class="world-container">
      <div class="info-troposphere">
        <p>Troposhpere</p>
        <p>0-12km altitude</p>
      </div>
      <img class="bigCloud" src="@/assets/img/big-cloud.svg" alt="big cloud" />
      <img
        class="smallCloud"
        src="@/assets/img/small-cloud.svg"
        alt="small cloud"
      />
      <img class="satellite" src="@/assets/img/satellite.svg" alt="satellite" />
      <img class="arrow" src="@/assets/img/yellow-arrow.svg" alt="arrow" />
      <div class="textbox1">
        <h2>Why measure NO<sub>2</sub>?</h2>
        <p>
          NO<sub>2</sub> is a gas with a short life span of only a couple of
          hours, this makes it easy to monitor the source of the pollution.
          Every time fossil fuels are burned, NO<sub>2</sub> will be emitted
          into the air. This way it's easy to monitor where the most emissions
          are and what the possible causes can be.
        </p>
      </div>

      <div class="textbox2">
        <h2>Where does NO<sub>2</sub> reside?</h2>
        <p>
          NO<sub>2</sub> resides in both the troposphere and the stratosphere,
          we will only be monitoring the troposphere. In the troposphere the
          changes are mostly the result of human activities.
        </p>
      </div>

      <div class="textbox3">
        <h2>Comparing cities in times of COVID-19</h2>
        <p>
          Comparing cities in times of Covid-19. Because of Covid-19, a lot of
          normal human activities have been suspended. This suspension had a lot
          of impact on the NO<sub>2</sub> emissions.
        </p>
      </div>

      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <img class="poi1" src="@/assets/img/poi.svg" alt="London" />
      <img class="poi2" src="@/assets/img/poi.svg" alt="Amsterdam" />
      <img class="poi3" src="@/assets/img/poi.svg" alt="Milan" />
      <img class="poi4" src="@/assets/img/poi.svg" alt="Riga" />
      <img class="poi5" src="@/assets/img/poi.svg" alt="New Delhi" />
      <img class="poi6" src="@/assets/img/poi.svg" alt="Beijing" />
      <img class="poi7" src="@/assets/img/poi.svg" alt="Seoul" />
      <img class="poi8" src="@/assets/img/poi.svg" alt="Tokyo" />
      <img class="globe" src="@/assets/img/earth-map.svg" alt="map of earth" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(#1a1a1a, #1f34a4);
  max-width: 100vw;
  min-height: 2500px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;

  .world-container {
    margin-top: 10em;
  }
  .globe {
    position: relative;
    width: 100vw;
    z-index: 5;
    bottom: -65em;
  }
  .circle1 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #6e99d7;
    border-radius: 50%;
    z-index: 4;
    transform: scale(1.2, 1.8);
    bottom: 5em;
    box-sizing: border-box;
  }
  .circle2 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #315fd9;
    border-radius: 50%;
    z-index: 3;
    opacity: 0.33;
    transform: scale(1.5, 1.8);
    bottom: 25em;
  }
  .circle3 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #243faa;
    border-radius: 50%;
    z-index: 2;
    opacity: 0.15;
    transform: scale(1.5, 1.8);
    bottom: 50em;
  }
  .circle4 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #1f34a4;
    border-radius: 50%;
    z-index: 1;
    opacity: 0.04;
    transform: scale(1.5, 1.8);
    bottom: 70em;
  }
  .satellite {
    position: absolute;
    width: 15.625em;
    height: 9.375em;
    z-index: 6;
    top: 18em;
    transform: scaleX(-1);
  }
  .textbox1 {
    position: absolute;
		max-width: 100%;
    width: 40em;
    font-size: 1.25rem;
    padding: 1.75rem 7.5rem 1.75rem 2rem;
    box-shadow: 0 0 1rem 0.005rem black;
    background-color: var(--text-box);
    border-radius: 40px;
    color: var(--text-contrast);
    z-index: 6;
    margin-left: 2em;
    transform: translate(0, 70%);
  }

  .textbox2 {
    position: absolute;
		max-width: 100%;
    width: 40em;
    font-size: 1.25rem;
    padding: 1.75rem 7.5rem 1.75rem 2rem;
    box-shadow: 0 0 1rem 0.005rem black;
    background-color: var(--text-box);
    border-radius: 40px;
    color: var(--text-contrast);
    z-index: 6;
    margin-left: 2em;
    top: 58em;
    right: 0.5em;
  }

  .textbox3 {
    position: absolute;
		max-width: 100%;
    width: 40em;
    font-size: 1.25rem;
    padding: 1.75rem 7.5rem 1.75rem 2rem;
    box-shadow: 0 0 1rem 0.005rem black;
    background-color: var(--text-box);
    border-radius: 40px;
    color: var(--text-contrast);
    z-index: 6;
    margin-left: 2em;
    top: 97.5em;
    right: 18em;
  }

  .arrow {
    position: absolute;
    height: 19.5em;
    transform: translate(1600%, 105%);
    z-index: 6;
    top: 49.25em;
    left: 6.75em;
  }
  .bigCloud {
    position: absolute;
    top: 90em;
    right: 4em;
    z-index: 6;
    transform: rotate(9deg);
  }
  .smallCloud {
    position: absolute;
    top: 95em;
    transform: rotate(-10deg);
    left: 3em;
    z-index: 6;
  }
  .info-troposphere {
    position: absolute;
    top: 81em;
    left: 14em;
    z-index: 6;
  }
  .info-troposphere > p:first-child {
    background-color: var(--text-contrast);
    padding: 0.2em 1.875em 0.2em 1.875em;
    border-radius: 25px;
    font-size: 2em;
    font-weight: 600;
  }
  .info-troposphere > p:last-child {
    color: var(--text-contrast);
    padding: 0.2em 1.875em 0.2em 1.875em;
		margin-left: 0.9em;
		font-weight: 400;
    font-size: 1.5em;
  }
  .poi1 {
    //London
    position: absolute;
    bottom: 15.5%;
    left: 11%;
    z-index: 6;
  }
  .poi2 {
    //Amsterdam
    position: absolute;
    bottom: 16%;
    left: 15.5%;
    z-index: 6;
  }
  .poi3 {
    //Milan
    position: absolute;
    bottom: 11.5%;
    left: 23.5%;
    z-index: 6;
  }
  .poi4 {
    //Riga
    position: absolute;
    bottom: 18.5%;
    left: 28%;
    z-index: 6;
  }
  .poi5 {
    //New Delhi
    position: absolute;
    bottom: 5%;
    left: 38%;
    z-index: 6;
  }
  .poi6 {
    //Beijing
    position: absolute;
    bottom: 5%;
    right: 22%;
    z-index: 6;
  }
  .poi7 {
    //Seoul
    position: absolute;
    bottom: 8%;
    right: 18.3%;
    z-index: 6;
  }
  .poi8 {
    //Tokyo
    position: absolute;
    bottom: 8.5%;
    right: 12%;
    z-index: 6;
  }
  h2 {
    font-weight: 600;
    font-size: 1.25em;
    padding-bottom: 0.25em;
  }
  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.2em;
  }
}
@media only screen and (max-width: 320px) {
  /* mobile 320px wide */
  .container {
    background-image: linear-gradient(#1a1a1a, #1f34a4);
    max-width: 100vw;
    min-height: 1300px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    position: relative;

    .world-container {
      margin-top: 10em;
    }
    .globe {
      position: relative;
      align-content: center;
      width: 100vw;
      z-index: 5;
      bottom: -9em;
    }
    .circle1 {
      position: absolute;
      height: 20vh;
      width: 100vw;
      background-color: #6e99d7;
      border-radius: 50%;
      z-index: 4;
      transform: scale(2, 2.6);
      bottom: 1em;
    }
    .circle2 {
      position: absolute;
      height: 20vh;
      width: 100vw;

      background-color: #315fd9;
      border-radius: 50%;
      z-index: 3;
      opacity: 0.33;
      transform: scale(2, 2.6);
      bottom: 10em;
    }
    .circle3 {
      position: absolute;
      height: 20vh;
      width: 100vw;
      background-color: #243faa;
      border-radius: 50%;
      z-index: 2;
      opacity: 0.15;
      transform: scale(2, 2.6);
      bottom: 20em;
    }
    .circle4 {
      position: absolute;
      height: 20vh;
      width: 100vw;
      background-color: #1f34a4;
      border-radius: 50%;
      z-index: 1;
      opacity: 0.04;
      transform: scale(3, 5);
      bottom: 50em;
    }
    .satellite {
      position: absolute;
      width: 15.625em;
      height: 7.375em;
      z-index: 6;
      top: 5em;
      transform: scaleX(-1);
    }
    .textbox1 {
      position: relative;
      width: 95%;
      font-size: 1rem;
      padding: 1rem;
      box-shadow: 0 0 1rem 0.005rem black;
      background-color: var(--text-box);
      border-radius: 25px;
      color: var(--text-contrast);
      z-index: 6;
      transform: translate(0, -25%);
      margin: auto;
    }
    .textbox2 {
      position: relative;
      width: 95%;
      font-size: 1rem;
      padding: 1rem;
      box-shadow: 0 0 1rem 0.005rem black;
      background-color: var(--text-box);
      border-radius: 25px;
      color: var(--text-contrast);
      z-index: 6;
      margin: auto;
      top: 0;
      right: 0;
      transform: translate(0, -15%);
    }
    .textbox3 {
      position: relative;
      width: 95%;
      font-size: 1rem;
      padding: 1rem;
      box-shadow: 0 0 1rem 0.005rem black;
      background-color: var(--text-box);
      border-radius: 25px;
      color: var(--text-contrast);
      z-index: 6;
      top: 0;
      right: 0;
      margin: auto;
    }
    .arrow {
      position: relative;
      height: 7.2em;
      transform: translate(850%, 674%);
      z-index: 6;
      top: 0;
      left: 0;
    }
    .bigCloud {
      position: absolute;
      top: 90em;
      right: 4em;
      z-index: 6;
      transform: rotate(9deg);
    }
    .smallCloud {
      position: absolute;
      top: 95em;
      transform: rotate(-10deg);
      left: 3em;
      z-index: 6;
    }
    .info-troposphere {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      transform: translate(68%, 78%);
      z-index: 6;
    }
    .info-troposphere > p:first-child {
      background-color: var(--text-contrast);
      padding: 0.2em 1.875em 0.2em 1.875em;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
    }
    .info-troposphere > p:last-child {
      color: var(--text-contrast);
      padding: 0.2em 1.875em 0.2em 1.875em;
      font-size: 1rem;
      text-align: center;
    }
    .poi1 {
      //London
      visibility: hidden;
    }
    .poi2 {
      //Amsterdam
      visibility: hidden;
    }
    .poi3 {
      //Milan
      visibility: hidden;
    }
    .poi4 {
      //Riga
      visibility: hidden;
    }
    .poi5 {
      //New Delhi
      visibility: hidden;
    }
    .poi6 {
      //Beijing
      visibility: hidden;
    }
    .poi7 {
      //Seoul
      visibility: hidden;
    }
    .poi8 {
      //Tokyo
      visibility: hidden;
    }
    h2 {
      font-weight: 600;
      font-size: 1.3rem;
      padding-bottom: 0.25em;
    }
    p {
      font-weight: 400;
			line-height: 1.2em;
			font-size: 1.3rem;
    }
  }
}
</style>
