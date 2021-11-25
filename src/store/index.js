import { createStore } from 'vuex'

export default createStore({
  state: {
    hotSaleProducts: []
  },
  mutations: {
    addItemsTo_hotSaleProducts(state, payload){
      state.hotSaleProducts = payload 
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
