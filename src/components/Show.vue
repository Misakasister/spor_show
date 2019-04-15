<template>
  <mu-container>
    <mu-paper :z-depth="1">
      <mu-data-table
        stripe
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="list"
        :min-col-width=50
      >
        <template slot-scope="scope">
          <td class="is-center">{{scope.row.college}}</td>
          <td class="is-center">{{scope.row.name}}</td>
          <td class="is-center">{{scope.row.score}}</td>
          <td class="is-center">{{scope.row.place}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </mu-container>
</template>
<style>
/* table {
  width: 100%;
} */
</style>

<script>

export default {
  props:["userShowId"],
  data: function() {
    return {
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "参赛者学院", name: "college", align: "center"},
        { title: "参赛者姓名", name: "name", align: "center"},
        { title: "成绩", name: "score", align: "center"},
        { title: "名次", name: "place", align: "center" }
      ],
      list: [
      //   {
      //    collage:"交通",
      //    name:"小明",
      //    place:"1"
      //   },
      //     {
      //    collage:"交通",
      //    name:"小明",
      //    place:"2"
      //   },
      //     {
      //    collage:"交通",
      //    name:"小明",
      //    place:"3"
      //   },
      //     {
      //    collage:"交通",
      //    name:"小明",
      //    place:"4"
      //   },
      //  {
      //    collage:"交通",
      //    name:"小明",
      //    place:"5"
      //   },
      //     {
      //    collage:"交通",
      //    name:"小明",
      //    place:"6"
      //   }
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
  mounted: function() {
    let that=this;
    let str='https://csdn.design/temp/'+this.userShowId;
    this.axios.get(str, {
  })
  .then(function (response) {
    // console.log(response.data);
    console.log("111")
    that.list=response.data;
    // console.log(that.list);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>
