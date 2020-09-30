<template>
  <div ref="example-element">{{ counter }}</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  beforeUpdate() {
    console.log("dipoin ini, virtual dom belum di render ulang");
    console.log(this.counter);
    console.log(this.$refs["example-element"].textContent);
  },
};
// hook beforeUpdate berjalan setelah perubahan data pada component dan siklus update dimulai, tepat sebelum DOM ditambal dirender ulang
// Gunakan beforeUpdate jika Anda perlu mendapatkan status baru dari setiap data reaktif pada komponen Anda sebelum benar-benar dirender:
// jika kita mencoba mengambil nilai dom maka hasil dari nilai dom yang kita ambil dengan nilai variabel counter pastilah berbeda karena nilai variabel counter baru belum di render ulang pada template
</script>