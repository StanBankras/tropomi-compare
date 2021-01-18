<template>
  <div class="header">
    <img src="@/assets/img/earth-stars.svg" alt="earth" />
    <div>
      <h1>Lock down air pollution</h1>
      <p>
        How lockdown measures in Europe and Asia changed nitrogen dioxide
        emissions
      </p>
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
    max-width: 600px;
  }
  h1 {
		color: var(--text-contrast);
		font-size: 2em;
  }
  p {
    color: var(--text-contrast);
		max-width: 30rem;
		font-size: 1.25em;
		line-height: 1.2em;
  }
}
@media only screen and (max-width: 320px) {
  .header {
    flex-direction: column;
    img {
      margin-right: 0;
      max-width: 200px;
    }
    h1,
    p {
      margin: 0.5em 5% 0 5%;
		}
		p{
			font-size: 1em;
		}
		h1 {
			margin: 1em 5% 0 5%;
		}
  }
}
</style>
