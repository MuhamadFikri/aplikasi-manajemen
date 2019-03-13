<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
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
      <v-flex xs12>
        <v-card>
          <v-container>
            <h1 class="title py-2">Selisih Pendapatan Pekan Lalu</h1>
            <p class="subheading font-weight-bold">
              Selisih :
              <span
                class="font-weight-medium"
                :class="untung ? 'green--text': 'red--text'"
              >Rp. {{selisih}}</span>
            </p>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
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
      title: "Laporan Transaksi",
      income_last_week: 2500000,
      income_this_week: 2000000,
      untung: false,
      selisih: 0
    };
  },
  created() {
    return new Promise(resolve => {
      if (resolve);
      this.selisih = this.income_this_week - this.income_last_week;
      if (this.selisih > 0) this.untung = true;
      else this.untung = false;
    });
  }
};
</script>

<style>
.py-2 {
  padding: 8px 0px;
}

.px-2 {
  padding-left: 10px;
}
</style>
