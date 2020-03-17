import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    remotesList: [
      {
        _id: 0,
        alias: 'my alias 1',
        url: 'http://localhost:9090',
        interval: 10
      },
      {
        _id: 1,
        alias: 'my alias 2',
        url: 'http://localhost:9091',
        interval: 12
      },
      {
        _id: 2,
        alias: 'my alias 3',
        url: 'http://localhost:9092',
        interval: 14
      },
      {
        _id: 3,
        alias: 'my alias 4',
        url: 'http://localhost:9093',
        interval: 16
      }
    ]
  },
  mutations: {
    saveRemote: (state, remote) => {
      const index = state.remotesList.findIndex(
        ({ _id }) => _id === remote._id
      );
      remote.url = !remote.url.startsWith('http://')
        ? `http://${remote.url}`
        : remote.url;
      if (index >= 0) {
        state.remotesList[index] = remote;
      } else {
        remote._id = Date.now();
        state.remotesList.unshift(remote);
      }
    },
    deleteRemote: (state, id) => {
      state.remotesList = state.remotesList.filter(item => item._id != id);
    }
  },
  actions: {},
  getters: {
    allRemotes: state => state.remotesList,
    remote: state => id => state.remotesList.find(({ _id }) => _id === +id)
  }
});
