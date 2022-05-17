<template>
  <div class="container mt-5">
      <div class="row">
          <div class="col-md-9">
              <div class="col-md-12">
                  <h4>Cart Summary</h4>
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
              <div class="accordion mt-5" id="accordionExample">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Shipping Details
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="addres1">Address 1</label>
                                <input type="text" class="form-control" id="addres1"  placeholder="" v-model="shippingAddres1">
                            </div>
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="addres2">Address 2</label>
                                <input type="text" class="form-control" id="addres2" placeholder="" v-model="shippingAddres2">
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="state">State</label>
                                <input type="text" class="form-control" id="state" placeholder="" v-model="shippingAddresState">
                            </div>
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="postalCode">Postal Code</label>
                                <input type="text" class="form-control" id="postalCode" placeholder="" 
                                v-model="shippingAddresPostalCode">
                            </div>
                        </div>                                                
                        <div class="form-group mt-3 mb-3">
                            <label for="speciaIndications">Special Indications</label>
                            <textarea class="form-control" id="speciaIndications" rows="3"
                            v-model="shippingAddresSpecialInications"></textarea>
                        </div>  
                    </div>
                    </div>
                </div>
                  
                <!-- <div class="col-md-12">
                    <h4>Shipping Details</h4>
                        <div class="row">
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="addres1">Address 1</label>
                                <input type="text" class="form-control" id="addres1"  placeholder="">
                            </div>
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="addres2">Address 2</label>
                                <input type="text" class="form-control" id="addres2" placeholder="">
                            </div>
                        </div>
                        <div class="row"> 
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="state">State</label>
                                <input type="text" class="form-control" id="state" placeholder="">
                            </div>
                            <div class="form-group col-md-6 col-sm-6 mt-3">
                                <label for="postalCode">Postal Code</label>
                                <input type="text" class="form-control" id="postalCode" placeholder="">
                            </div>
                        </div>                                                
                        <div class="form-group mt-3 mb-3">
                            <label for="speciaIndications">Special Indications</label>
                            <textarea class="form-control" id="speciaIndications" rows="3"></textarea>
                        </div>                                                        
                </div> -->

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Billing Details
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link" @click="selectPaymentMethod('CreditCard')" v-bind:class="{ active: paymentMethodSelected === 'CreditCard' }"
                                    >Credit Card</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" @click="selectPaymentMethod('COD')" v-bind:class="{ active: paymentMethodSelected === 'COD' }"
                                    >Cash on delivery</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" @click="selectPaymentMethod('paypal')" v-bind:class="{ active: paymentMethodSelected === 'paypal' }"
                                    >Paypal</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" @click="selectPaymentMethod('bankTransfer')" v-bind:class="{ active: paymentMethodSelected === 'bankTransfer' }"
                                    >Bank Transfer</a>
                                </li>
                            </ul>
                            <div class="col-md-12 mb-5" v-if="paymentMethodSelected == 'CreditCard'">

                                <div class="row mt-5">
                                    <div class="col-md-6">
                                        <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="Your credit card number here"  class="form-control" v-model="creditCard_Number">
                                    </div>
                                    <div class="col-md-2">
                                        <input type="number" maxlength="3" class="form-control" placeholder="cvv" v-model="creditCard_CVV">
                                    </div>
                                    <div class="col-md-4">
                                        <input type="month" id="start" name="start" min="2022-03" value="2022-03" class="form-control" v-bind="creditCard_ExpirationDate">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12" v-if="paymentMethodSelected == 'COD'">
                                
                                <button class="btn btn-primary btn-large m-5">I'll pay when i reive it!</button>

                            </div>
                            <div class="col-md-12" v-if="paymentMethodSelected == 'paypal'">
                                <p class="m-5"> Coming soon you'll have Paypal available! </p> 
                            </div>
                            <div class="col-md-12" v-if="paymentMethodSelected == 'bankTransfer'">
                                <p class="m-5"> Coming soon you'll have BankTransfer available! </p>
                            </div>                                                        
                        </div>
                    </div>
                </div>

                <!-- <div class="col-md-12">
                    <h4 class="mt-4">Billing Details</h4>
                        <h5 class="mt-2">Available payment methods</h5>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link" @click="selectPaymentMethod('CreditCard')" v-bind:class="{ active: paymentMethodSelected === 'CreditCard' }"
                                >Credit Card</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="selectPaymentMethod('COD')" v-bind:class="{ active: paymentMethodSelected === 'COD' }"
                                >Cash on delivery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="selectPaymentMethod('paypal')" v-bind:class="{ active: paymentMethodSelected === 'paypal' }"
                                >Paypal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="selectPaymentMethod('bankTransfer')" v-bind:class="{ active: paymentMethodSelected === 'bankTransfer' }"
                                >Bank Transfer</a>
                            </li>                        
                        </ul>
                </div> -->
                <!-- Componentes condicional al metodo de pago seleccionado arriba -->
                <!-- <div class="col-md-12" v-if="paymentMethodSelected == 'CreditCard'">
                    Credit Card Component here!
                </div>
                <div class="col-md-12" v-if="paymentMethodSelected == 'COD'">
                    Cash On Delivery Component Here
                </div>
                <div class="col-md-12" v-if="paymentMethodSelected == 'paypal'">
                    Paypal component here
                </div>
                <div class="col-md-12" v-if="paymentMethodSelected == 'bankTransfer'">
                    Bank Transfer
                </div> -->
              </div>
                <!-- OrderNow Button -->   
              <div class="col-md-12 mt-5 mb-5">
                  <button class="btn btn-outline-primary btn-block" @click="executeOrderSubmit()">Order Now!</button>
              </div>
          </div>
          <!-- Totals -->
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
          </div>
      </div>
  </div>
