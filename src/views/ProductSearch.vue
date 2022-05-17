<template>
<storefront-banner></storefront-banner>
<product-search-component></product-search-component>
</template>

<script>
import StorefrontBanner from '@/components/StorefrontBanner.vue'
import ProductSearchComponent from '@/components/ProductSearchComponent.vue'



export default {
    name: 'ProductSearch',
    components: {
        StorefrontBanner,
        ProductSearchComponent
        
    }
}
</script>

<style>

</style>