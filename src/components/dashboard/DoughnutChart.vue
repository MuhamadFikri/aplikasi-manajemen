<script>
import { Doughnut } from "../../plugins/baseChart.js";
export default {
  extends: Doughnut,
  data() {
    return {
      labels: ["Toko Satu", "Toko Dua", "Toko Tiga", "Toko Empat", "Toko Lima"],
      bgColors: ["#41B883", "#E46651", "#00D8FF", "#DD1B16", "#f87979"],
      car_data: [40, 20, 80, 10, 61]
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.bgColors,
            data: this.car_data
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
