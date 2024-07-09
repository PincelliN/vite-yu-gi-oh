<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from "./store"
import Loading from './components/Loading.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    Loading

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios.
        get(store.apiUrl)
        .then(res => {
          console.log(res.data.data);
          store.cardList = res.data.data;
          store.loading = false;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCards()
  }
}
</script>

<template class="container">
  <div v-if="!store.loading">
    <AppHeader />
    <AppMain />
  </div>

  <Loading v-else />

</template>


<style lang="scss">
@use './styles/general.scss'
</style>
