import { createStore } from 'vuex'

export default createStore({
  state: {
    hotSaleProducts: [],
    recentProducts: []
  },
  mutations: {
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
    }
  },
  modules: {
  }
})
