<script>
import { Bar } from "../../plugins/baseChart.js";
export default {
  extends: Bar,
  data() {
    return {
      label: "Pendapatan Mingguan",
      data_chart: [40, 20, 12, 39, 19]
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: this.label,
            backgroundColor: "#f87979",
            // data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            data: this.data_chart
            // 3135452556
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
