<template>
  <div class="header">
    <img src="@/assets/img/earth-stars.svg" alt="earth">
    <div>
      <h1>Lock down climate change</h1>
      <p>How lockdown measures in Europe and Asia changed nitrogen dioxide emissions</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    background-color: var(--bg-dark);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 4rem;
      max-width: 200px;
    }
    h1 {
      color: var(--text-contrast);
    }
    p {
      color: var(--text-contrast);
      max-width: 30rem;
    }
  }
</style>
