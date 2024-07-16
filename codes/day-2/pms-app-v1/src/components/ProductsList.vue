<template>
  <!-- <FilterProduct /> -->
  <div>
    <label for="txtFilter">Filter By Name: &nbsp;</label>
    <input
      type="text"
      id="txtFilter"
      v-model="filterText" />
  </div>
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
  <!-- <ProductDetail /> -->
  <div v-if="selectedProduct !== null">
    <h2>Details of {{ selectedProduct.productName }}</h2>
    <br />
    <div>
      <label for="txtId">Id:</label>
      <input
        type="text"
        readonly
        id="txtId"
        :value="selectedProduct.productId" />
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
  <span v-else> Select a Product to View Details </span>
</template>
<script>
  import { products } from "../data/products";

  export default {
    data() {
      return {
        productRecords: products,
        selectedProduct: null,
        filterText: "",
      };
    },
    methods: {
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
