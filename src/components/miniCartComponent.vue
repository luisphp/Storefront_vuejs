<template>
    <div class="customPosition col-md-12 col-sm-12 bg-white card">
        <div class="col-md-12 m-1">
            <div class="col-md-12 col-sm-12 mt-3" v-for="cartItem in cart"> 
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
                                    <!-- {{cartItem.Name | truncate(10)}} -->
                                    <h6 class="">{{cartItem.Name}}</h6>
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
    </div>
</template>

<script>
import { mapActions, mapMutations,  mapGetters, mapState, createNamespacedHelpers } from 'vuex'

export default {
    name: 'miniCartComponent',
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
    }
    // filters: {
    //     truncate: function(data,num){
    //         const reqdString = 
    //           data.split("").slice(0, num).join("");
    //         return reqdString;
    //     }
    // }

}
</script>

<style>
.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>