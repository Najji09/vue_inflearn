<template>
  <div>
    <button @click="increaseCount(), alertCount()">Add 1</button>
    <p>The count is {{ count }}</p>
    <select v-model="flavours.name" @change="changeFlavour">
      <option v-for="(falvour, i) in flavours" :value="falvour.name" :key="i">
        {{ falvour.name }}
      </option>
    </select>
    <input type="text" v-model="textValue" @keyup.enter="alertInput" />
  </div>
</template>
<script>
export default {
  name: 'eventVue',
  components: {},
  data() {
    return {
      count: 0,
      flavours: [
        { name: 'Chocolate' },
        { name: 'Vanilla' },
        { name: 'Strawberry' },
      ],
      textValue: '',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {
    changeFlavour() {
      alert(this.flavours.name);
    },
    increaseCount() {
      this.count++;
    },
    alertCount() {
      alert(this.count);
    },
    alertInput() {
      alert(this.textValue);
    },
  },
};
</script>
