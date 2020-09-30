<template>
  <div>
    <h1>{{ title }} #{{ count }}</h1>
    <ul>
      <li v-for="item in list" v-bind:key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PropsWithSetting",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 1,
    },
  },
};
// props juga dapat disetting agar mandapatkan nilai yang di inginkan
// type untuk type data dari prop yang di inginkan
// required untuk menyeting agar prop tersebut harus di isi
// default untuk memberikan nilai default jika prop tersebut kosong atau tidak di isi
</script>