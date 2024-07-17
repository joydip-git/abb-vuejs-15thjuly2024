<template>
  <div v-if="fetchComplete">
    <div v-if="errorInfo === ''">
      <div v-if="selectedProduct !== null">
        <h2>Details of {{ selectedProduct.productName }}</h2>
        <br />
        <div>
          <label for="txtId">Id:</label>
          <input
            type="text"
            readonly
            id="txtId"
            :value="selectedProduct.id" />
        </div>
        <div>
          <label for="txtName">Name:</label>
          <input
            type="text"
            readonly
            id="txtName"
            :value="selectedProduct.productName" />
        </div>
        <div>
          <label for="txtCode">Code:</label>
          <input
            type="text"
            readonly
            id="txtCode"
            :value="selectedProduct.productCode" />
        </div>
        <div>
          <label for="txtDescription">Description:</label>
          <textarea
            readonly
            cols="40"
            rows="10"
            id="txtDescription"
            :value="selectedProduct.description"></textarea>
        </div>
        <div>
          <label for="txtDate">Released On:</label>
          <input
            type="text"
            readonly
            id="txtDate"
            :value="selectedProduct.releaseDate" />
        </div>
        <div>
          <label for="txtPrice">Price:</label>
          <input
            type="text"
            readonly
            id="txtPrice"
            :value="selectedProduct.price" />
        </div>
        <div>
          <label for="txtRating">Rating:</label>
          <input
            type="text"
            readonly
            id="txtRating"
            :value="selectedProduct.starRating" />
        </div>
        <div>
          <img
            :src="selectedProduct.imageUrl"
            alt="NA"
            :title="selectedProduct.productName" />
        </div>
      </div>
      <div v-else>
        <span>No such record found</span>
      </div>
    </div>
    <div v-else>
      <span>{{ errorInfo }}</span>
    </div>
  </div>
  <div v-else>
    <span>Loading...</span>
  </div>
</template>

<script>
  import { getProduct } from "@/services/productservice";

  export default {
    props: {
      selectedProductId: {
        type: String,
        required: true,
        default: null,
      },
    },
    data() {
      return {
        selectedProduct: null,
        errorInfo: "",
        fetchComplete: false,
      };
    },
    methods: {
      async fetchProduct() {
        try {
          const resp = await getProduct(this.$props.selectedProductId);
          if (resp.status === 200) {
            this.selectedProduct = resp.data;
            this.errorInfo = "";
            this.fetchComplete = true;
          } else {
            this.selectedProduct = null;
            this.errorInfo = resp.statusText;
            this.fetchComplete = true;
          }
        } catch (error) {
          this.selectedProduct = null;
          this.errorInfo = error.message;
          this.fetchComplete = true;
        }
      },
    },
    mounted() {
      this.fetchProduct();
    },
    watch: {
      selectedProductId: {
        handler(newId, oldId) {
          if (newId !== oldId) this.fetchProduct();
        },
        //immediate:true
      },
    },
  };
</script>
