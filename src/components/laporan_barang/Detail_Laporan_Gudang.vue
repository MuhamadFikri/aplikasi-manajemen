<template>
  <div>
    <v-tabs v-model="tabs" fixed-tabs color="primary">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#mobile-tabs-2-1" class="white--text">
        <span>Barang Masuk</span>
      </v-tab>

      <v-tab href="#mobile-tabs-2-2" class="white--text">
        <span>Barang Keluar</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item value="mobile-tabs-2-1">
        <barang-masuk/>
      </v-tab-item>
      <v-tab-item value="mobile-tabs-2-2">
        <barang-keluar/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import BarangMasuk from "@/components/laporan_barang/detail_laporan_gudang/Barang_Masuk.vue";
import BarangKeluar from "@/components/laporan_barang/detail_laporan_gudang/Barang_Keluar.vue";

export default {
  name: "detaillaporangudang",
  components: {
    BarangMasuk,
    BarangKeluar
  },
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    // back to homescreen
    bths() {
      this.$router.push({ name: "chartlist" });
    }
  }
};
</script>