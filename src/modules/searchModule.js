'use strict'

export default {
    namespaced: true,
    state: {
        searchProductResult: [],
        desdeSearchModule: 'Hello from searchModule'
    },
    mutations: {
        cambiarNombreSearchModule(state){
            state.desdeSearchModule = 'Se cambio el name desde el searchModule'
        }
    },
    actions: {
        actionCambiarNombre({commit}){
            commit('cambiarNombreSearchModule')
        }
    }
}