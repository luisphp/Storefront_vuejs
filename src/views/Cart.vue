<template>
      <storefront-banner></storefront-banner>
      <cart-component></cart-component>
</template>

<script>
import cartComponent from '../components/cartComponent.vue'
import StorefrontBanner from '@/components/StorefrontBanner.vue'

export default {
    name: 'Cart',
    components: {
        cartComponent,
        StorefrontBanner
    }
}
</script>

<style>

</style>