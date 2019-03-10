<template>
  <v-card height="200px">
    <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" absolute dark shift>
      <v-btn dark>
        <span>Gudang</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Toko</span>
        <v-icon>music_note</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 2
    };
  },

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
      }
    }
  }
};
</script>