<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase white--text">
        <div class="hidden-sm-and-down">
          <span class="font-weight-bold">Manajemen</span>
          <span class="font-weight-light">Perusahaan</span>
        </div>
        <div class="hidden-md-and-up">
          <span class="font-weight-bold">M</span>
          <span class="font-weight-light">P</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small flat @click="refresh()">
        <v-icon>refresh</v-icon>&nbsp;Segarkan
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Super Admin</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" route :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "home", link: "/chart" },
        {
          title: "Persediaan Barang",
          icon: "dashboard",
          link: "/persediaanbarang"
        },
        {
          title: "Laporan Keuangan",
          icon: "dashboard",
          link: "/laporankeuangan"
        },
        {
          title: "Laporan Barang",
          icon: "dashboard",
          link: "/laporanbarang"
        },
        { title: "Harga", icon: "dashboard", link: "/harga" },
        { title: "Karyawan", icon: "dashboard", link: "/karyawan" },
        { title: "Toko", icon: "dashboard", link: "/toko" }
      ]
    };
  },
  methods: {
    refresh() {
      location.reload();
    }
  }
};
</script>
