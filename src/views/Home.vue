<template>
  <div class="home">
    Home
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',
  methods: {
    ...mapActions([
      'getMembershipData'
    ])
  },
  mounted() {
    this.getMembershipData();
  }
};
</script>
