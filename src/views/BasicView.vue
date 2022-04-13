<template>
  <div>
    <h2>{{ title }}</h2>
    <input v-model="title" />
  </div>
</template>
<script>
export default {
  name: 'basicComponent',
  components: {},
  data() {
    return {
      title: 'Hi',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {},
};
</script>
