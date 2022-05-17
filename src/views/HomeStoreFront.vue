<template>
    <storefront-banner></storefront-banner>
    <general-information-links></general-information-links>
    
</template>

<script>
import { mapActions, mapMutations,  mapGetters, mapState, createNamespacedHelpers } from 'vuex'
import StorefrontBanner from '@/components/StorefrontBanner.vue'
import GeneralInformationLinks from '../components/GeneralInformationLinks.vue'

export default {
    name: 'homestorefront',
    data(){
        return {
            allProducts : []
        }
    },
    components: {
        StorefrontBanner,
        GeneralInformationLinks
    },
    methods: {
        //...mapActions(['actionRenewClientCredentials_Salesforce']),
        // ...mapActions('SalesforceCredentialsModule', ['requestForSalesforceCredential']),

        //...mapActions('getAllSalesforceProductsModule', ['actionGetAllSalesforceProducts'])
    },
    computed: {
    },
    mounted(){

        // getAllProductSalesforce(this.credencial.credencial.access_token).then( x => this.allProducts)
    },
    beforeMount(){
        // getSalesforceCredential().then( x => console.log('SalesforceCredencial: ',x))
        // getSalesforceCredential().then( x => console.log('SalesforceCredencial: ', this.SalesforceCredencials = x))

        //getAllSalesforceProducts().then(x => console.log('All Salesforce products', this.allProducts = x))

        //this.actionGetAllSalesforceProducts();
    }
}
</script>

<style GeneralInformationLinks>
</style>