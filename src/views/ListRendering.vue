<template>
  <div>
    <select>
      <option
        v-bind:key="city.i"
        v-bind:value="city.v"
        v-for="city in options"
      ></option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'listRender',
  components: {},
  data() {
    return {
      options: [
        { v: '02', t: '서울' },
        { v: '21', t: '부산' },
        { v: '064', t: '제주' },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {},
};
</script>
