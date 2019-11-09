<template>
  <div class="card">
    <div v-if="child">
      <v-btn :to="'/card/' + id" text>Back</v-btn>
      <h2>Name: {{ child.name }}</h2>
      <span>Description: {{ child.desc }}</span>
    </div>
    <div v-else>
      <h3>id: {{ id }}</h3>
      <h2>Name: {{ name }}</h2>
      <span>Description: {{ desc }}</span>

      <v-card
        v-for="child in childs"
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
          <v-btn :to="'/card/' + id + '/' + child.id" text>Open</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      id: null,
      name: null,
      desc: null,
      childs: {},
      child: null
    };
  },
  mounted() {
    var id = this.$route.params.id;
    var childId = this.$route.params.childId;
    var card = this.$store.getters.getCardById(id ? id : 1);

    this.id = card.id;
    this.name = card.name;
    this.desc = card.desc;
    this.childs = card.childs;

    this.getChild(childId);
  },
  watch: {
    "$route.params.childId": function(childId) {
      this.getChild(childId);
    }
  },
  methods: {
    getChild(childId) {
      var child = this.childs[childId - 1];
      this.child = child ? child : null;
    }
  }
};
</script>
