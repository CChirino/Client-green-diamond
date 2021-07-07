<template lang="html">
    <div class="ps-product__desc">
        <p> 
            {{ product.description }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailDesc',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
