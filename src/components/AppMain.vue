<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppSelect from './AppSelect.vue';
import Loading from './Loading.vue';
export default {
    name: "AppMain",
    components: {
        AppCard,
        AppSelect,
        Loading
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div v-if="!store.loading">

        <div class="row ">
            <AppSelect class="mx-5 m-3" />
            <AppCard class="d-flex justify-content-around p-3" v-for=" card in store.cardList" :key="card.id"
                :info="card" />
        </div>


    </div>

    <Loading class="white" v-else />
</template>
<style lang="scss" scoped>
div {

    background-color: yellow;
}

.white {
    background-color: white;
}
</style>