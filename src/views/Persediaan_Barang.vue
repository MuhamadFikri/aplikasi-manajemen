<template>
  <div>
    <v-tabs v-model="tabs" fixed-tabs color="primary">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#mobile-tabs-2-1" class="white--text">
        <span>Gudang</span>
      </v-tab>

      <v-tab href="#mobile-tabs-2-2" class="white--text">
        <span>Toko</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item value="mobile-tabs-2-1">
        <barang-gudang/>
      </v-tab-item>
      <v-tab-item value="mobile-tabs-2-2">
        <barang-toko/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import BarangGudang from "@/components/persediaan_barang/Barang_Gudang.vue";
import BarangToko from "@/components/persediaan_barang/Barang_Toko.vue";

export default {
  name: "persediaanbarang",
  components: {
    BarangGudang,
    BarangToko
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