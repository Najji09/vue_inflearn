<template>
  <div class="container" v-bind:class="[activeClass, redText]">
    Class Binding
    <div v-bind:style="styleObject">Style object</div>
    <div v-bind:style="[greenBorder, width100px]">Style object</div>
  </div>
</template>
<script>
export default {
  name: 'classBinding',
  components: {},
  data() {
    return {
      activeClass: 'active',
      redClass: 'text-red',
      styleObject: {
        backgroundColor: 'yellow',
        color: 'green',
      },
      greenBorder: 'border: 1px solid green',
      width100px: 'width: 100px; height:100px;',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {},
};
</script>
<style scoped>
.container {
  width: 100%;
  border: 1px dotted blue;
}

.active {
  border: 1px solid red;
  background: pink;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
