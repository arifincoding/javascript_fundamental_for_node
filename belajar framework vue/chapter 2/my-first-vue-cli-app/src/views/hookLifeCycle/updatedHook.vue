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
  updated() {
    console.log("di poin ini, virtual dom dirender ulang");
    console.log(this.counter);
    console.log(this.$refs["example-element"].textContent);
  },
};
// pada hook updated setiap perubahan yang terjadi pada variabel counter maka hook updated akan dijalankan
// berbeda dari hook beforeUpdate nilai dom dan nilai counter sama karena pada hook updated akan merender ulang template jika ada perubahan pada nilai data
// jika tidak ada perubahan maka hook updated tidak akan dijalankan

// penting : Vue akan masuk ke hook updated(){ } setiap kali property yang ada di dalam option data mengalami perubahan nilai.

// penting : kondisi lainnya yang dapat membuat Vue masuk ke hook updated(){ } adalah ketika ada elemen / komponen yang di-render karena penggunaan directive tertentu, misal v-for atau v-if.
</script>