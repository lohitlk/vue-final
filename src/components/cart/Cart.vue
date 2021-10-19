<template>
  <div class="container">
    <h1>Cart</h1>
    <div v-for="(c, index) of cart" :key="c.id">
      <div class="card">
      <img :src="c.image" />
      <p>{{ c.name }}</p>
      <p>{{ c.price }}</p>
      <button @click="removeFromCart(index)">remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
  beforeMount() {
    this.getCart();
  },
};
</script>

<style scoped>
img {
  width: 250px;
  height: 250px;
  background-size: cover;
  padding: 30px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.13);
}
</style>