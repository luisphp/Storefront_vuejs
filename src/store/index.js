import { createStore } from 'vuex'

// Import custom modules
import searchModule from '../modules/searchModule'
import bannerModule from '../modules/bannerModule'
import SalesforceCredentialsModule from '../modules/SalesforceCredentialsModule'

// Custom functions
import {RenewCreentials_Salesforce} from '../Helpers/Helper'

export default createStore({
  state: {
    hotSaleProducts: [],
    recentProducts: [],
    searchParameter: ''
  },
  mutations: {
    setSearchParameter(state, payload){
      state.searchParameter = payload
      console.log('Se seteo el parametro de busqueda: ', state.searchParameter)
    },
    addItemsTo_hotSaleProducts(state, payload){
      // Lets show just 4 products in "TopSellProduct" section
      for(let i = 0; i < 4; i++){
        state.hotSaleProducts.push(payload[i])
      }
      // Lets show just 4 products in "new in store" section
      for(let i = 4; i < 8; i++){
        state.recentProducts.push(payload[i])
      }
    },
  },
  actions: {
    actionSetSearchParameter({commit}, payload){
      commit('setSearchParameter', payload)
    },
    async accionCallAPI_HotSellProducts({commit}){
      let data = []
      await axios.get('https://618e0660fe09aa00174409b0.mockapi.io/api/projects/ecommerce_products')
      .then(function (response) {
          // handle success
          data = response.data
          if(data.length > 0){
            commit('addItemsTo_hotSaleProducts', data)
          }
          console.log(response);

          //Manejo especial de respuesta exitosa
      })
      .catch(function (error) {
          // handle error
          console.log(error);

          //Manejador especial de errores de HttpCallOut
          console.log('Error on request')
      });
    },
    //Mostrar mensaje en consola (sencillo)
    actionShwoMessageMainStore({commit}){
      console.log('Se muestra el mensaje desde la consola desde el MainStore')
    },
    actionRenewClientCredentials_Salesforce({commit}){
      // let access_token = RenewCreentials_Salesforce()
      console.log('credentials: ', access_token)
    }
  },
  modules: {
    searchModule,
    bannerModule,
    SalesforceCredentialsModule
  }
})
