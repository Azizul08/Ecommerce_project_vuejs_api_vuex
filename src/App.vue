<template>
  <div id="app">
    <!-- <router-link :to="{path: '/'}"> Home </router-link>
    <router-link :to="{path: '/test/1'}"> Test 1 </router-link>
    <router-link :to="{path: '/test/2'}"> Test 2</router-link>
    <router-link :to="{path: '/test/3'}"> Test 3</router-link>
    <router-view></router-view> -->

    <navbar @search="search"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
        <router-view></router-view>
        <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
        </div>
        <div class="col-sm-3">
         <cart @itemRemoved="removeItem" :items="cart"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Navbar from './components/Navbar.vue'
import cart from './components/Cart.vue'
// import inventory from './components/Inventory.vue'

// import Hello from './components/Hello.vue'

import data from './data.js'

export default {
  components:{
    Navbar,
    cart,
    // inventory
  },
  data (){
    return {
      items: [],
      cart: [{
        id: 1,
        title: 'test',
        price: 10.50,
        photo: "http://dummyimage.com/165x207.png/5fa2dd/ffffff"
      }]
    }
  },
  mounted(){
    this.items = data
  },
  methods: {
    search(keyword){
    this.items=data.filter(item => {
      return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
    },
    addCartItem(item){
      this.cart.push(item)
    },
    removeItem(index){
        this.cart.splice(index, 1)
    }
  }
}
</script>

<style>
.container{
  padding-top:10px;
}
</style>
