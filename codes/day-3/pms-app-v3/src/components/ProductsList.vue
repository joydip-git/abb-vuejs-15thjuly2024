<template>
  <FilterProduct @filterTextChanged="updateFilterText" />

  <div v-if="fetchComplete">
    <div v-if="errorInfo === ''">
      <div v-if="productRecords && productRecords.length > 0">
        <h2>List of Products</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="p in filteredRecords"
              :key="p.id">
              <td>
                <img
                  class="img-style"
                  :src="p.imageUrl"
                  alt="NA"
                  :title="p.productName" />
              </td>
              <td>
                <u @click="selectProductId(p.id)">
                  {{ p.productName }}
                </u>
              </td>
              <td>{{ p.price }}</td>
              <td>{{ p.starRating }}</td>
              <td>
                <button
                  type="button"
                  class="button-style"
                  @click="removeProduct(p.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />

        <div v-if="selectedProductId !== null">
          <ProductDetail :selected-product-id="selectedProductId" />
        </div>
        <span v-else> Select a Product to View Details </span>
      </div>
      <div v-else>No records found...</div>
    </div>
    <div v-else>{{ errorInfo }}</div>
  </div>
  <div v-else>
    <span>Loading...</span>
  </div>
</template>

<script>
  import { deleteProduct, getProducts } from "../services/productservice";
  import FilterProduct from "./FilterProduct.vue";
  import ProductDetail from "./ProductDetail.vue";

  export default {
    components: {
      FilterProduct,
      ProductDetail,
    },
    data() {
      return {
        productRecords: [],
        errorInfo: "",
        fetchComplete: false,
        selectedProductId: null,
        filterText: "",
      };
    },
    methods: {
      updateFilterText(newText) {
        this.filterText = newText;
      },
      selectProductId(id) {
        console.log(typeof id);
        console.log(typeof this.selectedProductId);
        this.selectedProductId = id;
        console.log(this.selectedProductId);
      },
      async removeProduct(id) {
        try {
          const resp = await deleteProduct(id);
          if (resp.status === 200) {
            if (this.selectedProductId === id) this.selectedProductId = null;
            this.fetchProducts();
            // const foundIndex = this.productRecords.findIndex(
            //   (p) => p.id === id
            // );
            // this.productRecords.splice(foundIndex, 1);
          } else {
            this.errorInfo = resp.statusText;
          }
        } catch (error) {
          this.errorInfo = error.message;
        }
      },
      async fetchProducts() {
        try {
          const resp = await getProducts();
          if (resp.status === 200) {
            console.log(resp.data);
            this.productRecords = resp.data;
            this.errorInfo = "";
            this.fetchComplete = true;
          } else {
            this.productRecords = [];
            this.errorInfo = resp.statusText;
            this.fetchComplete = true;
          }
        } catch (error) {
          this.productRecords = [];
          this.errorInfo = error.message;
          this.fetchComplete = true;
        }
      },
    },
    mounted() {
      this.fetchProducts();
    },
    computed: {
      filteredRecords() {
        if (this.filterText !== "")
          return this.productRecords.filter((p) =>
            p.productName
              .toLocaleLowerCase()
              .includes(this.filterText.toLocaleLowerCase())
          );
        else return this.productRecords;
      },
    },
  };
</script>

<style scoped>
  .img-style {
    margin: 2px;
    width: 80px;
  }
  .button-style {
    background-color: red;
    border-color: red;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    color: white;
    height: 50px;
    width: 80px;
    padding: 5px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: medium;
  }
</style>
