<script>
import { Line } from "../../plugins/baseChart.js";

export default {
  extends: Line,
  data() {
    return {
      data_chart: [40, 59, 45, 50, 39],
      label: "Pendapatan Mingguan"
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: this.label,
            backgroundColor: "#42a5f5",
            data: this.data_chart
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>

