<template>
  <div class="sentinel">
    <div class="img-wrapper">
      <img src="@/assets/img/earth.svg" alt="earth" />
    </div>
    <div class="satellite">
      <img
        class="satellite-img"
        src="@/assets/img/satellite.svg"
        alt="satellite"
      />
      <p class="tag">Sentinel-5 satellite</p>
      <p class="altitude">824km altitude</p>
    </div>
    <div class="satellite-info">
      <p>
        Sentinel-5 is a satellite launched with a purpose to monitor air
        pollution in the atmosphere. Using ultraviolet waves, it's able to
        detect nitrogen dioxide (NO2).
      </p>
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
    &::after,
    &::before {
      background-color: var(--space-blue-opacity);
      width: 20vw;
      height: 20vw;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      content: "";
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
    font-weight: 600;
    img {
      width: 500px;
    }
  }
  .altitude {
    align-self: center;
    margin-top: 1rem;
		font-size: 1.5em;
		font-weight: 400;
    color: var(--text-contrast);
  }
  .satellite-info {
    position: absolute;
    z-index: 2;
    margin-right: 10%;
    background-color: var(--text-box);
    box-shadow: 0 0 1rem 0.005rem black;
    padding: 1.75rem 7.5rem 1.75rem 2rem;
    width: 50.75rem;
    font-size: 1.75em;
    border-radius: 40px;
    color: var(--text-contrast);
    transform: translate(-28%, 150%);
  } .satellite-info > p {
		font-weight: 400;
		font-size: 1em;
	}
}
@media only screen and (max-width: 320px) {
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
      &::after,
      &::before {
        background-color: var(--space-blue-opacity);
        width: 20vw;
        height: 20vw;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        content: "";
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
      right: 5%;
      top: -5%;
      z-index: 100;
      display: flex;
      flex-direction: column;
      width: 8em;
    }
    .tag {
      margin-top: 1em;
      padding: 0.5rem 2.5rem 0.5rem 2.5rem;
      background-color: var(--text-contrast);
      border-radius: 25px;
      align-self: center;
      font-size: 1em;
      font-weight: 600;
      transform: translate(-32%, -1020%);
      width: 15em;
      img {
        width: 500px;
        background-color: red;
      }
    }
    .altitude {
      align-self: center;
      margin-top: 1rem;
      font-size: 1em;
      color: var(--text-contrast);
			transform: translate(-25%, -1060%);
			padding: 0.5rem 2.5rem 0.5rem 2.5rem;
			width: 15em;
    }
    .satellite-info {

      z-index: 6;

      background-color: var(--text-box);
      box-shadow: 0 0 1rem 0.005rem black;
      padding: 1rem;
      width: 95%;
      font-size: 1em;
      border-radius: 25px;
      color: var(--text-contrast);
			transform: translate(5%, 215%);
    }
  }
  .satellite-img {
    position: relative;
    transform: rotate(-38deg);
    right: 61%;
  }
}
</style>
