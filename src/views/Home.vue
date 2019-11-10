<template>
  <v-layout text-left wrap>
    <v-card
      v-for="card in cards"
      :key="card.id"
      class="mx-auto mt-5"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ card.id }}</div>
          <v-list-item-title class="headline mb-1"
            >Card {{ card.name }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ card.desc }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn :to="'/card/' + card.id" text>Open</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    }
  }
};
</script>
