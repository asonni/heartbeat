<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-icon>mdi-information</v-icon>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ remote.alias }}</v-list-item-title>
      <v-list-item-subtitle>{{ remote.url }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-layout>
        <v-switch class="pt-2"></v-switch>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" class="ml-2">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="`/remote/${remote._id}`">
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item>
            <v-list-item @click.prevent="onRemove(remote._id)">
              <v-list-item-title>Remove</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
export default {
  name: 'Remote',
  props: {
    remote: {
      type: Object,
      default() {
        return {
          alias: '',
          url: '',
          status: '-',
          _id: '',
          interval: 0,
          monitoring: true
        };
      }
    }
  },
  methods: {
    onRemove(id) {
      this.$store.commit('deleteRemote', id);
    }
  }
};
</script>
