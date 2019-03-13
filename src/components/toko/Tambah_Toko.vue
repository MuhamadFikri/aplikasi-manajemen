<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="nama" :rules="nameRules" label="Nama Toko" required></v-text-field>

      <v-text-field
        v-model="nomor_hp"
        :rules="[v => !!v || 'Nomor Tidak Boleh Kosong']"
        label="Contact Person"
        required
      ></v-text-field>

      <v-textarea
        v-model="alamat"
        :rules="[v => !!v || 'Alamat Tidak Boleh Kosong']"
        label="Alamat Toko"
        auto-grow
        required
      ></v-textarea>

      <v-btn type="submit" :disabled="!valid" color="success" @click="validate">Simpan</v-btn>

      <v-btn color="error" @click="reset">Reset Data</v-btn>

      <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
    </v-form>
    <v-snackbar v-model="snackbar" multi-line :timeout="timeout" top vertical>
      {{ snackbar_message }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    snackbar: false,
    timeout: 6000,
    nama: "",
    alamat: "",
    nomor_hp: "",
    snackbar_message: "Tidak ada aksi",
    nameRules: [
      v => !!v || "Name is required"
      // v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    not_empty: [v => !!v || "Alamat tidak boleh Kosong"]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar_message = "Data sudah di Submit";
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>