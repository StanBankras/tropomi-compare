<template>
  <div class="container">
    <h1>Before you make use of our comparison tool...</h1>
    <p class="introText">
      Let us introduce you to the mechanics of it or
      <a href="#compare"> go straight to the charts </a>
    </p>

		<div class="textBox">
			<h2>Hover over the chart</h2>
			<p>Whenever you hover over one of the charts with your mouse, the other
				one will follow along with the week you are currently hovering over.
			</p>
		</div>

		<img src="@/assets/img/animate1.gif" alt="slider animation">

		<div class="textBox">
			<h2>Select a COVID-19 measurement</h2>
			<p>You can choose which measurement you want to compare the cities
				with. The chart will automatically zoom in based on the length
				of each measurement.
			</p>
		</div>

		<img src="@/assets/img/animate2.gif" alt="filter animation">

		<p class="orText">Or...</p>

		<div class="textBox">
			<h2>Click on the colourful bars</h2>
			<p>They do the exact same as you would when you click on the buttons.</p>
		</div>

		<img src="@/assets/img/animate3.gif" alt="filter animation">

		<div class="textBox">
			<h2>See the amount of measurements taken</h2>
			<p>The darker the bar, the more measurements have been taken within
				that same time period. When you hover over a bar, you can see which
				measurements were taken in that week.
			</p>
		</div>

		<img src="@/assets/img/animate4.gif" alt="corona measure bars">
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
	align-content: center;
}
img{
	width: 100%;
	max-width: 1600px;
}
h1{
	margin-top: 3em;
	text-align: center;
}
.introText {
  text-align: center;
	margin-top: 2em;
}
.container > div {
	padding: 1.75em 3.375em 1.75em 3.375em;
}
p{
	line-height: 1.2em;
}
h2{
	margin-bottom: 0.1em;
}
.textBox{
	margin: 6em 1em 0 1em;
	background-color: var(--text-box);
	color: var(--text-contrast);
	border-radius: 15px;
	width: 100%;
	max-width: 800px;
}
.orText{
	margin: 1em 1em 1em 1em;
	color: var(--text-box);
	font-weight: 700;
	font-size: 2em;
}

@media only screen and (max-width: 320px) {
	.container > div {
	padding: 1.75em 1em 1.75em 1em;
}

.textBox{
	margin: 3em 1em 0 1em;
	background-color: var(--text-box);
	color: var(--text-contrast);
	border-radius: 15px;
	width: 100%;
	max-width: 800px;
}
}
</style>
