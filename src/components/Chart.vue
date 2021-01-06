<template>
  <canvas id="myChart"></canvas>
  <canvas id="myChart2"></canvas>
</template>

<script>
  import Chart from 'chart.js';

  export default {
    async mounted () {
      const data = await fetch('./json/no2/milan.json').then(res => res.json());
      const dates = data.map(d => d.date.value).filter(d => new Date(d).getFullYear() === 2020).map(d => this.$date(new Date(d)).format('DD-MM-YY'));
      let dataValues = [];

      for(let i = 0; i + Math.floor(data.length / 2) < data.length; i++) {
        let a = data[i].number;
        let b = data[i + Math.floor(data.length / 2)].number;
        if(a < 0) a = 0;
        if(b < 0) b = 0;
        dataValues.push((b - a) / a * 100);
      }

      var ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: dates,
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: dataValues
              }]
          },

          // Configuration options go here
          options: {}
      });

      var ctx2 = document.getElementById('myChart2').getContext('2d');
      new Chart(ctx2, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: data.map(d => new Date(d.date.value)).map(d => this.$date(d).format('DD-MM-YY')),
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: data.map(d => d.number)
              }]
          },

          // Configuration options go here
          options: {}
      });
    }
  }
</script>