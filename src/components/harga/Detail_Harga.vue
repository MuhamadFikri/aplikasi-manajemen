<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-data-table :headers="headers" :items="barang" class="elevation-1">
            <template v-slot:items="data">
              <td>{{ data.item.id }}</td>
              <td>{{ data.item.nama }}</td>
              <td>{{ data.item.satuan }}</td>
              <td>{{ data.item.kategori }}</td>
              <td>{{ data.item.harga }}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-container fluid>
            <v-layout row wrap justify-space-between>
              <v-spacer></v-spacer>
              <v-flex xs8 md8 lg8>
                <v-text-field
                  ref="margin"
                  type="number"
                  min="0"
                  v-model="margin"
                  label="Biaya Tambahan"
                ></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs2 md2 lg2>
                <v-btn color="success" @click="simpanMargin()">
                  <span>Simpan</span>
                </v-btn>
              </v-flex>
              <v-spacer></v-spacer>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      margin: 0,
      headers: [
        {
          text: "ID Barang",
          value: "id"
        },
        { text: "Nama Barang", value: "nama" },
        { text: "Satuan Barang", value: "satuan" },
        { text: "Kategori", value: "kategori" },
        { text: "Harga Awal", value: "harga" }
      ],
      barang: [
        {
          id: 1,
          nama: "Pisang",
          satuan: "KG",
          kategori: "Makanan",
          harga: 6000
        },
        {
          id: 2,
          nama: "Anggur",
          satuan: "KG",
          kategori: "Makanan",
          harga: 6000
        },
        {
          id: 3,
          nama: "Pepaya",
          satuan: "KG",
          kategori: "Makanan",
          harga: 6000
        },
        {
          id: 4,
          nama: "Nanas",
          satuan: "KG",
          kategori: "Makanan",
          harga: 6000
        },
        {
          id: 5,
          nama: "Durian",
          satuan: "KG",
          kategori: "Makanan",
          harga: 6000
        }
      ]
    };
  },
  created() {
    console.log(this.$route.params.id);
  },
  methods: {
    simpanMargin() {
      this.barang.forEach(data => {
        data.harga += parseInt(this.margin);
      });
    }
  }
};
</script>