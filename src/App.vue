<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from "./store"
import Loading from './components/Loading.vue';
import AppSelect from './components/AppSelect.vue';
import AppCardScreen from './components/AppCardScreen.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppSelect,
    Loading,
    AppCardScreen

  },
  data() {
    return {
      store,
    }
  },
  methods: {

    getCards() {
      store.loading = true;

      let endPoint = store.apiUrl
      if (store.apiParam !== "0") {


        endPoint = store.apiFilter + store.apiParam;
      }
      axios.
        get(endPoint)
        .then(res => {
          console.log(res.data.data
          );
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
    <AppSelect class="mx-5 m-3" @filter="getCards" />
    <AppCardScreen />
    <AppMain />
  </div>

  <Loading v-else />

</template>


<style lang="scss">
@use './styles/general.scss'
</style>
