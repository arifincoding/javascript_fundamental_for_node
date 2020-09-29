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
  mounted() {
    console.log("pesan:" + this.property);
    console.log(document.getElementById("ambil"));
    console.log(this.$el);
  },
};
// pada hook mounted anda memliki akses penuh pada element dom,template dan reaktif karena template vue telah dirender

// this.$el akan mengambil semua isi pada template

// penting
// gunakan mounted untuk memodifikasi element DOM dan terutama mengintegrasikan library non-vue
// mounted tidak cocok untuk logic pengambilan data dari API server, sebab data sudah harus tersedia sebelum template di-render.
</script>