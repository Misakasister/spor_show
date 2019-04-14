<template>
  <mu-container>
    <mu-paper :z-depth="1">
      <mu-data-table
        stripe
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="list"
        @row-click="show"
      >
        <template slot-scope="scope">
          <td class="is-center">{{scope.row.item}}</td>
          <Dialog v-bind:parentmsg="showDialog"  v-on:fun="change" :tranlist="tranlist"></Dialog>
        </template>
      </mu-data-table>
    </mu-paper>
  </mu-container>
</template>
<style>
table {
  width: 100%;
}
</style>

<script>
import Dialog from "@/components/Dialog";
export default {
  data: function() {
    return {
      showDialog: false,
      tranlist:{name:""},
      sort: {
        name: "",
        order: "asc"
      },
      columns: [{ title: "项目", name: "item", align: "center" }],
      list: [
        {
          item:"跑步"+'名次',
          id:1,
        },
        {
          item:"游泳"+'名次',
          id:2,
        },
        {
          item:'跳绳'+'名次',
          id:3
        }
      ]
    };
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    },
    //向展示框传递 showDialog 变量 控制展示框的出现与否，
    //tranlist 是 点击的哪一行
    show(index) {
      this.showDialog = true;
      this.tranlist=this.list[index];
      console.log(this.tranlist);
    },
    change(flag){
      this.showDialog=flag;
    }
  },
  components: {
    Dialog
  }
};
</script>
