import { mapActions, mapMutations, mapState } from 'vuex'
import store from './../store'

export async function RenewCreentials_Salesforce(){

    var clientCredentials = store.getters.clientCredentials

    var ServerResponse = ''
    await axios.get('http://localhost:5000/api/salesforceConnection')
    .then(function (response) {
        console.log(response);
        clientCredentials = response.data
        ServerResponse = response.data

        
    })
    .catch(function (error) {
        console.log('Error al ejecutar el request:', error);
    })
    return ServerResponse
}

export async function getAppProduct_Salesforce(){

    var ServerResponse = ''
    // Make a request for a user with a given ID
    await axios.get('http://localhost:5000/api/salesforceConnection')
    .then(function (response) {
        // handle success
        console.log(response);

        ServerResponse = response.data
    })
    .catch(function (error) {
        // handle error
        console.log('Error al ejecutar el request:', error);
    })

    return ServerResponse

}