</template>

<script>
import cartComponent from '../components/cartComponent.vue'
import { mapActions, mapMutations,  mapGetters, mapState, createNamespacedHelpers } from 'vuex'

//Importar helpers
import {postNewSalesforceOrder} from '../Helpers/Helper'

export default {
    name: 'checkoutComponent',
    components: {
        cartComponent
    },
    data(){
        return {
            cartPickedQuantity: 0,
            shipmentCost : 14,
            taxAmount : Math.floor(Math.random() * 11),
            aditionalCharge : Math.floor(Math.random() * 11),
            paymentMethodSelected: '',
            shippingAddres1: '',
            shippingAddres2: '',
            shippingAddresState: '',
            shippingAddresPostalCode: '',
            shippingAddresSpecialInications: '',
            creditCard_Number: '',
            creditCard_CVV:'',
            creditCard_ExpirationDate:'',
            cashOndelivery_Flag: false,
            creditCard_Flag: false,

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
    mounted(){
        var e = document.getElementById("selectOption_quantity");
        var pickedQuantity = parseInt(e.value, 10);
        this.cartPickedQuantity = pickedQuantity
    },
    methods:{
         ...mapMutations(['mutationAddItemCart', 'mutationUpdateCartItem','removeItemFromCart']),
        onChange(event, item){
            this.cartPickedQuantity = event.target.selectedIndex + 1
            // console.log('La cantidad se ha cambiado a: ', this.cartPickedQuantity)
            item.quantity = this.cartPickedQuantity
            this.mutationUpdateCartItem(item)
        },
        selectPaymentMethod( paymentOption ){
            console.log('payment method selected: ', paymentOption)
            
            this.paymentMethodSelected = paymentOption
            
            // this.paymentMethodSelected == 'CreditCard' ? this.creditCard_Flag = true : this.creditCard_Flag = false
            
            // this.paymentMethodSelected == 'COD' ? this.cashOndelivery_Flag = true : this.cashOndelivery_Flag = false

            console.log('Cambio: ', this.paymentMethodSelected)
            // console.log('CreditCard_FLAG: ', this.creditCard_Flag, ' COD_FLAG: ', this.cashOndelivery_Flag)
        },
        executeOrderSubmit(){
            console.log('Starting Order Submit Process...')
            
            let creditCardDetails = {
                'creditCardNumber': this.creditCard_Number,
                'creditCardCVV': this.creditCard_CVV,
                'creditCardExpirationDate': this.creditCard_ExpirationDate,
            }

            var orderDetails = {
                "shippingDetails":{
                    'shippingAddress1':this.shippingAddres1,
                    'shippingAddres2':this.shippingAddres2,
                    'shippingState':this.shippingAddresState,
                    'shippingPostalCode':this.shippingAddresPostalCode,
                    'shippingAddresSpecialInications':this.shippingAddresSpecialInications,
                },
                "PaymentDetails":{
                    "selectedPaymentMethod" : this.selectedPaymentMethod,
                }
            }

            if( this.selectedPaymentMethod != 'COD' ){
                orderDetails.PaymentDetails.creditCardDetails = creditCardDetails
            }

            orderDetails.productsSelected = JSON.parse(JSON.stringify(this.cart))

            console.log('Datos seleccionados : ', orderDetails )
            orderDetails = {hello : "World"}
            

            console.log(postNewSalesforceOrder(orderDetails))
        }
    }
}
</script>

<style>

</style>