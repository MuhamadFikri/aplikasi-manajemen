<template>
  <v-layout>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 v-for="(k, i) in karyawan" :key="i">
            <v-card color="primary" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img :src="k.foto" height="125px" contain></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{k.nama}}</div>
                      <div class="headline">{{k.NIK}}</div>
                      <div>{{k.alamat}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn flat dark>
                  <span>CP: {{k.cp}}</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn flat dark>
                  <span>Gaji: {{k.gaji}}</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text style="height: 100px; position: relative">
        <v-btn absolute dark fab top right color="pink">
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "karyawan",
  data() {
    return {
      karyawan: [
        {
          id: 1,
          NIK: "12345678",
          foto: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          nama: "Palui",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota",
          gaji: 200000
        },
        {
          id: 2,
          NIK: "12345678",
          foto: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          nama: "Waluh",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota",
          gaji: 300000
        },
        {
          id: 3,
          NIK: "12345678",
          foto: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          nama: "Gober",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota",
          gaji: 400000
        },
        {
          id: 4,
          NIK: "12345678",
          foto: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          nama: "Jahil",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota",
          gaji: 500000
        },
        {
          id: 5,
          NIK: "12345678",
          foto: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          nama: "Bless",
          cp: "08123456789",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota",
          gaji: 600000
        }
      ]
    };
  }
};
</script>
