<template>
  <div>
    x:<input type="text" v-model.number="x" /> + y:<input
      type="text"
      v-model.number="y"
    />
    <br />
    <button @click="addNum">Click to add</button>
    <br />
    result:<input type="text" v-model.number="z" />
  </div>
</template>
<script>
export default {
  name: 'watchVue',
  components: {},
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {
    addNum() {
      this.z = this.x + this.y;
    },
  },
  watch: {
    x() {
      this.z = this.x + this.y;
    },
    y() {
      this.z = this.x + this.y;
    },
  },
};
</script>
