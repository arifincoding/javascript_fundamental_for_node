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
  created() {
    console.log(
      "At this point,this.property is now reactive and propertyComputed will update."
    );
    this.property = "Example property updated.";
    console.log(this.property);
    console.log(document.getElementById("ambil"));
  },
};
// created  dipanggil setelah instance Vue dibuat.

// pada hook created nilai property dengan nama property yang ada di option data dapat dibaca melalui console.log

// akan tetapi console.log(document.getElementById('ambil')) hanya akan menghasilkan null pada inspect Console karena elemen <div id="ambil">{{propertyComputed}}</div> belum di-render oleh Vue.

// penting : template belum di-render, cocok digunakan untuk logic pengambilan data dari API server.
</script>