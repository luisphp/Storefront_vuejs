<template>
  <div class="container-fluid mt-3">
    <div class="container mt-3 mb-3">
      Mostrando <strong>*******</strong> resultados para tu busqueda: <strong>" {{searchParameter}} "</strong>
      <br>
    </div>
    <!-- Primeros Filtros -->
    <div class="container">
    <div class="row border border-primary rounded-pill p-2 mb-3">
      <div class="col-md-1">
        <div class="dropdown">
          <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brand
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <!-- <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            <li class="p-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Sony
                </label>
              </div>              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Xiaomi
                </label>
              </div>              
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-1">
        <div class="dropdown">
          <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Price
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
            <!-- <li><a class="dropdown-item" href="#">Another action</a></li> -->
            <!-- <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            <li class="p-2">
              Desde:
              <input type="number" class="form-control" placeholder="0">

              Hasta:
              <input type="number" class="form-control" placeholder="0">            

              <button class="col-12 mt-2 d-block btn btn-sm btn-primary">Go</button>
            </li>

          </ul>
        </div>
      </div>
      <div class="col-md-2">
        <div class="dropdown">
          <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Shipping Type
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li class="p-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Nacional
                </label>
              </div>              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Internacional
                </label>
              </div>              
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-2">
        <div class="dropdown">
          <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Promotions
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li class="p-2">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" @click="showToggleMessage()">
                <label class="form-check-label" for="flexSwitchCheckDefault">Special Promotions</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-2">
        <div class="dropdown">
          <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Condition
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li class="p-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  New
                </label>
              </div>              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Refurbished
                </label>
              </div>              
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-2">
        <div class="dropdown">
          <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li class="p-2">
              <div class="form-check">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="flexRadioDefault1">
                  Price Low to High
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio">
                <label class="form-check-label" for="flexRadioDefault2">
                  Price hight to Low
                </label>
              </div>              
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                  Popularidad
                </label>
              </div>              
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-1">
        <div class="dropdown">
          <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            View Type
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">List</a></li>
            <li><a class="dropdown-item" href="#">Mosaic</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Section -->
    <div class="container">
        <div class="row">
          <!-- Parametros 2 -->
            <div class="col-md-3">
                <div class="d-flex justify-content-center bg-primary">
                  Search Parameter
                </div>
            </div>

            <!-- Search Results -->
            <div class="col-md-9">
                <div class="d-flex justify-content-center bg-warning">
                  Product Search Result:
                  <!-- <br> -->
                  <!-- SearchModule: {{desdeSearchModule}} -->
                  <!-- <br> -->
                  <!-- <button class="btn btn-primary" @click="actionShwoMessageMainStore">Cambio texto</button> -->
                </div>
            </div>
        </div>    
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'ProductSearchComponent',
  data(){
    return {
      
    }
  },
  created(){
    
  },
  computed: {
    //Forma en la que se mapea un state de un modulo en vuex
    ...mapState('searchModule', ['desdeSearchModule']),
    /// Los state del main store se mapean de forma convencional
    ...mapState(['searchParameter'])
  },
  methods: {
    //Forma en la que se mapea un action de un modulo en vuex
    ...mapActions('searchModule', ['actionCambiarNombre']),
    //Forma en la que se mapea un action desde el Main-Store
    ...mapActions(['actionShwoMessageMainStore']),
    showToggleMessage(){
      console.log('Toggle activate')
    }
  }
}
</script>

<style>

</style>