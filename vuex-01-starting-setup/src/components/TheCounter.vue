<template>
<div>
  <h3>{{ counter }}</h3>
</div>

</template>

<script>

export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
};
</script>