<script>
import { Pie } from "../../plugins/baseChart.js";

export default {
  extends: Pie,
  data() {
    return {
      nama_bulan: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "Nopember",
        "Desember"
      ],
      bgColors: [
        "#41B883",
        "#E46651",
        "#00D8FF",
        "#DD1B16",
        "#41B883",
        "#E46651",
        "#00D8FF",
        "#DD1B16",
        "#41B883",
        "#E46651",
        "#00D8FF",
        "#DD1B16"
      ],
      pendapatan_bulanan: [40, 20, 80, 10, 45, 52, 14, 75, 12, 37, 46, 75]
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: this.nama_bulan,
        datasets: [
          {
            backgroundColor: this.bgColors,
            data: this.pendapatan_bulanan
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
