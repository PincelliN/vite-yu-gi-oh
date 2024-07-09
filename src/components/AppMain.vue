<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppSelect from './AppSelect.vue';
export default {
    name: "AppMain",
    components: {
        AppCard,
        AppSelect
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div>
        <AppSelect />
        <div class="row">
            <AppCard v-for="card in store.cardList" :key="card.id" :info="card" />
        </div>


    </div>

</template>
<style lang="scss" scoped>
div {
    background-color: yellow;
}
</style>