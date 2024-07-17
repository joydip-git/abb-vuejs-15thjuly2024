<template>
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
</template>

<script>
  // import { Product } from "../models/product";
  export default {
    //props: ["selectedProductId"],
    props: {
      selectedProductId: {
        type: Number,
        required: true,
        default: null,
      },
    },
  };
</script>
