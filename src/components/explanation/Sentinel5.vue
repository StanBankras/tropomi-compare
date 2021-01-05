<template>
  <div class="sentinel">
    <div class="img-wrapper">
      <img src="@/assets/img/earth.svg" alt="earth">
    </div>
    <div class="satellite">
      <img src="@/assets/img/satellite.svg" alt="satellite">
      <p class="tag">Sentinel-5 satellite</p>
      <p>824km altitude</p>
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
      top: 0;
      z-index: 100;
      display: flex;
      flex-direction: column;
      .tag {
        padding: 0.5rem;
        background-color: var(--text-contrast);
        border-radius: 30px;
      }
      img {
        width: 500px;
      }
    }
  }
</style>