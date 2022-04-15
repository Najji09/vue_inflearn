<template>
  <div v-html="htmlString"></div>
</template>
<script>
export default {
  name: 'dataBindingHtml',
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red">This is a red String</p>',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {},
};
</script>
