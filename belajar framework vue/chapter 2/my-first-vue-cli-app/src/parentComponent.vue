<template>
  <div>
    <p>{{ message }}</p>
    <!-- mendengar subuah event disini dan mendapatkan sebuah method -->
    <!-- nama $emit pada komponen anak akan dipanggil disini -->
    <ChildComponent v-on:custom-event-name="setMessage" />
  </div>
</template>

<script>
import ChildComponent from "./childComponent.vue";
export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      message: "Hi",
    };
  },
  methods: {
    setMessage(payload) {
      this.message = payload.message;
    },
  },
};
// pada komponen induk anda hanya menambahkan v-on:namadariemit dan menetapkan payload sebagai argumen pertama jika ada
// dengan ini anda bisa membuat event di komponen anak dan dapat dipanggil di komponen induk dengan mudah
// dan dengan ini juga anda dapat mengurangi kode di komponen induk dan akan terlihat bersih
// custom event($emit) hanya dapat di gunakan jika anda meng import komponen childnya saja jadi tidah dapat digunakan secara global
</script>