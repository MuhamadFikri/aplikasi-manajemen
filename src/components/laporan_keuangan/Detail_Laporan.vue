<template>
  <v-container>
    <h1 class="font-weight-regular">TOKO A</h1>
    <v-data-table :headers="headers" :items="pertokoan" class="elevation-1">
      <template v-slot:items="data">
        <td>{{ data.item.nama }}</td>
        <td>{{ data.item.tanggal }}</td>
        <td>{{ data.item.bruto }}</td>
        <td>{{ data.item.nett }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "laporankeuangan",
  data() {
    return {
      headers: [
        { text: "Nama Toko", value: "nama" },
        { text: "Tanggal", value: "tanggal" },
        { text: "Bruto", value: "bruto" },
        { text: "Netto", value: "nett" }
      ],
      pertokoan: [
        {
          id: 1,
          nama: "TOKO A",
          tanggal: "29 September 2019",
          bruto: 20000,
          nett: 18000
        },
        {
          id: 2,
          nama: "TOKO B",
          tanggal: "29 September 2019",
          bruto: 20000,
          nett: 18000
        },
        {
          id: 3,
          nama: "TOKO C",
          tanggal: "29 September 2019",
          bruto: 20000,
          nett: 18000
        },
        {
          id: 4,
          nama: "TOKO D",
          tanggal: "29 September 2019",
          bruto: 20000,
          nett: 18000
        },
        {
          id: 5,
          nama: "TOKO E",
          tanggal: "29 September 2019",
          bruto: 20000,
          nett: 18000
        }
      ]
    };
  }
};
</script>