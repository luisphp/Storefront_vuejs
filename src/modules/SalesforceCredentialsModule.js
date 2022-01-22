export default {
    namespaced: true,
    state: {
        clientCredentials: ''
    },
    mutations: {
        setClientCredential(state, payload){
            state.clientCredentials = payload
            console.log('Asi quedo el state: ', state.clientCredentials)
            console.log('Asi quedo el payload: ', payload)
        }
    },
    actions: {
        async requestForSalesforceCredential({commit}){
            await axios.get('http://localhost:5000/api/salesforceConnection')
            .then(function (response) {
                console.log('Response from action [module]', response.data.credencial.access_token)
                commit('setClientCredential', response.data.credencial.access_token)     
            })
            .catch(function (error) {
                console.log('Error al ejecutar el request de autenticado desde VueJS:', error);
            })
            
        }
    }
}