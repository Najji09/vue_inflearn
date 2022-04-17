<template>
  <div>
    <img v-bind:src="bee" style="height: 200px; width: auto" />
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue === ''">Click</button>
  </div>
</template>
<script>
export default {
  name: 'attrBinding',
  components: {},
  data() {
    return {
      bee: 'img/bee.png',
      textValue: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {},
};
</script>
