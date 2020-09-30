<template>
  <div>
    <PropsWithSetting title="buah" count="3" list="anggur,apel,pisang" />
  </div>
</template>

<script>
import PropsWithSetting from "../components/propsWithSetting.vue";
export default {
  components: {
    PropsWithSetting,
  },
};
</script>