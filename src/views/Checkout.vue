<template>
    <storefront-banner></storefront-banner>
    <checkout-component></checkout-component>
</template>

<script>
import StorefrontBanner from '@/components/StorefrontBanner.vue'
import checkoutComponent from "../components/checkoutComponent.vue"

export default {
    components: {
        checkoutComponent,
        StorefrontBanner
    }
}
</script>

<style>

</style>