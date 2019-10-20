<template>
    <div v-if="!loading" class="row">
        <div v-for="(item, index) in items" :key="index"  class="card" style="width: 15rem;">

            <router-link tag="div" :to="{path: '/item/'+item.id}">
              <img :src="item.photo" class="card-img-top" alt="...">
            </router-link>
            
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">$ {{item.price}}</p>
                <a @click="addToCart(item)" class="btn btn-primary">+ Add</a>
            </div>
        </div>     
    </div> 
    <h1 v-else>Loading...</h1>
</template>

<script>
import axios from 'axios'

export default {
//   props:['items'],
  data (){
    return{
        loading: true
        // items: []
    }
  },
  computed: {
    items(){
    return this.$store.getters.getInventory
    }
  },
  mounted(){
    this.fetchInventory()
  },
  methods: {
    addToCart(item){
    // this.$emit('newItemAdded',item)
    this.$store.dispatch('addToCart',item)

    },
    fetchInventory(){
        var own = this
        axios.get('http://localhost:3000/items').then(response=> {
          //  own.items= response.data
           own.$store.commit('setInventory', response.data)
           own.loading = false
        })
    }
  }
}
</script>

<style>

</style>