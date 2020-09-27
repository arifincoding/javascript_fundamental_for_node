<script>
export default {
  name: "NavLink",
  props: ["url", "text"],
};
// props adalah kustom attribut yang dapat di daftarkan pada suatu component
// props nanti akan menjadi property dari component
// dengan menggunakan props kita dapat menghindari hardcode pada component kita
// dan membuat script kita menjadi simple
</script>

<template>
  <a v-bind:href="url">{{ text }}</a>
</template>