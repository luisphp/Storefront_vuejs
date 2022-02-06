<template>
    <div class="container">
        <!-- <h5> Product Details </h5> -->
        <div class="mt-4">
            <div class="col-md-12">
                <div class="row">
                    <div v-for="cat in selectedItem.ProductCategories__r.records" key="selectedItem.Id" class="col-md-4">
                        <a href="#" class="link-primary">{{cat.CategoryId__r.Name}}</a> 
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-2 bg-secondary">
                    Other Images
                </div>
                <div class="col-md-7">
                    <img class="img-fluid d-block" :src=selectedItem.image_url__c alt="..." style="max-height: 500px">
                </div>
                <div class="col-md-3">
                    <div>
                        <h5>{{selectedItem.Name}}</h5> 
                    </div>                    
                    <div>
                        Brand <a href="#" class="link-primary">{{selectedItem.Brand__c}}</a> 
                    </div>
                    <!-- Precio -->
                    <div class="row mt-4">
                        <div class="col-md-12 mx-auto">
                            <strong>Price: </strong> 
                            <del>$ {{selectedItem.Cost__c}}</del>
                            <h4>$ {{selectedItem.PricebookEntries.records[0].UnitPrice}}</h4>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-5">
                            <select class="form-select form-select-lg" aria-label="Default select example" @change="onChange($event)" id="selectOption_quantity">
                            
                            <option v-for="quantity in selectedItem.Current_Inventory__c"  > {{quantity}} </option>
                            </select>                           
                        </div>
                        <div class="col-md-7">
                            <button class="btn btn-lg btn-outline-primary" @click="addToCart()">
                                + Cart
                            </button>
                        </div>
                    </div>
                    <div class="col-md-12 mt-4">
                        <p> <strong>SKU: </strong>  {{selectedItem.StockKeepingUnit}}</p>
                    </div>                                           
                </div>             
            </div>
            <div class="row mt-4">
                <div class="col-md-12">
                    <strong>Description: </strong>
                    <p>
                        {{selectedItem.Description}}
                    </p>
                </div>
                <div class="col-md-6">

                </div>                

            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    name: 'ProductDetailsComponent',
    data(){
        return{
            itemId : '',
            quantitySelected: 0
        }
    },
    computed:{
        ...mapState(['selectedItem', 'cart']),
    },
    methods: {
        ...mapMutations(['mutationAddItemToCart']),
        onChange(event){
            //console.log('Cantidad seleccionada: ', event)
            //console.log('Cantidad seleccionada [target]: ', event.target.selectedIndex+1)
            //this.quantitySelected = event.target.selectedIndex+1
        },
        addToCart(){

            var e = document.getElementById("selectOption_quantity");
            var pickedQuantity = parseInt(e.value, 10);


            this.selectedItem.quantity = pickedQuantity

            // this.cart.push(itemToCart);
            this.mutationAddItemToCart(this.selectedItem)


            console.log('Cart :', JSON.parse(JSON.stringify(this.cart)))
        }
    },
    beforeMount(){
        
    },
    mounted(){
        window.document.title = this.selectedItem.Name;
    }
}
</script>

<style>

</style>