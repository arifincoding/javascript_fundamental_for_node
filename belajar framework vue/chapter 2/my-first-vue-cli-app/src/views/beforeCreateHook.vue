<template>
  <h1>I'm a new component!</h1>
</template>

<script>
export default {
  beforeCreate() {
    console.log("At this point, events and lifecycle have been initialized.");
  },
};
</script>
