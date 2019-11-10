<template>
  <div class="card">
    <v-btn
      v-show="$route.params.childId && !card.childs"
      :to="'/card/' + card.id"
      text
      >Back</v-btn
    >
    <h3>id: {{ card.id }}</h3>
    <h2>Name: {{ card.name }}</h2>
    <span>Description: {{ card.desc }}</span>

    <v-card
      v-for="child in card.childs"
      :key="child.id"
      class="mx-auto mt-5"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ child.id }}</div>
          <v-list-item-title class="headline mb-1"
            >Card {{ child.name }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ child.desc }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn :to="'/card/' + card.id + '/' + child.id" text>Open</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {};
  },
  computed: {
    card() {
      var card = null;
      var id = this.$route.params.id;
      var childId = this.$route.params.childId;

      id = id ? id : 1;
      if (this.$store.getters.getCards) {
        card = this.$store.getters.getCardById(
          this.$store.getters.getCardById(id) ? id : 1
        );

        if (!childId || !this.$store.getters.getCardChild(id, childId)) {
          return card;
        }

        return this.$store.getters.getCardChild(id, childId);
      }

      return {};
    }
  }
};
</script>
