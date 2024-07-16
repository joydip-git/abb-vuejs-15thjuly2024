<template>
  <FilterProduct @filterTextChanged="updateFilterText" />

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
        v-for="(p, index) in filteredRecords"
        :key="p.productId">
        <td>
          <img
            class="img-style"
            :src="p.imageUrl"
            alt="NA"
            :title="p.productName" />
        </td>
        <td>
          <u @click="selectProduct(index)">
            {{ p.productName }}
          </u>
        </td>
        <td>{{ p.price }}</td>
        <td>{{ p.starRating }}</td>
        <td>
          <button
            type="button"
            class="button-style"
            @click="deleteProduct(index)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <br />

  <div v-if="selectedProductId > 0">
    <ProductDetail :selectedId="selectedProductId" />
  </div>
  <span v-else> Select a Product to View Details </span>
</template>

<script>
  import FilterProduct from "./FilterProduct.vue";
  import ProductDetail from "./ProductDetail.vue";

  export default {
    components: {
      FilterProduct,
      ProductDetail,
    },
    data() {
      return {
        //will be reassigned by calling the method "getProducts" from productservice.js file
        productRecords: [],
        selectedProductId: -1,
        filterText: "",
      };
    },
    watch: {},
    methods: {
      updateFilterText(newText) {
        this.filterText = newText;
      },
      selectProduct(index) {
        //const found = this.productRecords.find((p) => p.productId === id);
        //this.selectedProduct = found;
        this.selectedProduct = this.productRecords[index];
      },
      deleteProduct(index) {
        this.productRecords.splice(index, 1);

        if (this.selectedProduct !== null) {
          if (
            !this.productRecords.find(
              (p) => p.productId === this.selectedProduct.productId
            )
          )
            this.selectedProduct = null;
        }
      },
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
