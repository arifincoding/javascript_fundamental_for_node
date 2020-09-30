<template>
  <div id="ambil">{{ propertyComputed }}</div>
</template>

<script>
export default {
  data() {
    return {
      property: "Example property.",
    };
  },
  computed: {
    propertyComputed() {
      return this.property;
    },
  },
  beforeMount() {
    console.log(
      "di poin ini, vm.$el atau element dom belum dibuat atau dirender"
    );
    console.log(document.getElementById("ambil"));
  },
};
// hook beforeMount dipanggil sebelum instance vue dikaitkan ke DOM
// jadi jika kita memanggil element dom maka akan menghasilkan nilai null
</script>