<script>
import { store } from '../store';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
        }
    },
    methods: {
        getFilter() {
            for (let index = 0; index < store.cardList.length; index++) {
                const element = store.cardList[index].archetype;

                if (!store.filterList.includes(element) && element) {
                    store.filterList.push(element)
                }

            }
        }
    },
    created() {
        this.getFilter()
        console.log(store.filterList);
    }
}
</script>
<template>
    <div class="row">
        <div class="col-5">

            <select class="form-select" aria-label="Default select example" @change="$emit('filter')"
                v-model="store.apiParam">
                <option value="0" selected>Select Archetype</option>
                <option v-for="card in store.filterList" :value="card">{{ card }}</option>

            </select>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>