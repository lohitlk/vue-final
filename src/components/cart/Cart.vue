<template>
  <div class="container">
    <h1>Cart</h1>
    <div v-for="(c, index) of cart" :key="c.id">
      <div class="card">
        <div>
          <div>
            <img :src="c.image" />
          </div>
          <div class="data">
            <p><b>Name:</b> {{ c.name }}</p>
            <p><b>Price:</b> {{ c.price }} <span>&#36;</span></p>
            <div class="buttons">
              <div class="removecart">
                <button class="rem" @click="removeFromCart(index)">remove from cart</button>
              </div>
              <div class="quantity-toggle">
                <button class="togbut" @click="updateCart(c, 'subtract')">&mdash;</button>
                <span class="cart__quantity">{{ c.quantity }}</span>
                <button class="togbut" @click="updateCart(c, 'add')">&#xff0b;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {{ totalPrice() }}
    <div class="nav__cart">
      <span class="total-quantity"
        >Total order Quantity:{{ totalQuantity }}</span
      ><br>

      <span class="total"> Total: {{ finalPrice }} &#36;</span>
    </div>
    <button class="checkout" @click="checkout()">Checkout</button>
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
  computed: {
    totalQuantity() {
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },
    finalPrice() {
      return this.cart.reduce((total, product) => total + product.total, 0);
    },
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
      //   console.log(this.cart.length)
    },
    updateCart(product, updateType) {
      console.log(product.id);
      for (let i = 0; i < this.cart.length; i++) {
        console.log(this.cart[i].id);
        if (this.cart[i].id === product.id) {
          if (updateType == "subtract") {
            if (this.cart[i].quantity != 0) {
              this.cart[i].quantity--;
            }
          } else if (updateType == "add") {
            this.cart[i].quantity++;
          } else {
            this.cart[i].quantity = 0;
          }
          break;
        }
      }
    },
    totalPrice() {
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].total = this.cart[i].quantity * this.cart[i].price;
      }
      console.log();
    },
    checkout() {
      let address;
      let name;
      if (!localStorage.getItem("address") && !localStorage.getItem("name")) {
        name = prompt("please enter your name");
        address = prompt("please enter your full address");
        localStorage.setItem("address", address);
        localStorage.setItem("name", name);
      } else {
        address = localStorage.getItem("address");
        name = localStorage.getItem("name");
      }
      console.log(address);
      document.write(
        '<span style="text-align: center; text-align: center; padding-top: 50px; font-weight: bold; font-family: -webkit-body; text-decoration: blink; font-size: 50px;">' +
          "Hello '" +
          name +
          "' your order is been placed it will reach to " +
          address +
          " within 5 working Days Thank you :-)" +
          "</span>"
      );
    },
  },
  beforeMount() {
    this.getCart();
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0px 2px 5px 1px;
  margin: 20px;
}
.data {
  float: left;
  padding: 20px;
  text-align: left;
  padding-top: 80px;
}
img {
  width: 250px;
  float: left;
  height: 250px;
  background-size: cover;
  padding: 30px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.13);
}
#jtext {
  text-align: center;
  text-align: center;
  padding: 100px;
  font-weight: bold;
  font-family: -webkit-body;
  text-decoration: blink;
  font-size: 50px;
}
.buttons {
  transform: translate(450px, -40px);
}
.quantity-toggle {
  float: left;
  margin-top: -30px;
}
.removecart {
  padding-left: 120px;
  
}
.rem{
    border-radius: 12px;
    background: rgba(247, 5, 5, 0.863);
    box-shadow: 0px 2px 5px 0px ;
    color: whitesmoke;

}
.togbut{
    border-radius: 8px;
    background: rgba(113, 231, 113, 0.466);
    color: rgb(0, 0, 0);
    font-weight: bold;

}
.cart__quantity{
    padding-left: 8px;
    padding-right: 8px;
}
.total-quantity{
    font-weight: bold;
    font-size: 20px;
    float: left;
}
.total{
    font-weight: bold;
    font-size: 25px;
    float: right;
    padding-bottom: 20px;
    transform: translate(-70px, -25px);
}
.checkout{
    border-radius: 8px;
    background: rgba(121, 206, 121, 0.61);
    font-weight: bold;
    text-transform: uppercase;
    
}
</style>