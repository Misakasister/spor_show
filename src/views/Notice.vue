<template>
  <mu-container>
    <mu-paper :z-depth="1">
      <mu-data-table
        stripe
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="list"
        :max-height="720"
      >
        <template slot-scope="scope">
          <td class="is-center" @click.prevent="show(scope.$index)">{{scope.row.item}} 决赛名次</td>
        </template>
      </mu-data-table>
      <Dialog v-bind:parentmsg="showDialog" v-on:fun="change" :tranlist="tranlist" ></Dialog>
    </mu-paper>
  </mu-container>
</template>
<style>
</style>

<script>

import Dialog from "@/components/Dialog";
export default {
  data: function() {
    return {
      showDialog: false,
      tranlist: { name: "" },
      sort: {
        name: "",
        order: "asc"
      },
      columns: [{ title: "项目", name: "item", align: "center" }],
      list: [],
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
      this.tranlist = this.list[index];
  },
    change(flag) {
      this.showDialog = flag;
    }
  },
  components: {
    Dialog
  },
    mounted: function() {
    let that=this;
    this.axios.get('https://csdn.design/temp/notice2', {
  })
  .then(function (response) {
    // console.log(response.data);
    that.list=response.data;
     //时间对象化
        for (let i = 0; i < that.list.length; i++) {
          that.list[i].time = new Date(that.list[i].time);
        }
        //时间排序
        for (let i = 0; i < that.list.length - 1; i++) {
          for (let j = 0; j < that.list.length - 1 - i; j++) {
            if (that.list[j].time < that.list[j + 1].time) {
              let t = that.list[j];
              that.list[j] = that.list[j + 1];
              that.list[j + 1] = t;
            }
          }
        }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>
