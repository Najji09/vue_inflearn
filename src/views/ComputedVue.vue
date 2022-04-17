<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <h1>Hello {{ fullNameComputed }}</h1>
    <h1>Hello {{ fullNameMethod() }}</h1>
  </div>
</template>
<script>
export default {
  name: 'computedVue',
  components: {},
  data() {
    return {
      firstName: 'Jane',
      lastName: 'Johnson',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {
    fullNameMethod() {
      return this.firstName + ' ' + this.lastName;
    },
  },
  computed: {
    fullNameComputed() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script>
