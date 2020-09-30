<template>
  <button class="button--green">click</button>
</template>

<style>
/* jika anda lebih ingin memakai css biasa di vue juga bisa */
/* jika block style digunakan tanpa konfigurasi tertentu maka block style di aplikasikan secara global */
/* jadi setiap component yang dirender dengan class button--green memiliki styling yang sama */
.button--green {
  background-color: green;
  color: white;
}
</style>