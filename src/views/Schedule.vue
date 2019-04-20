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
          <td class="is-center">{{scope.row.subtime}}</td>
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
    


         //时间排序
            for (let i = 0; i < that.list.length - 1; i++) {
              for (let j = 0; j < that.list.length - 1 - i; j++) {
                if (that.list[j].time < that.list[j + 1].time) {
                  let t = that.list[j];
                  that.list[j] = that.list[j + 1];
                  that.list[j + 1] = t;
                }
              }
            };
            //时间格式化
            for (let i = 0; i < that.list.length; i++) {
              that.list[i].time = new Date(that.list[i].time);
              let year = that.list[i].time.getFullYear();
              let month = that.list[i].time.getMonth() + 1;
              let day = that.list[i].time.getDate();
              let hour = that.list[i].time.getHours();
              let min = that.list[i].time.getMinutes();
              let timestr =
                month + "-" + day + " " + hour + ":" + min;
              that.list[i].subtime = timestr;
            };




























  })
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>
