<template>
  <div>
    <select v-model="jeju">
      <option v-for="(city, i) in options" :value="city.v" v-bind:key="i">
        {{ i }}-{{ city.t }}
      </option>
    </select>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>제품가격</th>
          <th>배송비</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in productList" :key="i">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.delivery }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
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
      jeju: '064',
      productList: [
        {
          name: 'electronic keyboard',
          price: 20000,
          delivery: 5000,
          category: 'electronics',
        },
        {
          name: 'vertical mouse',
          price: 40000,
          delivery: 2000,
          category: 'electronics',
        },
        {
          name: 'china vase',
          price: 10000,
          delivery: 2500,
          category: 'floral vase',
        },
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
