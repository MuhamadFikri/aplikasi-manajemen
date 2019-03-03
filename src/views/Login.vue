<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg4>
          <v-card class="elevation-12">
            <v-container>
              <v-form @submit.prevent="login()" lazy-validation>
                <v-text-field v-model="username" label="Nama Pengguna" :rules="[aturan.is_isset]"></v-text-field>
                <v-text-field
                  v-model="password"
                  type="password"
                  label="Kata Sandi"
                  :rules="[aturan.is_isset]"
                ></v-text-field>
                <v-btn type="submit" color="info" block>Masuk</v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="snackbar" top :timeout="timeout">
      {{ text }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-content>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      snackbar: false,
      timeout: 6000,
      text: "Tidak ada status error",
      username: "",
      password: "",
      aturan: {
        is_isset: v => !!v || "Form tidak boleh kosong"
      }
    };
  },
  methods: {
    login() {
      if (this.username === "" || this.password === "") {
        this.text = "username atau password tidak boleh kosong";
        this.snackbar = true;
      }
    }
  }
};
</script>
