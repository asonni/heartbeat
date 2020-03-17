import Vue from 'vue';
import VueRouter from 'vue-router';
import RemotesList from '../components/RemotesList.vue';
import RemoteForm from '../components/RemoteForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'RemotesList',
    component: RemotesList
  },
  {
    path: '/remote',
    name: 'NewRemote',
    component: RemoteForm
  },
  {
    path: '/remote/:id',
    name: 'EditRemote',
    props: true,
    component: RemoteForm
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
