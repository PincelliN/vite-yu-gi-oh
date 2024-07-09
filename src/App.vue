<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from "./store"

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,

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
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
