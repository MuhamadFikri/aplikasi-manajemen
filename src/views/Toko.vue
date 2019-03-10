<template>
  <v-layout>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 v-for="(toko, i) in pertokoan" :key="i">
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img :src="toko.foto" height="125px" contain></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{toko.nama}}</div>
                      <div>{{toko.alamat}}</div>
                      <div>CP: ({{toko.cp}})</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">Rating Toko
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-btn absolute dark fab top right color="pink">
          <v-icon>add</v-icon>
        </v-btn>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "toko",
  data() {
    return {
      pertokoan: [
        {
          id: 1,
          foto: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          nama: "TOKO A",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 2,
          foto: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          nama: "TOKO B",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 3,
          foto: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          nama: "TOKO C",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 4,
          foto: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          nama: "TOKO D",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 5,
          foto: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          nama: "TOKO E",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        }
      ]
    };
  }
};
</script>
