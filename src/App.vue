<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn to="/" text>Home</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/about" text>About</v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  created() {
    this.setCards();
  },
  methods: {
    setCards() {
      this.$store.dispatch("setCards", "/data/cards.json");
    }
  }
};
</script>
