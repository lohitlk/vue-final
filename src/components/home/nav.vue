
 <template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand>Shoping Mart</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        
     
      </MDBNavbarNav>
         <MDBBtn to="#" active>
             <img style="width:30px; height:30px" src="../../assets/shopping-cart.png" alt="">
        
        </MDBBtn>
        
       <MDBBtn to="#" active style="padding-left:20px">
         <img style="height:30px; width:30px" src="../../assets/user.png"/>
        </MDBBtn>
    </MDBCollapse>
  </MDBNavbar>
</template>


<script>
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,

  MDBCollapse,
 
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  name: "Navbar",
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,

    MDBCollapse,
 
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);

    return {
      collapse1,
      dropdown1,
    };
  },
  methods: {
    data() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style>
</style>