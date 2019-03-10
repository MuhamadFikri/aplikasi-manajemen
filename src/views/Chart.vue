<template>
  <v-container>
    <v-flex>
      <v-card>
        <v-container>
          <h1 class="primary-title">{{title}}</h1>
          <v-layout row grow class="hidden-md-and-down" justify-space-around>
            <v-flex xs12 lg5>
              <bar-chart></bar-chart>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 lg5>
              <line-chart></line-chart>
            </v-flex>
          </v-layout>
          <v-layout row grow class="hidden-md-and-down" justify-space-around>
            <v-flex xs12 lg5>
              <donut-chart></donut-chart>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 lg5>
              <pie-chart></pie-chart>
            </v-flex>
          </v-layout>
          <template class="hidden-sm-and-up">
            <v-layout row class="hidden-sm-and-up">
              <v-flex xs12>
                <bar-chart></bar-chart>
              </v-flex>
            </v-layout>
            <v-layout row class="hidden-sm-and-up">
              <v-flex xs12>
                <line-chart></line-chart>
              </v-flex>
            </v-layout>
            <v-layout row class="hidden-sm-and-up">
              <v-flex xs12>
                <donut-chart></donut-chart>
              </v-flex>
            </v-layout>
            <v-layout row class="hidden-sm-and-up">
              <v-flex xs12>
                <pie-chart></pie-chart>
              </v-flex>
            </v-layout>
          </template>
        </v-container>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import LineChart from "@/components/dashboard/LineChart.vue";
import BarChart from "@/components/dashboard/BarChart.vue";
import PieChart from "@/components/dashboard/PieChart.vue";
import DonutChart from "@/components/dashboard/DoughnutChart.vue";
// import TwitterCard from "./dashboard/TwitterCard.vue";
export default {
  name: "dashboard",
  components: {
    DonutChart,
    PieChart,
    BarChart,
    "line-chart": LineChart
  },
  data() {
    return {
      title: "Laporan Transaksi"
    };
  }
};
</script>