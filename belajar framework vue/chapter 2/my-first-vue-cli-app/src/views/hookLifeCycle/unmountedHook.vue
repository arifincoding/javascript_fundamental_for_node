<script>
import Home from "../Home.vue";
export default {
  unmounted() {
    console.log(
      "pada pin ini komponen turunan dan event listener akan dihapus semuanya"
    );
    console.log(this);
    Home.informService("component destroyed");
  },
};
// pada hook unmounted berjalan maka tidak ada yang tersisa di komponen anda
// gunakan ini jika anda perlu melakukan pembersihan di menit-menit terakhir atau memberi tahu server jarak jauh bahwa komponen telah dimusnahkan
</script>
<template>
  <div>ui</div>
</template>