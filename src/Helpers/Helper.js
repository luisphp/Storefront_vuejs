
// get o renew a Salesforce Credential
export async function getSalesforceCredential(){

    var credencialesDeSalesforce = {}
    
    await axios.get('http://localhost:5000/api/salesforceConnection')
    .then(function (response) {
        credencialesDeSalesforce = response.data
    })
    .catch(function (error) {
        console.log('Error al ejecutar el request[auth]:', error.data);
    })
    return credencialesDeSalesforce
}

// get All Products Active from Salesforce
export async function getAllSalesforceProducts(){

    // ***Request token to node -> salesforce ***
    // *    const params = new URLSearchParams();
    // *    var access_token = await getSalesforceCredential().then(function(x) { return x.credencial.access_token} )
    // *    params.append('access_token', access_token);
    // ***not necesary for this moment ***

    var AllActiveProducts = []

    // await axios.post('http://localhost:5000/api/getAllSalesforceProducts',params)
    await axios.post('http://localhost:5000/api/getAllSalesforceProducts')
    .then(function (response) {
        AllActiveProducts = response.data.AllProducts
    })
    .catch(function (error) {
        console.log('Error al ejecutar el request[getProducts]:', error);
    })
    return AllActiveProducts
}

// place new Order into Salesforce
export async function postNewSalesforceOrder( orderItems ){

    var postOrderResult = []

    var data = {}

    const headers = {
        'Content-Type': 'application/json'
    }

    // await axios.post('http://localhost:5000/api/getAllSalesforceProducts',params)
    await axios.post('http://localhost:5000/api/postNewSalesforceOrder', data , {
        headers : headers
    })
    .then(function (response) {
        postOrderResult = response.data
    })
    .catch(function (error) {
        postOrderResult = error
        console.log('Error al ejecutar el request[getProducts]:', error);
    })

    return postOrderResult = []
}