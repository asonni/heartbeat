<template>
  <v-app dark>
    <v-card color="grey lighten-4" flat tile style="-webkit-app-region: drag;">
      <v-toolbar dark fixed dense>
        <v-toolbar-title>Hearthbeat</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-content>
      <v-container fluid class="pa-0">
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer dark fixed>
      <v-btn icon>
        <v-icon class="grey--text text-darken-3">
          mdi-cog
        </v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        fab
        top
        right
        absolute
        class="red"
        @click.prevent="$router.push('/remote')"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>
<script>
// import nw from 'nw';
// eslint-disable-next-line no-undef
// const win = nw.Window.get();

export default {
  data() {
    return {};
  },
  methods: {
    // onCloseWindow() {
    //   win.close();
    // }
  }
};
</script>
