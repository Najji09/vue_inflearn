<template>
  <div>
    <input type="text" v-model="valueTxtModel" />
    <p>{{ valueTxtModel }}</p>
    <input type="number" v-model.number="valueNumModel" />
    <p>{{ valueNumModel }}</p>
    <textarea v-model="valueAreaModel"></textarea>
    <p>{{ valueAreaModel }}</p>
  </div>
</template>
<script>
export default {
  name: 'inputBinding',
  components: {},
  data() {
    return {
      valueTxtModel: 'ice cream',
      valueNumModel: 0,
      valueAreaModel: 'Hello',
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.valueTxtModel);
  },
  unmouted() {},
  methods: {},
};
</script>
