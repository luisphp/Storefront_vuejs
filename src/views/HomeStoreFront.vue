<template>
clientCredentials : {{clientCredentials}}
    <storefront-banner></storefront-banner>
    <general-information-links></general-information-links>
</template>

<script>
import { RenewCreentials_Salesforce } from '../Helpers/Helper'
import { mapActions, mapMutations, mapState } from 'vuex'
import StorefrontBanner from '@/components/StorefrontBanner.vue'
import GeneralInformationLinks from '../components/GeneralInformationLinks.vue'

export default {
    name: 'homestorefront',
    components: {
        StorefrontBanner,
        GeneralInformationLinks
    },
    methods: {
        // ...mapActions(['actionRenewClientCredentials_Salesforce']),
        ...mapActions('SalesforceCredentialsModule', ['requestForSalesforceCredential'])
    
    },
    mounted(){
        this.requestForSalesforceCredential()
        console.log('Credenciales mapeadas: ', this.$store.state.SalesforceCredentialsModule.clientCredentials )
    },
    computed: {
        ...mapState('SalesforceCredentialsModule', ['clientCredentials'])
    }
}
</script>

<style
        GeneralInformationLinks>

</style>