<template>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
    <label>
      <input type="checkbox" value="서울" v-model="checked" />서울
    </label>
    <label>
      <input type="checkbox" value="부산" v-model="checked" />부산
    </label>
    <label>
      <input type="checkbox" value="제주" v-model="checked" />제주
    </label>
    <br />
    <span>체크한 지역:{{ checked }} </span>
    <label>
      <input type="radio" v-bind:value="flavour[0]" v-model="radio" />초코
    </label>
    <label>
      <input type="radio" v-bind:value="flavour[1]" v-model="radio" />바닐라
    </label>
    <label>
      <input type="radio" v-bind:value="flavour[2]" v-model="radio" />딸기
    </label>
    <br />
    <span>체크한 맛:{{ radio }} </span>
  </div>
</template>
<script>
export default {
  name: 'selectBinding',
  components: {},
  data() {
    return {
      city: '064',
      checked: [],
      radio: '',
      //   flavour01: '초코',
      //   flavour02: '바닐라',
      //   flavour03: '딸기',
      flavour: ['초코', '바닐라', '딸기'],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmouted() {},
  methods: {},
};
</script>
