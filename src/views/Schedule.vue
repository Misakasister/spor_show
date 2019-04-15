<template>
  <mu-container>
    <mu-paper :z-depth="1">
      <mu-data-table
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="list" 
        :max-height=720
        :min-col-width=50
      >
        <template slot-scope="scope"> 
          <td class="is-center">{{scope.row.item}}</td>
          <td class="is-center">{{scope.row.state}}</td>
          <td class="is-center">{{scope.row.time}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </mu-container>
</template>

<style>

</style>

<script>
export default {
  data() {
    return {
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "项目",  name: "item" ,align: 'center'},
        { title: "状态",  name: "state" ,align: 'center'},
        { title: "时间", name: "time",align: 'center' }
      ],
      list: []
    };
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    }
  },
  mounted: function() {
    let that=this;
    this.axios.get('https://csdn.design/temp', {
  })
  .then(function (response) {
    that.list=response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>
