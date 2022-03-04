<template>
<div class="container mt-5">
    <div class="row">
        <div class="col-md-9">
            <div class="col-md-12 mt-3" v-for="cartItem in cart"> 
                <div class="row">
                    <div class="col-md-3 col-sm-3">
                        <div class="d-flex justify-content-center">
                            <img :src="cartItem.image_url__c" class="image-fluid col-md-10 col-sm-10" alt="">
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="d-flex justify-content-center mt-2">
                            <div class="row">
                                <div class="col-md-10">
                                    {{cartItem.Name}}
                                </div>
                                <div class="col-md-1 float-right">
                                    <button @click="removeItemFromCart(cartItem)" class="btn btn-outline-danger btn-sm">X</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="d-flex justify-content-center">
                            <!-- <div class="mt-1">Unit Price: ${{cartItem.PricebookEntries.records[0].UnitPrice}}</div> -->
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="mt-2">Price: ${{cartItem.PricebookEntries.records[0].UnitPrice * cartItem.quantity}}</div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="mt-1">Quantity: 
                                <span>
                                    <select class="form-select form-select-sm" @change="onChange($event, cartItem)" id="selectOption_quantity">
                                    
                                    <option v-for="quantity in cartItem.Current_Inventory__c"  :selected="quantity == cartItem.quantity"> {{quantity}} </option>
                                    </select>                            
                                </span>
                            </div>                        
                        </div>
                    </div>
                </div>        
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-2 m-0">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="mx-auto">Your Order summary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>SubTotal</td>
                    <td>${{subTotalcalculation}}</td>
                    </tr>
                    <tr>
                    <td>Tax</td>
                    <td>${{taxAmount}}</td>
                    </tr>
                    <tr>
                    <td>Shipment</td>
                    <td>${{shipmentCost}}</td>
                    </tr>
                    <tr>
                    <td>Additional Cost</td>
                    <td>${{aditionalCharge}}</td>
                    </tr>
                    <tr>
                    <th scope="row">Total</th>
                    <th>${{subTotalcalculation + taxAmount + shipmentCost + aditionalCharge}}</th>
                    </tr>
                </tbody>
                </table>                
            </div>      
            <div class="mt-3">
                <input type="text" class="form-control" id="couponInput" placeholder="Have a coupon?">
            </div>                  
            <div class="mt-3 col-md-12">
                <button type="button" class="btn btn-outline-primary col-md-12" @click="goToCheckout()">Checkout</button>
            </div>                  
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapMutations,  mapGetters, mapState, createNamespacedHelpers } from 'vuex'

export default {
    name: 'cartComponent',
    data(){
        return {
            cartPickedQuantity: 0,
            shipmentCost : 14,
            taxAmount : Math.floor(Math.random() * 11),
            aditionalCharge : Math.floor(Math.random() * 11)
        }
    },
    computed:{
        ...mapState(['cart']),
        subTotalcalculation: function(){
        
            var subTotalSummary = 0

            if (this.cart.length != 0 ){
                this.cart.forEach(item => {
                subTotalSummary += item.quantity * item.PricebookEntries.records[0].UnitPrice
                });
            }
            return subTotalSummary
        }
    },
    methods:{
         ...mapMutations(['mutationAddItemCart', 'mutationUpdateCartItem','removeItemFromCart']),
        onChange(event, item){
            this.cartPickedQuantity = event.target.selectedIndex + 1
            // console.log('La cantidad se ha cambiado a: ', this.cartPickedQuantity)
            item.quantity = this.cartPickedQuantity


            this.mutationUpdateCartItem(item)
        },
        goToCheckout(){
            this.$router.push({name: 'Checkout'})
        }
        
    },
    mounted(){
        var e = document.getElementById("selectOption_quantity");
        var pickedQuantity = parseInt(e.value, 10);
        this.cartPickedQuantity = pickedQuantity
    }

}
</script>

<style>

</style>