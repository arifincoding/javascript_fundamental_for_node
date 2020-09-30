<template>
  <div>{{ pesan }}</div>
</template>

<script>
export default {
  data() {
    return {
      pesan: "properti ini akan memakan banyak memori jika tidak dibersihkan",
    };
  },
  beforeUnmount() {
    console.log("pada point ini properti pesan akan di bersihkan");
    console.log(
      "pada poin ini komponen turunan dan event listener belum di bersihkan"
    );
    this.pesan = null;
    delete this.pesan;
  },
};
// pada hook beforeUnmount component anda akan tetap berfungsi sepenuhnya
// gunakan ini jika anda perlu membersihkan event, reactive ataupun properti pada data
</script>