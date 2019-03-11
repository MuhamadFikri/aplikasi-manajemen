<template>
  <v-container>
    <v-flex>
      <v-card>
        <v-container>
          <h1 class="primary-title">{{title}}</h1>
          <v-layout row grow justify-space-around>
            <v-flex xs12 lg12>
              <line-chart></line-chart>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import LineChart from "@/components/dashboard/LineChart.vue";
export default {
  name: "dashboard",
  components: {
    "line-chart": LineChart
  },
  data() {
    return {
      title: "Laporan Transaksi"
    };
  }
};
</script>