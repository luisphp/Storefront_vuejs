<template>
    <div class="sticky-top col-md-12 col-sm-12 mt-2">
        <div class="container">
            <div class="row">
                <!-- Categories -->
                <div class="col-md-1 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <div class="col-md-1 d-flex justify-content-center">
                            <button type="button" class="btn btn-sm btn-outline-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"></path>
                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"></path>
                                </svg>
                                Categories
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Logo -->
                <div class="col-md-1 col-sm-1 p-0 m-0">
                    <div class="d-flex justify-content-center m-0 p-0 logo_font" @click="goToHome()">
                        <!-- <img src="../assets/LogoMyStore.png" alt="" class="col-md-12 mt-1"> -->
                        MyStore
                    </div>
                </div>
                <!-- Search -->
                <div class="col-md-7 col-sm-7">
                    <div class="d-flex justify-content-center">
                        <div class="input-group input-group-sm">
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                        placeholder="Write your search"
                        @keyup.enter="goToSearch()"
                        v-model="searchInput">
                        </div>
                    </div>
                </div>  
                <!-- Orders -->
                <div class="col-md-1 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-sm btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg> Orders </button>
                    </div>
                </div>
                <!-- Account -->
                <div class="col-md-1 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-sm btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                        </svg>
                                        Account
                                    </button>
                    </div>
                </div>
                <!-- Cart -->
                <div class="col-md-1 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-sm btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                        </svg>
                                        Cart
                                    </button>
                    </div>
                </div>
            </div>                                    
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: 'StoreFrontBanner',
    data(){
        return{
            searchInput : ''
        }
    },
    computed:{
        
    },
    methods: {
        ...mapActions(['actionSetSearchParameter']),
        ...mapMutations(['setSearchParameter']),
        goToSearch(){
            // this.$router.push({name:'SearchProducts', params: {searchInput}}); 
            // console.log('Buscas algo?', this.searchInput)
            // named route
            // this.$router.push({ path: '/search'})
            // object

            //setear la busqueda en el store    

            //ejecutar el cambio de ruta si es que ya no se esta en ella
            // this.actionSetSearchParameter(this.searchInput)
            this.setSearchParameter(this.searchInput)
            
            this.$router.push({ name: 'SearchProducts'})
        },
        goToHome(){
            this.$router.push({path: 'homestorefront'})
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&display=swap');

.logo_font{
    font-family: 'Playfair Display', serif;
    font-size: 23px;
    cursor: pointer;
}
</style>