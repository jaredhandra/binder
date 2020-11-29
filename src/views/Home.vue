<template>
  <div class="home">
    Members
    <div>
      <vue-good-table
        :columns="columns"
        :rows="members"
        :search-options="{
        enabled: true,
        placeholder: 'Search this table'
      } "/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'home',
  data() {
    return {
      columns: [
        { label: 'Name', field: 'name' },
        { label: 'Email', field: 'email' },
        { label: 'Renewing Member?', field: 'renewingMember' },
        { label: 'Date of Purchase', field: 'timestamp' }
      ]
    };
  },
  components: {
    VueGoodTable
  },
  computed: {
    ...mapGetters({ members: 'getMembers' })
  },
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
