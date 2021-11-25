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
        <!-- <div class="card col-md-3 m-4 bg-dark text-white" v-for="item in hotSaleProducts" key="item.id">
            <img class="card-img-top p-0" :src=item.main_image alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> -->
        <div class="col-md-3" v-for="item in hotSaleProducts" key="item.id">
            <div class="d-flex justify-content-center">
                <div class="card col-md-10 m-3" >
                    <img class="card-img-top" :src=item.main_image alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text"><strong>${{item.price}}</strong></p>
                        <p class="card-text"><del>$ {{ calculateDiscount(item.price, item.discount) }}</del></p> <span>
                            {{item.discount}}%
                        </span>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="col-md-4 bg-warning">
            <div class="d-flex justify-content-center">
                Tablets
            </div>
        </div>
        <div class="col-md-4 bg-secondary">
            <div class="d-flex justify-content-center">
                Tablets
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {

    name: 'GeneralInformationLinks',

    mounted(){
        this.accionCallAPI_HotSellProducts()
    },
    methods: {
        ...mapActions(['accionCallAPI_HotSellProducts']),
        showInfo(){
            console.log('Hiciste click en el banner.')
        },
        calculateDiscount(price, discount){
            let result
            result = 0

            return result
        }
    },
    computed: {
        ...mapState(['hotSaleProducts'])
    }
}
</script>

<style>

</style>