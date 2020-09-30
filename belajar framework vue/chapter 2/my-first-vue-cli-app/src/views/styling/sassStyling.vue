<template>
  <button class="button--green">click</button>
</template>

<style lang="scss">
// dalam vue kita dapat menggunakan preprocesor yang akan kita pakai
// untuk menentukan preprocecor apa yang akan kita pakai kita dapat mengisi atribut lang pada element style
.button {
  &--green {
    background-color: green;
    color: white;
  }
}
</style>