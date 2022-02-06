import { getAllSalesforceProducts as getProducts } from "../Helpers/Helper"

export default {
    namespaced: true,
    state: {
        allSalesforceProducts: [],
        itemsBatchOne : [],
        itemsBatchTwo : []
    },
    mutations: {
        setMainProducts(state,  payload){
            state.allSalesforceProducts = payload

            console.log('Module: ', state.allSalesforceProducts)
        }
    },
    actions: {
        async actionGetAllSalesforceProducts({ state, commit, dispatch, rootState }){

            var items = await getProducts().then(i => i)

            for(var i = 0; i< 4; i++){
                rootState.newProducts.push(items[i])
            }

            console.log('itemes>>>> ', items)

            commit('setMainProducts', items)
            
        }
    }
}