<template>
<div class="bg-light text-dark">
    <div class="container">
        <div class="row">
                <div class="col-md-2 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <a href="#" class="link-secondary">About Us</a>
                    </div>
                </div>
                <div class="col-md-2 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <a href="#" class="link-secondary">Sell with Us</a>
                    </div>
                </div>
                <div class="col-md-2 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <a href="#" class="link-secondary">Just for today</a>
                    </div>
                </div>
                <div class="col-md-2 col-sm-1 p-0">
                    <div class="d-flex justify-content-center">
                        <a href="#" class="link-secondary">Just for you!</a>
                    </div>
                </div>            
        </div>
    </div>
</div>

<div class="container mt-4">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/Banner_Laptops_v2.png" class="d-block w-100" alt="..." @click="showInfo()">
            </div>
            <div class="carousel-item">
            <img src="../assets/banner_celulares_v2.png" class="d-block w-100 h-50" alt="..." @click="showInfo()">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
<div class="container mt-4">
    <div class="row">
        <div class="col-md-3 col-sm-3 p-0">
            <div class="d-flex justify-content-center">
                Smartphones
            </div>
        </div>
        <div class="col-md-3 col-sm-3 p-0">
            <div class="d-flex justify-content-center">
                Laptops and Desktops
            </div>
        </div>
        <div class="col-md-3 col-sm-3 p-0">
            <div class="d-flex justify-content-center">
                Gamer
            </div>
        </div>
        <div class="col-md-3 col-sm-1 p-0">
            <div class="d-flex justify-content-center">
                Tablets
            </div>
        </div>
    </div>
</div>

<!-- Last Offers -->
<div class="container mt-5">
    <div class="">
        <h3>Top Products</h3>
        <hr>
    </div>
    <div class="row" >
    <div class="col-md-3" v-for="item in hotSaleProducts" key="item.id">
            <div class="d-flex justify-content-center">
                <div class="card col-md-12 mx-auto" style="max-height: 500px">
                    <div class="col-md-12 col-sm-12 mx-auto" style="max-height: 300px">
                        <img class="img-fluid mx-auto d-block bg-primary" :src=item.image_url__c alt="Card image cap" style="max-height: 250px">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-truncate">{{item.Name}}</h5>
                        <div class="row mt-2">
                            <div class="col-md-4 mx-auto">
                                <del>$ {{item.Cost__c}}</del>
                            </div>
                            <div class="col-md-7 mx-auto">
                                <strong>${{item.PricebookEntries.records[0].UnitPrice}}</strong>
                            </div>
                        </div>
                        <div class="mt-2">
                            <div class="col-md-12 p-1">
                                <button class="btn col-md-12 btn-success">+Cart</button>
                            </div>
                            <div class="col-md-12 p-1">
                                <button class="btn col-md-12 btn-primary" @click="goToDetails(item)">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Favorite brands -->
<div class="container mt-5">
    <div class="">
        <h3>Your favorite brands</h3>
        <hr>
    </div>
    <div class="row" >
        <div class="col-md-3">
            <div class="d-flex justify-content-center">
                <div class="card col-md-12 m-3" >
                    <img alt="brand_logo" src="../assets/brand_logos/Asus_brand.png">
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="d-flex justify-content-center">
                <div class="card col-md-12 m-3" >
                    <img alt="brand_logo" src="../assets/brand_logos/Sony_brand.png">
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="d-flex justify-content-center">
                <div class="card col-md-12 m-3" >
                    <img alt="brand_logo" src="../assets/brand_logos/Xiaomi_brand.png">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Los mas reciente -->
<div class="container mt-5 mb-5">
    <div class="">
        <h3>New in store</h3>
        <!-- new Products {{newProducts}} -->
        <hr>
    </div>
    <div class="row" >
        <div class="col-md-3" v-for="item in recentProducts" key="item.id">
            <div class="d-flex justify-content-center">
                <div class="card col-md-12 mx-auto" style="max-height: 500px">
                    <div class="col-md-12 col-sm-12 mx-auto" style="max-height: 300px">
                        <img class="img-fluid mx-auto d-block bg-primary" :src=item.image_url__c alt="Card image cap" style="max-height: 250px">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-truncate">{{item.Name}}</h5>
                        <div class="row mt-2">
                            <div class="col-md-4 mx-auto">
                                <del>$ {{item.Cost__c}}</del>
                            </div>
                            <div class="col-md-7 mx-auto">
                                <strong>${{item.PricebookEntries.records[0].UnitPrice}}</strong>
                            </div>
                        </div>
                        <div class="mt-2">
                            <div class="col-md-12 p-1">
                                <a href="#" class="btn col-md-12 btn-success">+Cart</a>
                            </div>
                            <div class="col-md-12 p-1">
                                <a href="#" class="btn col-md-12 btn-primary" @click="goToDetails(item)">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<div class="bg-light">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 mt-5">
                <div class="d-flex justify-content-center">
                    ¡Hey! get the latest news by our newsletter
                </div>
            </div>
            <div class="col-md-4 mt-5">
                <div class="d-flex justify-content-center">
                    <input class="form-control form-control-sm" type="text" placeholder="Your email here">
                </div>
            </div>        
            <div class="col-md-4 mt-5 mb-5">
                <!-- <div class="d-flex justify-content-center"> -->
                    <button class="btn btn-sm btn-primary">Notifiy Me!</button>
                <!-- </div> -->
            </div>        
        </div>
    </div>
</div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {

    name: 'GeneralInformationLinks',
    data(){
        return{
            products : []
        }
    },
    mounted(){
        // this.accionCallAPI_HotSellProducts()
    },
    methods: {
        ...mapActions(['actionSetTopProducts']),
        ...mapMutations(['mutationSetSelectedItem']),
        // showInfo(){
        //     console.log('Hiciste click en el banner.')
        // },
        // calculateDiscount(price, discount){
        //     let result
        //     result = 0

        //     return result
        // }
        goToDetails(item){
        var itemId = item.Id
        console.log('itemId: ',item.Id)
        //    this.$router.push({ path: `/productDetails/${itemId}` })
        this.mutationSetSelectedItem(item)
        this.$router.push({ name: 'ProductDetails', params: { itemId } })
        }
    },
    computed: {
        ...mapState(['hotSaleProducts', 'recentProducts']),
        ...mapState(['getAllSalesforceProductsModule'], 'allSalesforceProducts'),
        ...mapState(['newProducts', 'selectedItem'])
    },
    beforeMount(){

        this.actionSetTopProducts()
        
    }
}
</script>

<style>

</style>