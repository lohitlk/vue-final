<template>
  <div class="container">
    <h1>Shopping cart</h1>
    <div v-for="product in products" :key="product.id" class="box">
      <div class="image">
        <img class="img" :src="product.srcImg" />
      </div>
      <div class="price">
        <p>{{ product.name }}</p>
        <ul v-html="product.description"></ul>
        <p style="font-weight: 600">&#8377;{{ product.price }}</p>
        <button @click="product.status = !product.status">Buy item</button>
        <div v-show="product.status">
          <div class="quantity-toggle">
            <button @click="updateCart(product, 'subtract')">&mdash;</button>
            <span class="cart__quantity">{{ product.quantity }}</span>
            <button @click="updateCart(product, 'add')">&#xff0b;</button>
          </div>
        </div>
      </div>
    </div>
    {{totalPrice()}}
    <div class="nav__cart">
      <button class="cartBtn" @click="showCart = !showCart">Cart</button>
      <span class="total-quantity">{{ totalQuantity }}</span>
      <div v-if="showCart && finalPrice>0" class="cart-dropdown">
        <ol class="cart-dropdown__list">
          <li v-for="product in products" :key="product.id">
            {{ product.name }} x {{ product.quantity }}=&#8377;{{product.total }}<button class="remove" @click="updateCart(product, 'delete')">Remove</button>
          </li>
        </ol>
        Total=&#8377;{{finalPrice}};
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkout",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "ASUS VivoBook 15 (2020)",
          srcImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShi3l8-l1yv5RC81ihGz52DZAT6MNh3vuC_A&usqp=CAU",
          description:
            "<li>39.6 cm HD</li><li>Dual Core Intel Celeron N4020</li><li>4GB RAM/256GB SSD/Integrated Graphics</li><li>Windows 10 Home</li>",
          quantity: 0,
          price: 24990,
          total:0,
          status: false,
        },
        {
          id: 2,
          name: "Dell Inspiron 3501",
          srcImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3ugkP19XB53uiS7ICtgE3m_0jsu4vJIZOA&usqp=CAU",
          description:
            "<li>15.6 FHD Display Laptop</li><li>i5-1135G7 / 8GB / 1TB HDD + 256GB SSD</li><li>Integrated Graphics</li><li>Win10 + MSO</li>",
          quantity: 0,
          price:59290,
          status: false,
          total:0,
        },
      ],
      showCart: false,
    };
  },
  computed: {
    cart() {
      return this.products.filter((product) => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    finalPrice() {
      return this.products.reduce(
        (total, product) => total + product.total,
        0
      );
    },
  },
  methods: {
    updateCart(product, updateType) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          if (updateType === "subtract") {
            if (this.products[i].quantity !== 0) {
              this.products[i].quantity--;
            }
          } else if (updateType === "add") {
            this.products[i].quantity++;
          }
            else{
              this.products[i].quantity=0;
            }
          break;
        }
      }
    },
    totalPrice(){
      for (let i = 0; i < this.products.length; i++){
        this.products[i].total=(this.products[i].quantity*this.products[i].price);
      }
      // console.log(this.products)
    }
  },
};
</script>

<style>
* {
  margin: 0;
    padding: 0;
}
.container {
  
  width: 900px;
  margin: 10px auto;
  justify-content: center;
}
h1 {
  color: rgb(5, 138, 143);
  text-align: center;
  margin-bottom: 5px;
  font-size: 50px;
}
.box{
      /* width: 85%; */
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 10px auto;
    border: gray 5px solid;
    display: table-cell;
    border: outset;
}

.image {
  margin: 10px;
}
.img {
  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 300px;
  object-fit: none;
}
.price {
  margin: 10px 0 10px 50px;
  padding: 10px;
  align-items: center;
}
p {
  font-size: 25px;
  font-style: bold;
}
ul {
  margin: 10px;
}
li {
  margin-left: 20px;
  line-height: 25px;
}
button {
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(85, 206, 15);
  border-style: none;
  color: white;
  border-radius: 5px;
}
button:hover {
  background-color: orange;
}
.quantity-toggle {
  display: flex;
  align-content: center;
  align-items: center;
}
input {
  height: 40px;
  text-align: center;
  width: 50px;
  border: 2px solid grey(160, 153, 153);
  border-radius: 4px;
}

.nav__cart {
  margin: 0 auto;
  text-align: right;
  display: table-caption;

}
.cartBtn {
  margin: 10px auto;
  padding: 10px 20px;
}
.cart-dropdown {
  background: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: #333;
  overflow: auto;
  padding: 0;
  width: 200px;
  text-align: right;
  margin-inline-start: auto;

}
.cart-dropdown__list {
 margin:10px;
}
.cart__quantity {
  
  padding: 20px;
 
}
.total-quantity {
  text-align: center;
  color: aliceblue;
  background: rgb(228, 19, 12);
  border-radius: 50%;
  font-weight: bold;
  padding: 8px;
  top: -18px;
  position: relative;
  left: -20px;
}
ol{
  text-decoration: peru;
}
</style>