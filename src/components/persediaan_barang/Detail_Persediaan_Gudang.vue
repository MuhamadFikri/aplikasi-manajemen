<template>
  <v-container>
    <v-data-table :headers="headers" :items="barang" class="elevation-1">
      <template v-slot:items="data">
        <td>{{ data.item.id }}</td>
        <td>{{ data.item.nama }}</td>
        <td>{{ data.item.satuan }}</td>
        <td>{{ data.item.kategori }}</td>
        <td>{{ data.item.jumlah }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "dpgudang",
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Nama", value: "nama" },
        { text: "Satuan", value: "satuan" },
        { text: "Kategori", value: "kategori" },
        { text: "Jumlah", value: "jumlah" }
      ],
      barang: [
        {
          id: 1,
          nama: "Garam",
          satuan: "KG",
          kategori: Makanan,
          jumlah: 180
        },
        {
          id: 2,
          nama: "Pasir",
          satuan: "KG",
          kategori: Makanan,
          jumlah: 180
        },
        {
          id: 3,
          nama: "Beras",
          satuan: "KG",
          kategori: Makanan,
          jumlah: 180
        },
        {
          id: 4,
          nama: "Kurma",
          satuan: "KG",
          kategori: Makanan,
          jumlah: 180
        },
        {
          id: 5,
          nama: "Ketupat",
          satuan: "KG",
          kategori: Makanan,
          jumlah: 180
        }
      ]
    };
  }
};
</script>