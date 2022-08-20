<template>
<div>
  <h3>{{ finalCounter }}</h3>
</div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter'])
  },
};
</script>