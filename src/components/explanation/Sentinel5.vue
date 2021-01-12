<template>
  <div class="sentinel">
    <div class="img-wrapper">
      <img src="@/assets/img/earth.svg" alt="earth">
    </div>
    <div class="satellite">
      <img src="@/assets/img/satellite.svg" alt="satellite">
      <p class="tag">Sentinel-5 satellite</p>
      <p class="altitude">824km altitude</p>
    </div>
    <div class="satellite-info">
      <p> Sentinel-5 is a satellite launched with a purpose to monitor air pollution in the atmosphere.
      Using ultraviolet waves, it's able to detect nitrogen dioxide (NO2). </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sentinel {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .img-wrapper {
      position: relative;
      width: 40vw;
      height: 40vw;
      background-color: var(--space-blue-opacity);
      border-radius: 50%;
      img {
        width: 250px;
        z-index: 10;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &::after, &::before {
        background-color: var(--space-blue-opacity);
        width: 20vw;
        height: 20vw;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        content: '';
        z-index: 2;

      }
      &::before {
        width: 30vw;
        height: 30vw;
        z-index: 1;
      }
    }
    .satellite {
      position: absolute;
      right: 10%;
      top: 0%;
      z-index: 100;
      display: flex;
      flex-direction: column;

      }
      .tag {
        margin-top: 1em;
        padding: 0.5rem 2rem 0.5rem 2rem;
        background-color: var(--text-contrast);
        border-radius: 30px;
        align-self: center;
				font-size: 2em;
				font-weight:600;
      img {
        width: 500px;
      }

    }
    .altitude{
      align-self: center;
      margin-top: 1rem;
      font-size: 1.5em;
      color: var(--text-contrast)

    }
    .satellite-info{
      position: absolute;
      z-index: 2;
      margin-right:10%;
      background-color: var(--text-box);
      box-shadow: 0 0 1rem 0.005rem black;
      padding: 1.75rem 7.5rem 1.75rem 2rem;
      width: 50.75rem;
      font-size: 1.75em;
      border-radius: 40px;
      color: var(--text-contrast);
      transform: translate(-28%, 150%);

    }
	}
	@media only screen and (max-width: 600px) {
	.sentinel {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .img-wrapper {
      position: relative;
      width: 40vw;
      height: 40vw;
      background-color: var(--space-blue-opacity);
      border-radius: 50%;
      img {
        width: 250px;
        z-index: 10;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &::after, &::before {
        background-color: var(--space-blue-opacity);
        width: 20vw;
        height: 20vw;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        content: '';
        z-index: 2;

      }
      &::before {
        width: 30vw;
        height: 30vw;
        z-index: 1;
      }
    }
    .satellite {
      position: absolute;
      right: 10%;
      top: 0%;
      z-index: 100;
      display: flex;
			flex-direction: column;
			width: 10em;

      }
      .tag {
        margin-top: 1em;
        padding: 0.5rem 2rem 0.5rem 2rem;
        background-color: var(--text-contrast);
        border-radius: 30px;
        align-self: center;
				font-size: 2em;
				font-weight:600;
      img {
        width: 500px;
      }

    }
    .altitude{
      align-self: center;
      margin-top: 1rem;
      font-size: 1.5em;
      color: var(--text-contrast)

    }
    .satellite-info{
      position: absolute;
      z-index: 2;
      margin-right:10%;
      background-color: var(--text-box);
      box-shadow: 0 0 1rem 0.005rem black;
      padding: 1.75rem 7.5rem 1.75rem 2rem;
      width: 50.75rem;
      font-size: 1.75em;
      border-radius: 40px;
      color: var(--text-contrast);
      transform: translate(-28%, 150%);

    }
	}
	}
</style>
