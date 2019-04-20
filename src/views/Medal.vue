<template>
  <mu-container>
    <mu-paper :z-depth="1">
      <mu-data-table
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="list"
      >
        <template slot-scope="scope">
          <td class="is-center">{{scope.row.college}}</td>
          <td class="is-center">{{scope.row.gold}}</td>
          <td class="is-center">{{scope.row.silver}}</td>
          <td class="is-center">{{scope.row.bronze}}</td>
          <td class="is-center">{{scope.$index+1}}</td>
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
      num:0,
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "学院", name: "college", align: "center",},
        { title: "金牌", name: "gold", align: "center" },
        { title: "银牌", name: "silver", align: "center"},
        { title: "铜牌", name: "bronze", align: "center"},
        { title: "名次", name: "place", align: "center"}
      ],
      list: [
        {
          college: "交通",
          gold: 1,
          silver: 1,
          bronze: 1,
          place: 1
        },
        {
          college: "交通",
          gold: 1,
          silver: 1,
          bronze: 1,
          place: 1
        },
        {
          college: "交通",
          gold: 1,
          silver: 1,
          bronze: 1,
          place: 1
        },
        {
          college: "交通",
          gold: 1,
          silver: 1,
          bronze: 1,
          place: 1
        },
        {
          college: "交通",
          gold: 1,
          silver: 1,
          bronze: 1,
          place: 1
        },
        {
          college: "交通域工程学院",
          gold: 1,
          silver: 1,
          bronze: 1,
          place: 1
        }
      ]
    };
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    }
  },
  //  mounted: function() {
  //   let that=this;
  //   this.axios.get('https://csdn.design/temp/list', {
  // })
  // .then(function (response) {
  //   // console.log(response.data);
  //   // let a=new Array(response.data);
  //   that.list=response.data ;
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // }
};
</script>