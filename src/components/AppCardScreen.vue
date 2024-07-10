<script>
import { store } from "../store";
export default {
    name: "AppCardScreen",
    data() {
        return {
            store,
        }
    },
    computed: {
        resultNumber() {
            return store.cardList.length;
        }
    }
}

</script>

<template>
    <div class="row">
        <div class="col-12 m-auto text-center">
            {{ resultNumber }} Carte
        </div>
    </div>

</template>
<style lang="scss" scoped>
.col-12 {
    background-color: black;
    color: white;
}
</style>