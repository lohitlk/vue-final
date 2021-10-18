<template>
  <div class="container">
    <h1>Items List</h1>
    <div class="containers">
      <div class="view" v-for="(Userele, index) in userData" :key="index">
        <div class="rows">
          <div class="columns">
            <div class="card" @click="getFunction(Userele)">
              <img :src="Userele.image" />
              <p class="title">{{ Userele.title }}</p>
              <p class="price">{{ Userele.price }} <span>&#36;</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userData: [],
    };
  },

  methods: {
    getFunction(Userele) {
      this.$router.push({
        name: "getUserById",
        params: { id: Userele.id, details: JSON.stringify(Userele) },
      });
    },
  },
  async created() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const data = await fetch(
      "https://fakestoreapi.com/products",
      requestOptions
    );

    this.userData = await data.json();

    console.log("data||", this.userData);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container{
  padding-top: 50px;
}
.cards {
  box-shadow: 12px 8px 18px 8px rgba(0, 0, 0, 0.712);
  max-width: 480px;
  max-height: 500px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
  float: left;
  padding-left: 20px;
}
.columns {
  float: left;
  width: 25%;
  padding: 0 10px;
  padding-top: 20px;
}
.rows {
  margin: 0 -5px;
}

img {
  width: 150px;
  height: 150px;
  background-size: cover;
  margin: 20%;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
</style>