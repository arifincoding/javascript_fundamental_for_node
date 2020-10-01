<template>
  <button v-on:click="emitCustomEvent">Emit Event</button>
</template>

<script>
export default {
  methods: {
    emitCustomEvent() {
      this.$emit("custom-event-name", { message: "My custom message" });
    },
  },
};
// $emit akan memancarkan sebuah event ke komponen induk
//  $emit berisi nama event contoh custom-event-name
//  dan payload(opsional) yang biasanya berisi object contoh {message: "My custom message"}
// dengan ini anda bisa membuat event di komponen anak dan dapat dipanggil di komponen induk dengan mudah
// dan dengan ini juga anda dapat mengurangi kode di komponen induk dan akan terlihat bersih
// custom event($emit) hanya dapat di gunakan jika anda meng import komponen childnya saja jadi tidah dapat digunakan secara global
</script>