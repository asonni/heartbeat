<template>
  <v-list two-line v-if="allRemotes.length">
    <v-subheader>Remotes list</v-subheader>
    <transition-group name="list" type="transition">
      <hb-remote
        class="list-item"
        :remote="remoteItem"
        v-for="remoteItem in allRemotes"
        :key="remoteItem._id"
      />
    </transition-group>
  </v-list>
  <v-card v-else>
    <v-card-text>
      Please add remotes to monitor
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex';
import HbRemote from './Remote.vue';

export default {
  name: 'RemotesList',
  components: {
    HbRemote
  },
  computed: {
    ...mapGetters(['allRemotes'])
  }
};
</script>
<style lang="scss">
.list-item {
  transition: all 1s;
  /* display: block; */
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
