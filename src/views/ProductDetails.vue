<template>
    <storefront-banner></storefront-banner>
    <product-details-component></product-details-component>
</template>

<script>
import StorefrontBanner from '@/components/StorefrontBanner.vue'
import ProductDetailsComponent from '../components/ProductDetailsComponent.vue'



export default {
    name: 'ProductDetails',
    data(){
        return{
            //itemId : this.$route.params.itemId
        }
    },
    components: {
        StorefrontBanner,
        ProductDetailsComponent
    },
    beforeMount(){

    },
    mounted(){

    },
    created(){
    
    }
}
</script>

<style>

</style>