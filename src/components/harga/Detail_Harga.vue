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