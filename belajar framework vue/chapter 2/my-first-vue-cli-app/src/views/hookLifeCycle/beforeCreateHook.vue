<template>
  <h1>I'm a new component!</h1>
</template>

<script>
// beforeCreate hook dipanggil setelah inisiasi instance vue
export default {
  beforeCreate() {
    console.log("At this point, events and lifecycle have been initialized.");
  },
};
</script>
