<template>
  <v-layout>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 v-for="(gudang, i) in pergudangan" :key="i" @click="goto_detail(gudang.id)">
            <v-card color="amber" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{gudang.nama}}</div>
                  <span>{{gudang.alamat}}</span>
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
  name: "baranggudang",
  data() {
    return {
      pergudangan: [
        {
          id: 1,
          nama: "GUDANG A",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 2,
          nama: "GUDANG B",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 3,
          nama: "GUDANG C",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 4,
          nama: "GUDANG D",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        },
        {
          id: 5,
          nama: "GUDANG E",
          alamat: "Jalan Nama Jalan, No. 1, Nama Kota"
        }
      ]
    };
  },
  methods: {
    goto_detail(param_id) {
      this.$router.push({
        name: "pbgudang",
        params: { id: param_id }
      });
    }
  }
};
</script>
