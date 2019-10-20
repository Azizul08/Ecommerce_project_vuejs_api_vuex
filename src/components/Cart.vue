<template>

      <ul class="list-group">
        <li class="list-group-item"><pre>Item         -        Price</pre></li> 

        <li v-for="(item,index) in items" :key="index" class="list-group-item">
          <button class="btn btn-sm btn-outline-dark" @click="removeItem(index)"> X</button>
           &nbsp&nbsp&nbsp
          <span class="item-name ">{{item.title}}</span>
         
          <span class="item-price float-right">{{item.price}}</span>
        </li>

        <li class="list-group-item">
        <span class="item-name">Total</span>
        <span class="item-price float-right">${{ totalPrice }}</span>
        </li>

        <li v-if="items.length>0" class="list-group-item">
       <button @click="checkout" class="btn btn-block btn-success"> Checkout</button>
        </li>
      </ul>
</template>

<script>


export default {
  // props: ['items'],

  computed: {
    items(){
      return this.$store.getters.getCart
    },
    totalPrice() {
    var total= 0
    this.items.forEach(item => {
      total+= parseFloat(item.price)
      // console.log(item.price)
    })
    
    return total.toFixed(2)
    
    }
  },
  methods: {
    removeItem(index){
    // this.$emit('itemRemoved',index)
    this.$store.commit('removeItem',index)
    },
    checkout() {
      if(confirm('Are you sure you want to confirm ?')){
        this.$store.commit('clearCart')
      }
    }
  }

}
</script>

<style>

</style>