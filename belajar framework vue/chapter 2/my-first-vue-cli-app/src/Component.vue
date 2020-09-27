<script>
// untuk menggunakan component yang sudah kita buat kita harus meng import component tersebut terlebih dahulu
import HomeLink from "./components/homeLink.vue";
export default {
  name: "ReUse",
  components: {
    HomeLink,
  },
};
// name berfungsi untuk nama dari component ini
// components berfungsi untuk mendaftarkan component yang kita import agar dapat digunakan pada block html dibawah
</script>

<template>
  <div id="reUse">
    <nav>
      <!-- cara menggunakan component tersebut adalah dengan script <NamaComponent/> -->
      <HomeLink />
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <p>Welcome to our <HomeLink /> page!</p>
  </div>
</template>