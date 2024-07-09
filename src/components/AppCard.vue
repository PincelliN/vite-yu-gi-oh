<script>
export default {
    name: "AppCard",
    props: ['info'],
}
</script>
<template>
    <div class="col-3">
        <div :id="info.archetype" class="card" style="width: 18rem;">
            <img :src="info.card_images[0].image_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ info.name }}</h5>
                <p class="card-text">{{ info.desc }}</p>

            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped></style>