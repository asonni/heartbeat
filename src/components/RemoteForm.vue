<template>
  <div>
    <v-progress-linear indeterminate v-if="loading" />
    <form v-if="!loading">
      <v-card class="pa-2 elevation-0">
        <v-card-title>Remote</v-card-title>
        <v-card-text>
          <v-text-field
            autofocus
            suffix=" "
            label="Alias"
            v-model="remote.alias"
            prepend-icon="mdi-eye"
          />
          <v-text-field
            suffix=" "
            prefix="http://"
            :value="remote.url | hideProtocoal"
            @input="val => (remote.url = val)"
            prepend-icon="mdi-apple-icloud"
          />
          <v-text-field
            suffix="s"
            label="Interval"
            v-model="remote.interval"
            prepend-icon="mdi-timer"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="onCancel">Cancel</v-btn>
          <v-btn class="secondary" @click="onSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </div>
</template>
<script>
export default {
  name: 'RemoteForm',
  data() {
    return {
      loading: true,
      remote: {
        alias: '',
        url: '',
        interval: 10
      }
    };
  },
  created() {
    this.loading = false;
    const id = this.$route.params.id;
    if (id) {
      this.remote = { ...this.$store.getters.remote(id) };
    }
  },
  methods: {
    onCancel() {
      this.$router.push('/');
    },
    onSave() {
      this.$store.commit('saveRemote', this.remote);
      this.$router.push('/');
    }
  },
  filters: {
    hideProtocoal(value = '') {
      return value.replace('http://', '');
    }
  }
};
</script>
