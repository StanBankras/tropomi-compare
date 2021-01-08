<template>
  <div class="container">
    <div class="world-container">
			<div class="info-troposphere">
				<p>Troposhpere</p>
				<p>0-12km altitude</p>
			</div>
			<img class="bigCloud" src="@/assets/img/big-cloud.svg" alt="big cloud">
			<img class="smallCloud" src="@/assets/img/small-cloud.svg" alt="small cloud">
			<img class="satellite" src="@/assets/img/satellite.svg" alt="satellite">
			<img class="arrow" src="@/assets/img/yellow-arrow.svg" alt="arrow">
			<p class="textbox1">Why measure NO2?
			NO2 is a gas with a short life span of only a couple of hours, this
			makes it easy to monitor the source of the pollution. Every time
			fossil fuels are burned, NO2 will be emitted into the air.
			This way it's easy to monitor where the most emissions are
			and what the possible causes can be.</p>
			<p class="textbox2">Where does NO2 reside?
			NO2 resides in both the troposphere and the stratosphere,
			we will only be monitoring the troposphere.
			In the troposphere the changes are mostly the result
			of human activities.</p>
			<p class="textbox3">Comparing cities in times of Covid-19.
			Because of Covid-19, a lot of normal human activities
			have been suspended. This suspension had a lot of
			impact on the NO2 emissions. </p>
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <!-- <img class="circle1" src="@/assets/img/earth-map.svg" alt="map of earth" /> -->
      <img class="globe" src="@/assets/img/earth-map.svg" alt="map of earth" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(#1A1A1A, #1f34a4);
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
	.satellite{
		position: absolute;
		width: 15.625em;
		height: 9.375em;
		z-index: 6;
		top:18em;
		transform: scaleX(-1);
	}
	.textbox1{
		position: absolute;
		width: 30em;
		font-size: 1.875rem;
		padding: 1.75rem 7.5rem 1.75rem 2rem;
		box-shadow: 0 0 1rem 0.005rem black;
		background-color: var(--text-box);
		border-radius: 40px;
		color: var(--text-contrast);
		z-index: 6;
		margin-left: 2em;
		transform: translate(0,70%);
		// top:700px;
	}
	.textbox2{
		position: absolute;
		width: 30em;
		font-size: 1.875rem;
		padding: 1.75rem 7.5rem 1.75rem 2rem;
		box-shadow: 0 0 1rem 0.005rem black;
		background-color: var(--text-box);
		border-radius: 40px;
		color: var(--text-contrast);
		z-index: 6;
		margin-left: 2em;
		top:38em;
		right:0.5em;
	}
	.textbox3{
		position: absolute;
		width: 30em;
		font-size: 1.875rem;
		padding: 1.75rem 7.5rem 1.75rem 2rem;
		box-shadow: 0 0 1rem 0.005rem black;
		background-color: var(--text-box);
		border-radius: 40px;
		color: var(--text-contrast);
		z-index: 6;
		margin-left: 2em;
		top:64.5em;
		right:9em;
	}
	.arrow{
		position: absolute;
		height: 21em;
		transform: translate(1300%, 80%);
		z-index: 6;
		top:55.5em;
		left:5em;
	}
	.bigCloud{
		position: absolute;
		top: 90em;
		right:4em;
		z-index: 6;
		transform: rotate(9deg);
	}
	.smallCloud{
		position: absolute;
		top:95em;
		transform: rotate(-10deg);
		left: 3em;
		z-index: 6;
	}
	.info-troposphere{
		position: absolute;
		top:82em;
		left:12em;
		z-index: 6;

	}
	.info-troposphere > p:first-child{
		color: var(--text-contrast);
		padding: 0.2em 1.875em 0.2em 1.875em;
		border-radius: 25px;
		font-size: 2rem;

	}
	.info-troposphere > p:last-child{
		color: var(--text-contrast);
		padding: 0.2em 1.875em 0.2em 1.875em;
		font-size: 1.725rem;
	}
}
</style>
