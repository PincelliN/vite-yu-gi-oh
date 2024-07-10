<script>
export default {
    name: "Loading"
}
</script>

<template>
    <div class="row">
        <div class="col-12 ">
            <div class="d-flex justify-content-center align-items-center ">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
                <h3>Loading...</h3>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '/src/styles/general.scss';

.box {
    height: 100%;
}
</style>