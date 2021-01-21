<template>
  <div class="container">
    <h1>Before you make use of our comparison tool...</h1>
    <p class="introText">
      Let us introduce you to the mechanics of it or
      <a @click.prevent="$emit('scrollTo', '#compare')" href="#compare"> go straight to the charts </a>
    </p>

		<div class="textBox">
			<h2>Hover over the chart</h2>
			<p>Whenever you hover over one of the charts with your mouse, the other
				one will follow along with the week you are currently hovering on.
			</p>
		</div>

		<img src="@/assets/img/animate1.gif" alt="slider animation">

		<div class="textBox">
			<h2>Select a COVID-19 measure</h2>
			<p>You can choose which measure you want to compare the cities
				with. The chart will automatically zoom in based on the length
				of each measure.
			</p>
		</div>

		<img src="@/assets/img/animate2.gif" alt="filter animation">

		<p class="orText">Or...</p>

		<div class="textBox">
			<h2>Click on the colourful bars</h2>
			<p>They do the exact same thing as when you click on the buttons.</p>
		</div>

		<img src="@/assets/img/animate3.gif" alt="filter animation">

		<div class="textBox">
			<h2>See the amount of measures taken</h2>
			<p>The darker the bar, the more measures have been taken within
				that time period. When you hover over a bar, you can see which
				measures were active in that period.
			</p>
		</div>

		<img src="@/assets/img/animate4.gif" alt="corona measure bars animation">

		<div class="textBox">
			<h2>Close in on the data</h2>
			<p>Filter out the data you don't need by clicking on the labels.
			</p>
		</div>

		<img src="@/assets/img/animate5.gif" alt="corona label toggle animation">
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
	color: var(--text-box);
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
	font-size: 1em;
	font-weight: 400;
}
h2{
	margin-bottom: 0.1em;
	font-size: 1.25em;
	font-weight: 600;
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
a{
	color: var(--text-box);
}
a:hover{
	color:teal;
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
