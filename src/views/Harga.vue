<template>
  <v-layout>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex>
            <v-card color="primary" class="white--text" @click="goto_utama(0)">
              <v-card-title primary-title>
                <div>
                  <div class="headline">HARGA POKOK BARANG</div>
                  <span>Informasi Semua Harga Barang</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 v-for="(toko, i) in pertokoan" :key="i" @click="goto_detail(toko.id)">
            <v-card color="purple" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{toko.nama}}</div>
                  <span>{{toko.alamat}}</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "harga",
  data() {
    return {
      pertokoan: [
        { id: 1, nama: "TOKO A", alamat: "Jalan Nama Jalan, No. 1, Nama Kota" },
        { id: 2, nama: "TOKO B", alamat: "Jalan Nama Jalan, No. 1, Nama Kota" },
        { id: 3, nama: "TOKO C", alamat: "Jalan Nama Jalan, No. 1, Nama Kota" },
        { id: 4, nama: "TOKO D", alamat: "Jalan Nama Jalan, No. 1, Nama Kota" },
        { id: 5, nama: "TOKO E", alamat: "Jalan Nama Jalan, No. 1, Nama Kota" }
      ]
    };
  },
  methods: {
    goto_detail(param_id) {
      this.$router.push({
        name: "detail",
        params: { id: param_id }
      });
    },
    goto_utama(param_id) {
      this.$router.push({
        name: "detail",
        params: { id: param_id }
      });
    }
  }
};
</script>
