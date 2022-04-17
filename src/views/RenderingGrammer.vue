<template>
  <div>
    <h1 v-if="type === 'a'">type is a</h1>
    <h1 v-else-if="type === 'b'">type is b</h1>
    <h1 v-else>type is other</h1>
    <h1 v-if="h1Render">h1Render is true</h1>
    <p v-show="pRender">pRender is true</p>
  </div>
</template>
<script>
export default {
  name: 'rendingGrammer',
  components: {},
  data() {
    return {
      type: 'b',
      h1Render: false,
      pRender: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {},
};
</script>
