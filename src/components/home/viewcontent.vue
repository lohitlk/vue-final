<template>
  <div class="container">
    <div class="image">
      <img :src="userDetails.image" alt="img" class="profile" />
    </div>
    <div class="data">
      <p class="profile-name">
        <b>Name:</b> <span>{{ userDetails.title }}</span>
      </p>
      <p class="profile-name">
        <b>Price:</b> <span>{{ userDetails.price }} <span>&#36;</span></span>
      </p>
      <p class="profile-name">
        <b>Description:</b> <span>{{ userDetails.description }}</span>
      </p>
      <p class="profile-name">
        <b>Category:</b> <span>{{ userDetails.category }}</span>
      </p>
      <!-- <p class="profile-name">
        <b>Rating:</b> <span>{{ userDetails.rating.rate }}</span>
      </p> -->
      <div class="butt">
        <button
          @click="removeFromCart(userDetails.id)"
          v-if="isInCart(userDetails.id)"
        >
          remove from cart
        </button>
        <button @click="addToCart()" v-else>add to cart</button>
      </div>
    </div>
    <div class="butt1">
      <input
        type="submit"
        class="butt"
        value="Home page"
        @click="this.$router.back()"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "viewContent",

  data() {
    return {
      userDetails:'',
      cart: [],
      items: []
      
    };
  },
  created() {
    var id1;
    this.userDetails = this.$route.params.details
      ? JSON.parse(this.$route.params.details)
      : null;
    console.log("userdetails||", this.userDetails);
    id1 = this.userDetails.id;
    this.items = Object.freeze(this.userDetails)
    console.log("items||",this.items)
    console.log("id||", id1);
  },
  methods: {
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      console.log("this||",this.cart)
      // console.log(this.cart.find( 2 == itemId))
      const cartItem = this.cart.find(({ id }) => id == itemId );
      console.log("this1||",cartItem)
      return Boolean(cartItem);
    },
    addToCart() {
      const item = this.items.id
      console.log(localStorage.getItem("cart"))
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
      console.log("cart||", this.cart)
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 60px;
  border-bottom: 20px;
}
img {
  float: left;
  width: 400px;
  height: 400px;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.712);
}
.data {
  float: right;
  width: 700px;
  text-align: left;
}
.butt1 {
  position: relative;
  transform: translate(-280px, 450px);
}
</style>